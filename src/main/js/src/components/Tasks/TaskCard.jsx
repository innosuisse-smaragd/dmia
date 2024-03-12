import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function TaskCard({ task }) {
  console.log(task.contained);

  return (
    <>
      <Card>
        <CardContent sx={{ pl: 3, pr: 10, pt: 3, minWidth: 200 }}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Task
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
        <CardActions sx={{ display: "flex", flexDirection: "column", pb: 3 }}>
          <Button size="medium" variant="contained">
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
