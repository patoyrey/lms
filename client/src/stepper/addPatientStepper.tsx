import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddPatientForm from "./addpatientForm";
import PatientTestTable from "../table/patientTestTable";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchAllLabTest } from "../redux/testSlice";
import ButtonComponent from "../views/components/button";
import { StepLabel } from "@mui/material";
import ViewReceiptForm from "./viewReceiptForm";
import { Patients } from "../interface/patients";
import { clearPatient, fetchAllPatients } from "../redux/patientsSlice";
import { PatientService } from "../services/pateintsService";
import { GetAllPatients } from "../utils/fetchData";

interface AddPatientStepperProps {
  formValid: boolean;
}
interface PatientStepper {
  handleOnClick: () => void;
}
const steps = ["Add Patient", "Select Laboratory Test", "Review"];

const AddPatientStepper: React.FC<PatientStepper> = ({ handleOnClick }) => {
  const [state, setState] = React.useState<AddPatientStepperProps>({
    formValid: false,
  });

  const dispatch = useDispatch();
  const test = useSelector((state: RootState) => state.test);
  const patient = useSelector((state: RootState) => state.patient);
  const getAllLabTest = async () => {
    try {
      const res = await dispatch(fetchAllLabTest());

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  // const getAllPatients = async () => {
  //   try {
  //     const res = await dispatch(fetchAllPatients());

  //     console.log(res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };
  const handleFormChange = (isValid: boolean) => {
    console.log("isValid:", isValid);
    setState({ ...state, formValid: isValid });
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const add = async () => {
    try {
      const res = await PatientService.add(
        patient.patient_lab as unknown as Patients,
        "add-patient"
      );
      if (res) {
        GetAllPatients(dispatch);
        dispatch(clearPatient());
        handleNext();
      } else {
      }
    } catch (error) {}

    dispatch(clearPatient());
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const isAtLeastOneChecked = () => {
    return patient.patient_labTest.test_id.length > 0;
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Patient Successfully Added!
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Add New Patient</Button>
            <Button onClick={handleOnClick}>Close</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="stepperModal">
            {/* Step1 */}
            {activeStep === 0 ? (
              <AddPatientForm
                onFormChange={(isValid) => handleFormChange(isValid)}
              />
            ) : // Step 2
            activeStep === 1 ? (
              <PatientTestTable
                testlab={test.tests}
                getAllLabTest={getAllLabTest}
              />
            ) : // STEP 3
            activeStep === 2 ? (
              <>
                <ViewReceiptForm />
                {/* <ButtonComponent
                  size="medium"
                  variant="contained"
                  label="Add Patients"
                  onclick={() => console.log("")}
                  type="contained"
                  color="primary"
                /> */}
              </>
            ) : (
              ""
            )}
          </div>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {activeStep === steps.length - 1 ? (
              <Button
                onClick={add}
                disabled={
                  activeStep === 0
                    ? !state.formValid
                    : activeStep === 1
                    ? !isAtLeastOneChecked()
                    : false
                }
              >
                Submit
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={
                  activeStep === 0
                    ? !state.formValid
                    : activeStep === 1
                    ? !isAtLeastOneChecked()
                    : false
                }
              >
                Next
              </Button>
            )}
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
};
export default AddPatientStepper;
