import { Stack, Avatar, Typography } from "@mui/material";
import { saveAs } from "file-saver";
import { blue } from "@mui/material/colors";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import newQuestionnaire from "../../json/questionnaire_1.2";
import onboarding from "../../json/onboarding";
import { useEffect, useState } from "react";
import "./chat.css";

// Container component for the chat section of the app
function Chat() {
  useEffect(() => {
    let objDiv = document.getElementById("chat-content");
    objDiv.scrollTop = objDiv.scrollHeight;
  });

  const questionnaire = [...onboarding, ...newQuestionnaire];

  // Get first index of question that is not display
  let initialMessageindex = questionnaire.findIndex(
    (message) => message.type !== "display"
  );

  const [currentMessageIndex, setCurrentMessageIndex] =
    useState(initialMessageindex);

  console.log("CURRENT MESSAGE INDEX", currentMessageIndex);
  console.log("QUESTIONNAIRE LENGTH", questionnaire.length);

  const [displayedMessages, setDisplayedMessages] = useState(
    questionnaire.slice(0, currentMessageIndex + 1).map((question) => {
      return { ...question, user: false };
    })
  );

  const [startTime, setStartTime] = useState(new Date());

  const [logs, setLogs] = useState({ logs: [] });

  if (currentMessageIndex === questionnaire.length - 1) {
    var blob = new Blob([JSON.stringify(logs)], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "dmia_logs.json");
  }

  console.log("Initial displayed messages", displayedMessages);
  console.log("Full questionnaire", questionnaire);

  const compareAnswer = (question, answer) => {
    let enabled = false;
    console.log("checking");
    console.log("question", question);
    console.log("answer", answer);

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
        enabled = compareAnswer(question, a);
      });
    } else {
      enabled = compareAnswer(question, answer);
    }

    return enabled;
  };

  const handleNewMessage = (message) => {
    console.log(message);

    let indexIncrement = 1;
    const currentLinkId = questionnaire[currentMessageIndex].linkId;

    // Get the next question the user will be asked
    let nextQuestion = questionnaire[currentMessageIndex + indexIncrement];

    // Check if the question is optional
    if (nextQuestion.enableWhen) {
      console.log("optional");
      let enableWhenQuestionId = nextQuestion.enableWhen[0].question;
      let enableWhenMessage;

      console.log(currentLinkId);
      console.log(enableWhenQuestionId);

      if (currentLinkId === enableWhenQuestionId) {
        console.log("Question is previous");
        enableWhenMessage = message;
      } else {
        console.log("Question is in array");
        enableWhenMessage = displayedMessages.filter((displayedMessage) => {
          return displayedMessage.questionLinkId === enableWhenQuestionId;
        })[0].text;
      }

      console.log("Enable When Question Id", enableWhenQuestionId);
      console.log("enableWhenMessage", enableWhenMessage);
      console.log("Next question", nextQuestion);

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
            });
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

    console.log("TIMEDIFFFFFFFF", timediff);

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

    console.log("CURRENT MESSAGE INDEX", currentMessageIndex);
    console.log("QUESTIONNAIRE LENGTH", questionnaire.length);

    if (message === true) {
      setDisplayedMessages([
        ...displayedMessages,
        {
          ...nextQuestion,
        },
      ]);
    } else {
      setDisplayedMessages([
        ...displayedMessages,
        {
          type: "text",
          user: true,
          text: message,
          questionLinkId: currentLinkId,
        },
        {
          ...nextQuestion,
        },
      ]);
    }

    setCurrentMessageIndex(currentMessageIndex + indexIncrement);
  };

  const renderInputField = () => {
    const currentMessage = displayedMessages[displayedMessages.length - 1];

    switch (currentMessage.type) {
      case "text":
        return <ChatInput onClick={handleNewMessage} />;
      case "integer":
        return <ChatInput type="number" onClick={handleNewMessage} />;
      case "end":
        return <ChatInput type="disabled" />;
      case "display":
        handleNewMessage(true);
        break;
      case "choice":
        if (currentMessage.repeats === false) {
          return (
            <ChatInput
              type="select"
              onClick={handleNewMessage}
              options={currentMessage.answerOption}
            />
          );
        } else {
          return (
            <ChatInput
              type="multi"
              onClick={handleNewMessage}
              options={currentMessage.answerOption}
            />
          );
        }
      case "date":
        return <ChatInput type="date" onClick={handleNewMessage} />;
    }
  };

  console.log("LOGS", logs);

  return (
    <Stack sx={{ width: "100%", maxWidth: 1200, px: 12 }}>
      {/* ----- Chat Header ----- */}
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          borderBottom: "solid 1px #ddd",
          p: 1,
          pb: 2,
        }}
      >
        <Avatar sx={{ bgcolor: blue[700] }}>M</Avatar>
        <Typography variant="h6" sx={{ marginLeft: 1 }}>
          Mia
        </Typography>
      </Stack>

      {/* ----- Chat Content ----- */}
      <Stack
        sx={{
          my: 4,
          pl: 1,
          pr: 2,
          flex: 1,
          maxHeight: "100%",
          overflowY: "scroll",
        }}
        id="chat-content"
      >
        {displayedMessages.map((message, key) => {
          return (
            <ChatMessage text={message.text} key={key} user={message.user} />
          );
        })}
      </Stack>

      {renderInputField()}

      {/* <ChatInput type="multi" /> */}
      {/* <ChatInput type="date" /> */}
    </Stack>
  );
}

export default Chat;
