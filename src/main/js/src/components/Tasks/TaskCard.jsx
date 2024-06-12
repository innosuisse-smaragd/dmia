import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { fetchTaskQuestionnaire } from "../../api/tasks";
import { login } from "../../api/authentication";

function TaskCard({ task }) {
  const navigate = useNavigate();

  const onStartTask = async (taskId) => {
    const username = `${task.contained[0].name[0].given} ${task.contained[0].name[0].family}`;
    const authToken = await login({
      username,
      password: task.contained[0].birthDate,
    });
    const serverQuestionnaire = await fetchTaskQuestionnaire(
      taskId,
      authToken.data.accessToken
    );

    let newQuestionnaire = [];

    const questionnaireItems = serverQuestionnaire[0].item;

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

    newQuestionnaire[newQuestionnaire.length - 1].type = "final";

    navigate("/chat", {
      state: { newQuestionnaire, serverQuestionnaire, task },
    });
  };

  const formatDate = (date) => {
    let formattedDate = `${date.split("-").reverse()[0]}.${
      date.split("-").reverse()[1]
    }.${date.split("-").reverse()[2]}`;

    return formattedDate;
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
            {formatDate(task.contained[0].birthDate)}
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
};

export default TaskCard;
