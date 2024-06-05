import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import NavBar from "../../components/Page/NavBar";
import { selectSelectedFontSize } from "../../slices/themeSlice";
import { generateQuestionnaireResponse } from "./helpers";
import { postResponse } from "../../api/questionnaire";
import { login } from "../../api/authentication";
import { postQuestionnaireResponse } from "../../api/tasks";

function ReviewRoute() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { displayedMessages, serverQuestionnaire, task } = state;

  const chatQuestions = displayedMessages.filter((message) => {
    let isChatQuestion = false;
    if (
      !message.user &&
      message.type !== "display" &&
      message.type !== "final"
    ) {
      isChatQuestion = true;
    }

    return isChatQuestion;
  });

  const userReplies = displayedMessages.filter((message) => {
    let isChatQuestion = true;
    if (!message.user) {
      isChatQuestion = false;
    }

    return isChatQuestion;
  });

  const fontSize = useSelector(selectSelectedFontSize);

  const questionnaireResponse = generateQuestionnaireResponse(
    serverQuestionnaire[0],
    chatQuestions,
    userReplies,
    task
  );

  const responseEndpoint = task.input.find(
    (input) => input.type.coding[0].code === "response-endpoint"
  ).valueUrl;

  const handleEndQuestionnaire = async () => {
    const username = `${task.contained[0].name[0].given} ${task.contained[0].name[0].family}`;
    const authToken = await login({
      username,
      password: task.contained[0].birthDate,
    });
    postQuestionnaireResponse(
      questionnaireResponse,
      task.id,
      authToken.data.accessToken
    );

    postResponse(questionnaireResponse, responseEndpoint);

    navigate("/end");
  };

  return (
    <Box
      sx={{
        // When font size is 16px apply these styles
        ...(fontSize === 14 && {
          maxWidth: "100vw",
          overflowX: "hidden",
        }),
      }}
    >
      <Box width="100%" height="100%">
        <Box height="10%">
          <NavBar />
        </Box>
        <Box display="flex" justifyContent="center" height="90%">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "5rem",
            }}
          >
            <h1>Bitte überprüfen Sie Ihre Antwort</h1>
            <p style={{ textAlign: "center" }}>
              Bitte überprüfen Sie die Antworten, die Sie während des Chats
              gegeben haben. Sobald Sie sie überprüft haben, klicken Sie auf die
              Schaltfläche „Antworten senden“.
            </p>
            <Box sx={{ width: "100%", my: "5rem" }}>
              <List>
                {chatQuestions.map((question, key) => {
                  const answer = userReplies.filter((reply) => {
                    return reply.questionLinkId === question.linkId;
                  })[0];

                  return (
                    <div key={key}>
                      <ListItem>
                        <ListItemText>
                          <Typography>
                            <span style={{ fontWeight: "bold" }}>Frage:</span>{" "}
                            {question.text}
                          </Typography>
                          <Typography>
                            <span style={{ fontWeight: "bold" }}>Antwort:</span>{" "}
                            {Array.isArray(answer.text)
                              ? answer.text.map((text) => {
                                  return `${text} `;
                                })
                              : answer.text}
                          </Typography>
                        </ListItemText>
                      </ListItem>
                      <Divider />
                    </div>
                  );
                })}
              </List>
            </Box>
            <Button
              variant="contained"
              sx={{ marginTop: "2rem" }}
              onClick={handleEndQuestionnaire}
            >
              Antworten senden
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ReviewRoute;
