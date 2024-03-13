import { Stack, Typography } from "@mui/material";
import { saveAs } from "file-saver";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import newQuestionnaire from "../../json/questionnaire_1.5";
import onboarding from "../../json/onboarding";
import { useEffect, useState } from "react";
import "./chat.css";
import { useNavigate } from "react-router-dom";
import { fetchQaAnswer } from "../../api/qa";
import ChatHeader from "./ChatHeader";

// Container component for the chat section of the app
function Chat() {
  useEffect(() => {
    let objDiv = document.getElementById("auto-scroll");
    objDiv.scrollIntoView();
  });

  const questionnaire = [...onboarding];

  // Get first index of question that is not display
  let initialMessageindex = questionnaire.findIndex(
    (message) => message.type !== "display"
  );

  const [currentMessageIndex, setCurrentMessageIndex] =
    useState(initialMessageindex);

  const [displayedMessages, setDisplayedMessages] = useState(
    questionnaire.slice(0, currentMessageIndex + 1).map((question, key) => {
      return { ...question, user: false, typing: true };
    })
  );

  const [startTime, setStartTime] = useState(new Date());

  const [logs, setLogs] = useState({ logs: [] });

  const [inputDisabled, setInputDisabled] = useState(true);

  let messageDelay = 2000;

  const navigate = useNavigate();

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

    const currentTime = new Date();
    const timediff = (currentTime - startTime) / 1000;

    if (message !== true) {
      setLogs({
        logs: [
          ...logs.logs,
          {
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
            question: questionnaire[currentMessageIndex].text,
            answer:
              currentMessageIndex === 7 || currentMessageIndex === 8
                ? "***"
                : message,
          },
        ],
      });
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
    var blob = new Blob([JSON.stringify(logs)], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "dmia_logs.json");

    if (message === true) {
      navigate("/uberprufen", { state: { displayedMessages } });
    }
  };

  const renderInputField = () => {
    const currentMessage = displayedMessages[displayedMessages.length - 1];

    switch (currentMessage.type) {
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

      {/* <ChatInput type="multi" /> */}
      {/* <ChatInput type="date" /> */}
    </Stack>
  );
}

export default Chat;
