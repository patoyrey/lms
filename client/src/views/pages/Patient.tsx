import { useDispatch, useSelector } from "react-redux";
import Nav from "../layout/nav";
import { RootState } from "../../store";
import ModalComponent from "../components/ModalComponent";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import ButtonComponent from "../components/button";
import Textfield from "../components/textfield";
import {
  clearPatient,
  fetchAllPatients,
  setPatients,
} from "../../redux/patientsSlice";
import { PatientService } from "../../services/pateintsService";
import { Patients } from "../../interface/patients";
import React from "react";
import AlertComponent from "../components/alert";
import { SnackbarOrigin } from "@mui/material/Snackbar";
import PatientTable from "../../table/patientTable";
import PatientTestTable from "../../table/patientTestTable";
import { fetchAllLabTest } from "../../redux/testSlice";
import AddPatientStepper from "../../stepper/addPatientStepper";
import { GetAllPatients } from "../../utils/fetchData";

const Patient: React.FC = () => {
  const calculateAge = (dobValue: string) => {
    const dobDate = new Date(dobValue);
    const today = new Date();
    let ageDiff = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < dobDate.getDate())
    ) {
      ageDiff--;
    }

    return ageDiff.toString();
  };

  interface StateSnackbar extends SnackbarOrigin {
    open: boolean;
  }
  const test = useSelector((state: RootState) => state.test);
  const [openSnackAlert, setOpenSnackAlert] = React.useState(false);
  const [openSnackFailAlert, setOpenFailSnackAlert] = React.useState(false);
  const [openSnackNetworkFailAlert, setOpenNetworkFailSnackAlert] =
    React.useState(false);
  const [open, setOpen] = useState(false);
  const patientLab = useSelector(
    (state: RootState) => state.patient.editPatient
  ); //update
  const patient = useSelector((state: RootState) => state.patient);
  const dispatch = useDispatch();
  const handleCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackAlert(false);
  };
  const [stateSnackbarAlert, setStateSnackbar] = React.useState<StateSnackbar>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = stateSnackbarAlert;

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    const payload = {
      name,
      value,
    };

    //this part calculates and inserts the age if the textfield being changed is Date of Birth
    if (name === "patient_dob") {
      const payload = {
        name: "patient_age",
        value: calculateAge(value),
      };
      dispatch(setPatients(payload));
    }

    dispatch(setPatients(payload));
  };

  const handleOnClick = () => {
    setOpen(!open);
  };
  const getAllLabTest = async () => {
    try {
      const res = await dispatch(fetchAllLabTest());

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const add = async () => {
    try {
      const res = await PatientService.add(
        patient.patient_lab as unknown as Patients,
        "add-patient"
      );
      if (res) {
        setOpenSnackAlert(true);
        dispatch(clearPatient());
        GetAllPatients(dispatch);
      } else {
        setOpenFailSnackAlert(true);
      }
    } catch (error) {
      setOpenNetworkFailSnackAlert(true);
    }

    dispatch(clearPatient());
  };

  // const getAllPatient = async () => {
  //   try {
  //     const res = await dispatch(fetchAllPatients());
  //     console.log("patient:", res);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const handleFailCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenFailSnackAlert(false);
  };

  const handleNetworkFailCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNetworkFailSnackAlert(false);
  };
  useEffect(() => {
    GetAllPatients(dispatch);
    getAllLabTest();
  }, []);
  return (
    <div>
      <ModalComponent
        open={open}
        close={() => {
          handleOnClick();
        }}
      >
        <Box>
          <AlertComponent
            className="alert"
            severity="success"
            open={openSnackAlert}
            autoHideDuration={2000}
            anchorOrigin={{ vertical, horizontal }}
            onClose={handleCloseSnackbar}
            message="Successfully inserted!"
          />
          <AlertComponent
            open={openSnackFailAlert}
            severity="warning"
            message="Failed to insert!"
            autoHideDuration={2000}
            anchorOrigin={{ vertical, horizontal }}
            onClose={handleFailCloseSnackbar}
          />
          <AlertComponent
            open={openSnackNetworkFailAlert}
            severity="warning"
            message="Network Error"
            autoHideDuration={2000}
            anchorOrigin={{ vertical, horizontal }}
            onClose={handleNetworkFailCloseSnackbar}
          />{" "}
          <div className="modal">
            <div className="modalStyle">
              <div className="patient-ref-container">
                <AddPatientStepper handleOnClick={handleOnClick} />
              </div>
            </div>
          </div>
        </Box>
      </ModalComponent>

      <div className="patients-container">
        <div className="patient-content">
          <Typography
            variant="h5"
            display="block"
            gutterBottom
            sx={{ fontFamily: "Poppins" }}
          >
            Patients Information
          </Typography>
          <Textfield
            value=""
            onchange={(e) => console.log(e.target.value)}
            placeholder="Search"
            type="search"
            variant="outlined"
            size="small"
            style={{ width: "50%" }}
            required={true}
          />
          <ButtonComponent
            size="medium"
            variant="contained"
            label="Search"
            onclick={() => console.log("Click ")}
            color="primary"
          />
          <ButtonComponent
            color="primary"
            size="medium"
            variant="contained"
            label="Add Patients"
            onclick={handleOnClick}
          />
        </div>
        <PatientTable
          patientList={patient.patients}
          getAllPatient={() => GetAllPatients(dispatch)}
        />
      </div>
    </div>
  );
};

export default Patient;
