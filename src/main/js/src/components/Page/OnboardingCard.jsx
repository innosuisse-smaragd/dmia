import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectSelectedFontSize } from "../../slices/themeSlice";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";

// Card component displaying the onboarding tasks to the user
function OnboardingCard({ onContinue }) {
  const fontSize = useSelector(selectSelectedFontSize);
  console.log(fontSize);

  return (
    <Card
      sx={{
        minWidth: 350,
        maxWidth: 550,
        mb: 7,
        padding: 2,
        // When font size is 32px apply these styles
        ...(fontSize === 28 && { maxWidth: 950, mt: 10 }),
      }}
    >
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <MedicalInformationIcon
          color="primary"
          sx={{ alignSelf: "center", fontSize: 60 }}
        />
        <Typography
          variant="h4"
          color="primary"
          sx={{ alignSelf: "center", mb: 3 }}
        >
          DMIA
        </Typography>
        <Typography variant="h3" sx={{ mb: 1 }}>
          Hi Mister Doe!
        </Typography>
        <Typography>
          And welcome to the DMIA application. I am a chatbot Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Vivamus maximus egestas risus,
          non sodales nisi sodales nec. Morbi non aliquam massa, quis
          ullamcorper leo. Vestibulum finibus suscipit tellus non cursus.
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", flexDirection: "column" }}>
        <Button
          variant="contained"
          sx={{ alignSelf: "end" }}
          onClick={() => onContinue()}
        >
          Continue
        </Button>
      </CardActions>
    </Card>
  );
}

OnboardingCard.propTypes = {
  onContinue: PropTypes.func.isRequired,
};

export default OnboardingCard;
