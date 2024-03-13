import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import ChatHeader from "../Chat/ChatHeader";
import ChatInput from "../Chat/ChatInput";
import ChatMessage from "../Chat/ChatMessage";
import { checkName, login } from "../../api/authentication";
import onboarding from "../../json/onboarding_2";
import { changeAuthToken } from "../../slices/tokenSlice";

const rightNameMessage = {
  type: "login",
  text: "Ich habe Sie gefunden. Bitte nennen Sie mir nun Ihr Geburtsdatum (TT.MM.JJJJ).",
};

const wrongNameMessage = {
  type: "checkName",
  text: "Der von Ihnen eingegebene Name war falsch. Bitte versuche Sie es erneut.",
};

const endNameMessage = {
  type: "end",
  text: "Ich konnte Sie nicht finden. Bitte überprüfen Sie, ob Sie Ihren Namen richtig eingegeben haben. Falls ja, wenden Sie Sich bitte an einen Mitarbeiter oder eine Mitarbeiterin.",
};

const rightLoginMessage = (userName) => {
  return {
    type: "loggedIn",
    text: `Guten Tag, ${userName}! Ich konnte Sie erfolgreich erfassen.`,
  };
};

const wrongLoginMessage = {
  type: "login",
  text: "Das von Ihnen eingegebene Datum war falsch. Bitte versuche Sie es erneut.",
};

const endLoginMessage = {
  type: "end",
  text: "Ich konnte Sie nicht anhand Ihres Geburtsdatums erfassen. Bitte überprüfen Sie, ob Sie das Datum richtig eingegeben haben. Falls ja, wenden Sie Sich bitte an einen Mitarbeiter oder eine Mitarbeiterin.",
};

function Onboarding() {
  const [inputDisabled, setInputDisabled] = useState(true);
  const [gaveWrongAnswer, setGaveWrongAnswer] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const questionnaire = onboarding;
  let messageDelay = 2000;

  useEffect(() => {
    let objDiv = document.getElementById("auto-scroll");
    objDiv.scrollIntoView();
  });

  // Get first index of question that is not display
  let initialMessageindex = questionnaire.findIndex(
    (message) => message.type !== "display"
  );

  const [currentMessageIndex, setCurrentMessageIndex] =
    useState(initialMessageindex);

  const [displayedMessages, setDisplayedMessages] = useState(
    questionnaire.slice(0, currentMessageIndex + 1).map((question) => {
      return { ...question, user: false, typing: true };
    })
  );

  const compareAnswer = (question, answer) => {
    let enabled = false;

    // How the condition and answer should be compared
    switch (question.enableWhen[0].operator) {
      // They should not be equal
      case "!=":
        // If not equal
        if (answer !== question.enableWhen[0].answerCoding.display) {
          // The question should be asked
          enabled = true;
        }
        break;
      // They should be equal
      case "=":
        // If equal
        if (answer === question.enableWhen[0].answerCoding.display) {
          // The question should be asked
          enabled = true;
        }
    }

    return enabled;
  };

  // Check if an optional question should be asked
  const checkEnableQuestion = (question, answer) => {
    let enabled = false;

    if (Array.isArray(answer)) {
      answer.forEach((a) => {
        if (compareAnswer(question, a)) {
          enabled = compareAnswer(question, a);
        }
      });
    } else if (answer === undefined) {
      enabled = false;
    } else {
      enabled = compareAnswer(question, answer);
    }

    return enabled;
  };

  const handleNewMessage = (message) => {
    let indexIncrement = 1;
    const currentLinkId = questionnaire[currentMessageIndex].linkId;

    // Get the next question the user will be asked
    let nextQuestion = questionnaire[currentMessageIndex + indexIncrement];

    // Check if the question is optional
    if (nextQuestion.enableWhen) {
      let enableWhenQuestionId = nextQuestion.enableWhen[0].question;
      let enableWhenMessage;

      if (currentLinkId === enableWhenQuestionId) {
        enableWhenMessage = message;
      } else {
        enableWhenMessage = displayedMessages.filter((displayedMessage) => {
          return displayedMessage.questionLinkId === enableWhenQuestionId;
        })[0]?.text;
      }

      // Check if the question is enabled
      let enableQuestion = checkEnableQuestion(nextQuestion, enableWhenMessage);

      // If question not enabled, check next questions until one is enabled
      while (!enableQuestion) {
        indexIncrement++;
        nextQuestion = questionnaire[currentMessageIndex + indexIncrement];
        // If next question is optional
        if (nextQuestion.enableWhen) {
          // Check if the question is enabled
          enableWhenQuestionId = nextQuestion.enableWhen[0].question;
          if (currentLinkId === enableWhenQuestionId) {
            enableWhenMessage = message;
          } else {
            enableWhenMessage = displayedMessages.filter((message) => {
              return message.questionLinkId === enableWhenQuestionId;
            })[0]?.text;
          }
          enableQuestion = checkEnableQuestion(nextQuestion, enableWhenMessage);
        } else {
          // Else it is not optional so enabled
          enableQuestion = true;
        }
      }
    }

    let modifiedDisplayMessages = displayedMessages;

    if (message !== true) {
      modifiedDisplayMessages = displayedMessages.map((modifiedMessage) => ({
        ...modifiedMessage,
        typing: false,
      }));
    }

    if (message === true) {
      setDisplayedMessages([
        ...modifiedDisplayMessages,
        {
          ...nextQuestion,
          typing: true,
        },
      ]);
    } else if (nextQuestion.type === "final") {
      setDisplayedMessages([
        ...modifiedDisplayMessages,
        {
          type: "text",
          user: true,
          text: message,
          questionLinkId: currentLinkId,
          typing: false,
        },
        {
          ...nextQuestion,
          typing: true,
        },
        {
          type: "final",
          user: false,
          text: "Wenn Sie weitere Fragen zur Mammographie haben, können Sie diese nun gerne an mich stellen.",
          typing: true,
        },
      ]);
    } else {
      setDisplayedMessages([
        ...modifiedDisplayMessages,
        {
          type: "text",
          user: true,
          text: message,
          questionLinkId: currentLinkId,
          typing: false,
        },
        {
          ...nextQuestion,
          typing: true,
        },
      ]);
    }

    setCurrentMessageIndex(currentMessageIndex + indexIncrement);
  };

  const handleCheckName = async (message) => {
    const currentLinkId = questionnaire[currentMessageIndex].linkId;
    const rightName = await checkName(message.trim());
    let nextQuestion;

    if (rightName) {
      nextQuestion = rightNameMessage;
      setGaveWrongAnswer(false);
      setUserName(message.trim());
    } else if (!rightName && !gaveWrongAnswer) {
      nextQuestion = wrongNameMessage;
      setGaveWrongAnswer(true);
    } else if (!rightName && gaveWrongAnswer) {
      nextQuestion = endNameMessage;
    }

    let modifiedDisplayMessages = displayedMessages;

    if (message !== true) {
      modifiedDisplayMessages = displayedMessages.map((modifiedMessage) => ({
        ...modifiedMessage,
        typing: false,
      }));
    }

    setDisplayedMessages([
      ...modifiedDisplayMessages,
      {
        type: "text",
        user: true,
        text: message.trim(),
        questionLinkId: currentLinkId,
        typing: false,
      },
      {
        ...nextQuestion,
        typing: true,
      },
    ]);
  };

  const handleLogin = async (message) => {
    const year = message.split(".")[2];
    const month = message.split(".")[1];
    const day = message.split(".")[0];

    const currentLinkId = questionnaire[currentMessageIndex].linkId;
    const loginResult = await login({
      username: userName,
      password: `${year}-${month}-${day}`,
    });

    console.log(loginResult);

    let nextQuestion;

    if (loginResult.status === 200) {
      nextQuestion = rightLoginMessage(userName);
      setGaveWrongAnswer(false);
      dispatch(changeAuthToken(loginResult.data.accessToken));
    } else if (loginResult.status !== 200 && !gaveWrongAnswer) {
      nextQuestion = wrongLoginMessage;
      setGaveWrongAnswer(true);
    } else if (loginResult.status !== 200 && gaveWrongAnswer) {
      nextQuestion = endLoginMessage;
    }

    let modifiedDisplayMessages = displayedMessages;

    if (message !== true) {
      modifiedDisplayMessages = displayedMessages.map((modifiedMessage) => ({
        ...modifiedMessage,
        typing: false,
      }));
    }

    setDisplayedMessages([
      ...modifiedDisplayMessages,
      {
        type: "text",
        user: true,
        text: message.trim(),
        questionLinkId: currentLinkId,
        typing: false,
      },
      {
        ...nextQuestion,
        typing: true,
      },
    ]);
  };

  const handleLoggedIn = (message) => {
    if (message === true) {
      navigate("/tasks");
    }
  };

  const renderInputField = () => {
    const currentMessage = displayedMessages[displayedMessages.length - 1];

    switch (currentMessage.type) {
      case "checkName":
        return (
          <ChatInput
            onClick={handleCheckName}
            isDisabled={inputDisabled}
            setInputDisabled={setInputDisabled}
          />
        );
      case "end":
        return (
          <ChatInput
            type="disabled"
            isDisabled={inputDisabled}
            setInputDisabled={setInputDisabled}
          />
        );
      case "display":
        handleNewMessage(true);
        break;
      case "choice":
        return (
          <>
            {}
            <ChatInput
              type="select"
              onClick={handleNewMessage}
              options={currentMessage.answerOption}
              isDisabled={inputDisabled}
              setInputDisabled={setInputDisabled}
            />
          </>
        );
      case "login":
        return (
          <ChatInput
            type="date"
            onClick={handleLogin}
            isDisabled={inputDisabled}
            setInputDisabled={setInputDisabled}
          />
        );
      // Replace with custom for onboarding
      case "loggedIn":
        return (
          <ChatInput
            type="loggedIn"
            onReview={handleLoggedIn}
            isDisabled={inputDisabled}
            setInputDisabled={setInputDisabled}
          />
        );
    }
  };

  return (
    <Stack sx={{ width: "100%", maxWidth: 1200, px: 4 }}>
      <ChatHeader />

      {/* ----- Chat Content ----- */}
      <Stack
        sx={{
          mt: 4,
          pl: 1,
          pr: 2,
          flex: 1,
          maxHeight: "100%",
          overflowY: "scroll",
        }}
        id="chat-content"
      >
        {displayedMessages.map((message, key) => {
          let islast = false;

          if (message.typing) {
            messageDelay += 2000;
          }

          if (key === displayedMessages.length - 1) {
            islast = true;
          }
          return (
            <ChatMessage
              text={message.text}
              key={key}
              user={message.user}
              typing={message.typing}
              delay={messageDelay}
              inputDisabled={setInputDisabled}
              isLast={islast}
            />
          );
        })}
        <div id="auto-scroll"></div>
      </Stack>
      {inputDisabled ? (
        <Typography
          sx={{ pl: "8px", pb: "4px", color: "grey", fontSize: ".8rem" }}
        >
          Tippen...
        </Typography>
      ) : (
        ""
      )}
      {renderInputField()}
    </Stack>
  );
}

export default Onboarding;
