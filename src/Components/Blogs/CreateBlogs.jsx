import React, { useState } from "react";
import {
  Box,
  // Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "../../theme";
import Details from "./Details";
import ContactPerson from "./ContactPerson";
import Products from "./Products";

const useStyle = makeStyles(() => {
  return {
    container: {
      height: "100%",
      width: "100%",
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      [theme.breakpoints.down("md")]: {
        padding: "5px",
      },
      alignItems: "center",
    },
    subContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "20px",
      width: "100%",
      maxWidth: "1000px",
      [theme.breakpoints.down("md")]: {
        padding: "5px",
      },
    },
  };
});
const steps = ["Details", "Contact Person", "Products"];
function CreateBlogs() {
  const { container, subContainer } = useStyle();
  const [activeStep, setActiveStep] = useState(0);
  const [quoteInfo, setquoteInfo] = useState(null);
  const [addressInfo, setaddressInfo] = useState(null);
  console.log(quoteInfo);
  console.log(addressInfo);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Box className={container}>
      <Box className={subContainer}>
        <Typography variant="h5" sx={{ textAlign: "left", fontWeight: 400 }}>
          Create Lead
        </Typography>
        <Box>
          <Stepper
            sx={{ width: "100%", maxWidth: "400px" }}
            activeStep={activeStep}
          >
            {steps.map((label) => {
              const stepProps = {};
              const labelProps = {};
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </Box>
        {activeStep === 0 ? (
          <Details
            quoteInfo={quoteInfo}
            setquoteInfo={setquoteInfo}
            handleBack={handleBack}
            handleNext={handleNext}
            activeStep={activeStep}
            steps={steps}
          />
        ) : activeStep === 1 ? (
          <ContactPerson
            addressInfo={addressInfo}
            setaddressInfo={setaddressInfo}
            handleBack={handleBack}
            handleNext={handleNext}
            activeStep={activeStep}
            steps={steps}
          />
        ) : activeStep === 2 ? (
          <Products
            quoteInfo={quoteInfo}
            addressInfo={addressInfo}
            handleBack={handleBack}
            handleNext={handleNext}
            activeStep={activeStep}
            steps={steps}
          />
        ) : null}
      </Box>
    </Box>
  );
}

export default CreateBlogs;
