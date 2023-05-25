import {
  Box,
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";

function Onboarding() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    "Inform the user they are communicating with a chatbot",
    "Inform the user about data processing",
    "Convey patient centered intensions",
    "Ask the patient to identify themselve",
    "Ask the patient to sign a declaration of consent",
  ];

  return (
    <Container>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, key) => (
          <Step key={key}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        </>
      ) : (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={() =>
                setActiveStep((prevActiveStep) => prevActiveStep - 1)
              }
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              onClick={() =>
                setActiveStep((prevActiveStep) => prevActiveStep + 1)
              }
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
}

export default Onboarding;
