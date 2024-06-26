import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Stack, Typography } from "@mui/material";

import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import ChatHeader from "./ChatHeader";
import { fetchQaAnswer } from "../../api/qa";
import { checkName, login } from "../../api/authentication";
import onboarding from "../../json/onboarding_2";
import {
  MESSAGE_DELAY,
  END_LOGIN_MESSAGE,
  END_NAME_MESSAGE,
  RIGHT_LOGIN_MESSAGE,
  RIGHT_NAME_MESSAGE,
  WRONG_LOGIN_MESSAGE,
  WRONG_NAME_MESSAGE,
} from "./constants";

import { checkEnableQuestion } from "./helpers";
import "./chat.css";

// Container component for the chat section of the app
function Chat() {
  const { state } = useLocation();
  const { newQuestionnaire, serverQuestionnaire, task } = state;
  const [gaveWrongAnswer, setGaveWrongAnswer] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    let objDiv = document.getElementById("auto-scroll");
    objDiv.scrollIntoView();
  });

  const [questionnaire, setQuestionnaire] = useState(onboarding);

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

  const [startTime] = useState(new Date());

  const [logs, setLogs] = useState({ logs: [] });

  const [inputDisabled, setInputDisabled] = useState(true);

  let messageDelay = MESSAGE_DELAY;

  const navigate = useNavigate();

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

    // If previous message type was display
    if (message === true) {
      setDisplayedMessages([
        ...modifiedDisplayMessages,
        {
          ...nextQuestion,
          typing: true,
        },
      ]);
      // If next question is final message
    } else if (nextQuestion.type === "final") {
      setDisplayedMessages([
        ...modifiedDisplayMessages,
        {
          type: "text",
          user: true,
          text: message,
          questionLinkId: currentLinkId,
          typing: false,
          isQuestionnaireResponse: true,
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
          isQuestionnaireResponse: true,
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
    const currentLinkId =
      displayedMessages[displayedMessages.length - 1].linkId;
    const rightName = await checkName(message.trim());
    let nextQuestion;

    if (rightName) {
      nextQuestion = RIGHT_NAME_MESSAGE;
      setGaveWrongAnswer(false);
      setUserName(message.trim());
    } else if (!rightName && !gaveWrongAnswer) {
      nextQuestion = WRONG_NAME_MESSAGE;
      setGaveWrongAnswer(true);
    } else if (!rightName && gaveWrongAnswer) {
      nextQuestion = END_NAME_MESSAGE;
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

    const currentLinkId =
      displayedMessages[displayedMessages.length - 1].linkId;
    const loginResult = await login({
      username: userName,
      password: `${year}-${month}-${day}`,
    });

    let nextQuestion;

    if (loginResult.status === 200) {
      nextQuestion = RIGHT_LOGIN_MESSAGE(userName);
      setQuestionnaire([...questionnaire, ...newQuestionnaire]);
      setGaveWrongAnswer(false);
    } else if (loginResult.status !== 200 && !gaveWrongAnswer) {
      nextQuestion = WRONG_LOGIN_MESSAGE;
      setGaveWrongAnswer(true);
    } else if (loginResult.status !== 200 && gaveWrongAnswer) {
      nextQuestion = END_LOGIN_MESSAGE;
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

  const handleNewQA = (message) => {
    let modifiedDisplayMessages = displayedMessages;
    const currentTime = new Date();
    const timediff = (currentTime - startTime) / 1000;

    if (message !== true) {
      modifiedDisplayMessages = displayedMessages.map((modifiedMessage) => ({
        ...modifiedMessage,
        typing: false,
      }));
    }

    async function getQaAnswer() {
      const question = { text: message };
      const data = await fetchQaAnswer(question);

      setDisplayedMessages([
        ...modifiedDisplayMessages,
        {
          type: "text",
          user: true,
          text: message,
          typing: false,
        },
        {
          type: "final",
          user: false,
          text: data.result,
          typing: true,
        },
      ]);

      setLogs({
        logs: [
          ...logs.logs,
          {
            isQA: true,
            time:
              timediff > 60
                ? `${Math.round(((timediff % 86400000) % 3600000) / 60)}:${
                    Math.round(timediff % 60) < 10
                      ? `0${Math.round(timediff % 60)}`
                      : Math.round(timediff % 60)
                  }`
                : `${
                    Math.round(timediff) < 10
                      ? `0${Math.round(timediff)}`
                      : Math.round(timediff)
                  }`,
            question: message,
            answer: data.result,
          },
        ],
      });
    }

    getQaAnswer();
  };

  const handleFinalMessage = (message) => {
    if (message === true) {
      navigate("/uberprufen", {
        state: { displayedMessages, serverQuestionnaire, task },
      });
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
      case "login":
        return (
          <ChatInput
            type="date"
            onClick={handleLogin}
            isDisabled={inputDisabled}
            setInputDisabled={setInputDisabled}
          />
        );
      case "text":
        return (
          <ChatInput
            onClick={handleNewMessage}
            isDisabled={inputDisabled}
            setInputDisabled={setInputDisabled}
          />
        );
      case "integer":
        return (
          <ChatInput
            type="number"
            onClick={handleNewMessage}
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
        if (currentMessage.repeats === false) {
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
        } else {
          return (
            <ChatInput
              type="multi"
              onClick={handleNewMessage}
              options={currentMessage.answerOption}
              isDisabled={inputDisabled}
              setInputDisabled={setInputDisabled}
            />
          );
        }
      case "date":
        return (
          <ChatInput
            type="date"
            onClick={handleNewMessage}
            isDisabled={inputDisabled}
            setInputDisabled={setInputDisabled}
          />
        );
      case "final":
        return (
          <ChatInput
            type="final"
            onClick={handleNewQA}
            onReview={handleFinalMessage}
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
          pb: 4,
          maxHeight: "100%",
          overflowY: "scroll",
        }}
        id="chat-content"
      >
        {displayedMessages.map((message, key) => {
          let islast = false;

          if (message.typing) {
            messageDelay += MESSAGE_DELAY;
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

      {/* <ChatInput type="multi" /> */}
      {/* <ChatInput type="date" /> */}
    </Stack>
  );
}

export default Chat;
