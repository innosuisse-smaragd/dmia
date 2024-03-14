import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/Page/NavBar";
import { useSelector } from "react-redux";
import { selectSelectedFontSize } from "../slices/themeSlice";
import { postQuestionnaireResponse } from "../api/tasks";
import questionnaireResponse from "../json/questionnaireResponse";
import { login } from "../api/authentication";

function ReviewRoute() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { displayedMessages, serverQuestionnaire, task } = state;
  let containedPatient;

  // Get contained patient from task
  task.contained.forEach((contained) => {
    if (contained.resourceType === "Patient") {
      containedPatient = contained;
      // remove deviceName as it is not required in questionnaireResponse
      delete containedPatient["deviceName"];
    }
  });

  let questionnaireResponsse = {
    resourceType: "QuestionnaireResponse",
    id: serverQuestionnaire[0].id
      ? serverQuestionnaire[0].id
      : "GENERATED_BY_SERVER",
    meta: {
      profile: [
        "http://somewhere.org/fhir/uv/myig/StructureDefinition/SmaragdQuestionnaireResponse",
      ],
    },
    text: {
      status: "generated",
      div: '<div xmlns="http://www.w3.org/1999/xhtml"><b>Structure</b><table border="1" cellpadding="0" cellspacing="0" style="border: 1px #F0F0F0 solid; font-size: 11px; font-family: verdana; vertical-align: top;"><tr style="border: 2px #F0F0F0 solid; font-size: 11px; font-family: verdana; vertical-align: top"><th style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/formats.html#table" title="The linkId for the item">LinkId</a></th><th style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/formats.html#table" title="Text for the item">Text</a></th><th style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/formats.html#table" title="Minimum and Maximum # of times the the itemcan appear in the instance">Cardinality</a></th><th style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/formats.html#table" title="The type of the item">Type</a></th><th style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/formats.html#table" title="Additional information about the item">Description &amp; Constraints</a><span style="float: right"><a href="http://hl7.org/fhir/R4/formats.html#table" title="Legend for this format"><img src="http://hl7.org/fhir/R4/help16.png" alt="doco" style="background-color: inherit"/></a></span></th></tr><tr style="border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white"><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck1.png)" class="hierarchy"><img src="tbl_spacer.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="icon_q_root.gif" alt="." style="background-color: white; background-color: inherit" title="QuestionnaireRoot" class="hierarchy"/> </td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"/><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"></td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Questionnaire</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">GENERATED_BY_SERVER#1.0.0</td></tr>\r\n<tr style="border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7"><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck10.png)" id="item.0" class="hierarchy"><img src="tbl_spacer.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_vjoin.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="icon-q-coding.png" alt="." style="background-color: #F7F7F7; background-color: inherit" title="Coding" class="hierarchy"/> 0</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Why did you come?</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">0..1</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-choice">choice</a></td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Options: <a href="#opt-item.0">2 options</a></td></tr>\r\n<tr style="border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white"><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck01.png)" id="item.1" class="hierarchy"><img src="tbl_spacer.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_vjoin_end.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="icon-q-group.png" alt="." style="background-color: white; background-color: inherit" title="Group" class="hierarchy"/> 1</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Your health information</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">1..1</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-group">group</a></td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Definition: http://loinc.org/rdf#54126-8</td></tr>\r\n<tr style="border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7"><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck001.png)" id="item.1.1" class="hierarchy"><img src="tbl_spacer.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_vjoin_end.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="icon-q-group.png" alt="." style="background-color: #F7F7F7; background-color: inherit" title="Group" class="hierarchy"/> 1.1</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">null</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">0..1</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-group">group</a></td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"/></tr>\r\n<tr style="border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white"><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck0010.png)" id="item.1.1.1" class="hierarchy"><img src="tbl_spacer.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_vjoin.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="icon-q-string.png" alt="." style="background-color: white; background-color: inherit" title="String" class="hierarchy"/> 1.1.1</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Name</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">0..1</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-string">string</a></td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Definition: http://loinc.org/rdf#54125-0</td></tr>\r\n<tr style="border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7"><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck0011.png)" id="item.1.1.2" class="hierarchy"><img src="tbl_spacer.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_vjoin.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="icon-q-coding.png" alt="." style="background-color: #F7F7F7; background-color: inherit" title="Coding" class="hierarchy"/> 1.1.2</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Gender</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">1..1</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-choice">choice</a></td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Definition: http://loinc.org/rdf#54131-8<br/>Value Set: http://hl7.org/fhir/us/sdc/ValueSet/LL1-9</td></tr>\r\n<tr style="border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white"><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck00100.png)" id="item.1.1.2.1.1" class="hierarchy"><img src="tbl_spacer.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_vline.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_vjoin_end.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="icon-q-string.png" alt="." style="background-color: white; background-color: inherit" title="String" class="hierarchy"/> 1.1.2.1.1</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Please specify</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">1..1</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-string">string</a></td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"/></tr>\r\n<tr style="border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7"><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck0010.png)" id="item.1.1.3" class="hierarchy"><img src="tbl_spacer.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_vjoin.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="icon-q-date.png" alt="." style="background-color: #F7F7F7; background-color: inherit" title="Date" class="hierarchy"/> 1.1.3</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Date of Birth</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">0..1</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-date">date</a></td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Definition: http://loinc.org/rdf#21112-8</td></tr>\r\n<tr style="border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: white"><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck0010.png)" id="item.1.1.4" class="hierarchy"><img src="tbl_spacer.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_vjoin.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="icon-q-decimal.png" alt="." style="background-color: white; background-color: inherit" title="Decimal" class="hierarchy"/> 1.1.4</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Height in cm</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">1..1</td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-decimal">decimal</a></td><td style="vertical-align: top; text-align : left; background-color: white; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Definition: http://loinc.org/rdf#8302-2</td></tr>\r\n<tr style="border: 1px #F0F0F0 solid; padding:0px; vertical-align: top; background-color: #F7F7F7"><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px; white-space: nowrap; background-image: url(tbl_bck0000.png)" id="item.1.1.5" class="hierarchy"><img src="tbl_spacer.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_blank.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="tbl_vjoin_end.png" alt="." style="background-color: inherit" class="hierarchy"/><img src="icon-q-decimal.png" alt="." style="background-color: #F7F7F7; background-color: inherit" title="Decimal" class="hierarchy"/> 1.1.5</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Weight in kg</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">0..1</td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy"><a href="http://hl7.org/fhir/R4/codesystem-item-type.html#item-type-decimal">decimal</a></td><td style="vertical-align: top; text-align : left; background-color: #F7F7F7; border: 1px #F0F0F0 solid; padding:0px 4px 0px 4px" class="hierarchy">Definition: http://loinc.org/rdf#29463-7</td></tr>\r\n<tr><td colspan="5" class="hierarchy"><br/><a href="http://hl7.org/fhir/R4/formats.html#table" title="Legend for this format"><img src="http://hl7.org/fhir/R4/help16.png" alt="doco" style="background-color: inherit"/> Documentation for this format</a></td></tr></table><hr/><p><b>Option Sets</b></p><a name="opt-item.0"> </a><p><b>Answer options for 0</b></p><ul><li style="font-size: 11px">For a scheduled (routine) visit</li><li style="font-size: 11px">For specific complaints about you</li></ul></div>',
    },
    contained: [containedPatient],
    questionnaire: serverQuestionnaire[0].url,
    status: serverQuestionnaire[0].status,
    authored: serverQuestionnaire[0].date,
    source: {
      reference: containedPatient.id,
    },
    item: [serverQuestionnaire[0].item],
  };

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
            <p>
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
