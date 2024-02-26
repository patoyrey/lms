import { useDispatch, useSelector } from "react-redux";
import Nav from "../layout/nav";
import { RootState } from "../../store";
import ModalComponent from "../components/ModalComponent";
import { useState } from "react";
import { Box, Typography } from "@mui/material";

import ButtonComponent from "../components/button";
import Textfield from "../components/textfield";
import { setPatients } from "../../redux/patientsSlice";
import { PatientService } from "../../services/pateintsService";
import { clearField } from "../../redux/fieldSlice";

const Patient: React.FC = () => {
  const [open, setOpen] = useState(false);
  const user = useSelector((state: RootState) => state.user);
  const patient = useSelector((state: RootState) => state.patient);
  const dispatch = useDispatch();
  //   console.log(user);

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

  const hanldeAddPatients = async () => {
    const res = await PatientService.add(patient, "add-patient");
    if (res) {
      dispatch(clearField());
    } else {
    }

    console.log(patient);
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
                  Adding Patient
                </Typography>
                <div className="patient-ref">
                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Firstname :
                    </Typography>
                    <Textfield
                      value={patient.patient_fname}
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
                      value={patient.patient_mname}
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
                      value={patient.patient_lname}
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
                      value={patient.patient_gender}
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
                      value={patient.patient_address}
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
                      value={patient.company}
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
                      value={patient.date_of_visit}
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
                      value={patient.patient_dob}
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
                      value={patient.patient_age}
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
                      value={patient.referred_name}
                      name="referred_name"
                      type="text"
                      required={true}
                      onchange={handleOnChange}
                    />
                  </div>{" "}
                </div>
              </div>
              <ButtonComponent
                size="medium"
                variant="contained"
                label="Add Patients"
                onclick={hanldeAddPatients}
              />
            </div>
          </div>
        </Box>
      </ModalComponent>

      <div className="patients-container">
        <Textfield
          value=""
          onchange={(e) => console.log(e.target.value)}
          placeholder="Search"
          type="search"
          variant="outlined"
          size="small"
          style={{ width: "80%" }}
          required={true}
        />
        <ButtonComponent
          size="medium"
          variant="contained"
          label="Search"
          onclick={() => console.log("Clcik ")}
        />
        <ButtonComponent
          size="medium"
          variant="contained"
          label="Add Patients"
          onclick={handleOnClick}
        />
      </div>
    </div>
  );
};

export default Patient;
