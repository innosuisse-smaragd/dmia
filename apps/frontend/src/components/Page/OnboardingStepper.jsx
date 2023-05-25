import PropTypes from "prop-types";
import { Step, StepLabel, Stepper, Typography } from "@mui/material";

// Stepper component displaying where the user is at in their onboarding process
function OnboardingStepper({ activeStep }) {
  const steps = [
    "Greetings!",
    "Inform the user about data processing",
    "Convey patient centered intensions",
    "Ask the patient to identify themselve",
    "Ask the patient to sign a declaration of consent",
  ];

  return (
    <>
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
        <></>
      )}
    </>
  );
}

OnboardingStepper.propTypes = {
  activeStep: PropTypes.number.isRequired,
};

export default OnboardingStepper;
