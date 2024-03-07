import { useDispatch, useSelector } from "react-redux";
import Nav from "../layout/nav";
import { RootState } from "../../store";
import ModalComponent from "../components/ModalComponent";
import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

import ButtonComponent from "../components/button";
import Textfield from "../components/textfield";
import { addPatients, clearPatient, fetchAllPatients, fetchPatientById, getPatientToUpdate, setEditPatient, setPatients } from "../../redux/patientsSlice";
import { PatientService } from "../../services/pateintsService";
import { clearField } from "../../redux/fieldSlice";
import { Patients } from "../../interface/patients";
import React from "react";
import { clearTest } from "../../redux/testSlice";
import AlertComponent from "../components/alert";
import { SnackbarOrigin } from "@mui/material/Snackbar";
import PatientTable from "../../table/patientTable";

const Patient: React.FC = () => {
  interface StateSnackbar extends SnackbarOrigin {
    open: boolean;
  }
  const [openSnackAlert, setOpenSnackAlert] = React.useState(false);
  const [openSnackFailAlert, setOpenFailSnackAlert] = React.useState(false);
  const [openSnackNetworkFailAlert, setOpenNetworkFailSnackAlert] =
    React.useState(false);
  const [open, setOpen] = useState(false);
  const patientLab = useSelector((state: RootState) => state.patient.editPatient); //update
  const patient = useSelector((state: RootState) => state.patient);
  const dispatch = useDispatch();
  const handleCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return
    }
    setOpenSnackAlert(false)
  }
  const [stateSnackbarAlert, setStateSnackbar] = React.useState<StateSnackbar>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = stateSnackbarAlert;

  useEffect(() => {
    getAllPatient()
  }, [])
  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    const payload = {
      name,
      value,
    };
    dispatch(setPatients(payload));
  };

  const handleOnClick = () => {
    setOpen(!open);
  };

  const add = async () => {
    try {
      const res = await PatientService.add(patient.patient_lab as unknown as Patients, "add-patient")
      if (res) {
        setOpenSnackAlert(true)
        dispatch(clearPatient())
        getAllPatient()
      } else {
        setOpenFailSnackAlert(true)
      }
    } catch (error) {
      setOpenNetworkFailSnackAlert(true)
    }

    dispatch(clearPatient())
  }

  const getAllPatient = async () => {
    try {
      const res = await dispatch(fetchAllPatients())
      console.log("patient:", res)
    } catch (err) {
      console.log(err)
    }
  }
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
          />

          {" "}

          <div className="modal">
            <div className="modalStyle">
              <div className="patient-ref-container">
                {" "}
                <Typography
                  variant="h6"
                  display="block"
                  sx={{ mb: 2 }}
                  gutterBottom
                >
                  <div className="patient-p">
                    <p style={{ fontSize: "px", fontWeight: "bold", fontStyle: "Poppins" }}>Add Patient Info</p>
                  </div>
                </Typography>
                <div className="patient-ref">
                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Firstname :
                    </Typography>
                    <Textfield
                      value={patient.patient_lab.patient_fname}
                      name="patient_fname"
                      type="text"
                      required={true}
                      onchange={handleOnChange}
                    />
                  </div>
                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Middlename :
                    </Typography>
                    <Textfield
                      value={patient.patient_lab.patient_mname}
                      name="patient_mname"
                      type="text"
                      required={true}
                      onchange={handleOnChange}
                    />
                  </div>{" "}
                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Lastname :
                    </Typography>
                    <Textfield
                      value={patient.patient_lab.patient_lname}
                      name="patient_lname"
                      type="text"
                      required={true}
                      onchange={handleOnChange}
                    />
                  </div>{" "}
                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Gender :
                    </Typography>
                    <Textfield
                      value={patient.patient_lab.patient_gender}
                      name="patient_gender"
                      type="text"
                      required={true}
                      onchange={handleOnChange}
                    />
                  </div>{" "}
                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Address :
                    </Typography>
                    <Textfield
                      value={patient.patient_lab.patient_address}
                      name="patient_address"
                      type="text"
                      required={true}
                      onchange={handleOnChange}
                    />
                  </div>{" "}
                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Company :
                    </Typography>
                    <Textfield
                      value={patient.patient_lab.company}
                      name="company"
                      type="text"
                      required={true}
                      onchange={handleOnChange}
                    />
                  </div>{" "}
                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Date of Visit :
                    </Typography>
                    <Textfield
                      value={patient.patient_lab.date_of_visit}
                      name="date_of_visit"
                      type="date"
                      required={true}
                      onchange={handleOnChange}
                      style={{ width: "14rem" }}
                    />
                  </div>{" "}
                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Birthdate :
                    </Typography>
                    <Textfield
                      value={patient.patient_lab.patient_dob}
                      name="patient_dob"
                      type="date"
                      required={true}
                      onchange={handleOnChange}
                      style={{ width: "14rem" }}
                    />
                  </div>{" "}
                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Age :
                    </Typography>
                    <Textfield
                      value={patient.patient_lab.patient_age}
                      name="patient_age"
                      type="number"
                      required={true}
                      onchange={handleOnChange}
                    />
                  </div>
                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Referred Name :
                    </Typography>
                    <Textfield
                      value={patient.patient_lab.referred_name}
                      name="referred_name"
                      type="text"
                      required={true}
                      onchange={(val) => handleOnChange(val)}
                    />
                  </div>{" "}
                </div>
              </div>
              <ButtonComponent
                size="medium"
                variant="contained"
                label="Add Patients"
                onclick={() => add()}
                type="contained"
                color="primary"
              />
            </div>
          </div>
        </Box>
      </ModalComponent>

      <div className="patients-container">
        <div className="patient-content">
          <Typography variant="h5" display="block" gutterBottom sx={{ fontFamily: 'Poppins' }}>
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
        <PatientTable patientList={patient.patients} getAllPatient={getAllPatient}


        />
      </div>
    </div>
  );
};

export default Patient;
