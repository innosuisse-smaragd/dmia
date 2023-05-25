import { Container } from "@mui/material";
import OnboardingStepper from "./OnboardingStepper";
import OnboardingCard from "./OnboardingCard";
import { useState } from "react";

/* Container component responsible for handling the tasks a user has to go through
when they first load the app */
function Onboarding() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <OnboardingCard
        onContinue={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)}
      />
      <OnboardingStepper activeStep={activeStep} />
    </Container>
  );
}

export default Onboarding;
