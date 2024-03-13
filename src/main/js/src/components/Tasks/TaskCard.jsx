import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { fetchTaskQuestionnaire } from "../../api/tasks";

function TaskCard({ task, authToken }) {
  const navigate = useNavigate();

  const onStartTask = async (taskId) => {
    const questionnaire = await fetchTaskQuestionnaire(taskId, authToken);
    console.log(questionnaire);

    let newQuestionnaire = [];

    const questionnaireItems = questionnaire[0].item;

    const handleItemType = (item) => {
      if (item.type === "group") {
        item.item.forEach((subItem) => handleItemType(subItem));
      } else {
        newQuestionnaire.push(item);
      }
    };

    questionnaireItems.forEach((item) => {
      handleItemType(item);
    });

    console.log(newQuestionnaire);

    navigate("/chat", { state: { newQuestionnaire } });
  };

  return (
    <>
      <Card
        sx={{
          mx: 2,
          width: 350,
          mt: 5,
          position: "relative",
          pb: 8,
          maxWidth: 350,
        }}
      >
        <CardContent sx={{ pl: 3, pr: 10, pt: 3 }}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            {task.id}
          </Typography>
          <Typography>
            <b>Vornamen: </b>
            {task.contained[0].name[0].given}
          </Typography>
          <Typography>
            <b>Familienname: </b>
            {task.contained[0].name[0].family}
          </Typography>
          <Typography>
            <b>Geburtsdatum: </b>
            {task.contained[0].birthDate}
          </Typography>
          <Typography>
            <b>Geschlecht: </b>
            {task.contained[0].gender}
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
            pb: 3,
            position: "absolute",
            bottom: 0,
            right: 82,
          }}
        >
          <Button
            size="medium"
            variant="outlined"
            onClick={() => onStartTask(task.id)}
          >
            Aufgabe starten
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  authToken: PropTypes.string.isRequired,
};

export default TaskCard;
