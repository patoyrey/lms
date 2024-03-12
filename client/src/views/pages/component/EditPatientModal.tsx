import { Box, Typography } from "@mui/material";
import React from "react";
import ModalComponent from "../../components/ModalComponent";
import ButtonComponent from "../../components/button";
import Textfield from "../../components/textfield";
import { Field_Entity } from "../../../entity/fieldEntity";
import AlertComponent from "../../components/alert";
import { Patient_Entity } from "../../../entity/patientEntity";

interface ModalProps {
  handleClose: () => void;
  open: boolean;
  handleOnChange: (val: any) => void;
  patient: Patient_Entity;
  update: () => void;
}

const EditPatientModal: React.FC<ModalProps> = ({
  handleClose,
  open,
  handleOnChange,
  patient,
  update,
}) => {
  return (
    <>
      <div>
        <ModalComponent
          open={open}
          close={() => {
            handleClose();
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
                    <div className="patient-p">
                      <p
                        style={{
                          fontSize: "px",
                          fontWeight: "bold",
                          fontStyle: "Poppins",
                        }}
                      >
                        Update Patient Info
                      </p>
                    </div>
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
                        disabled={true}
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
                        onchange={(val) => handleOnChange(val)}
                      />
                    </div>{" "}
                  </div>
                </div>
                <ButtonComponent
                  size="medium"
                  variant="contained"
                  label="UPDATE"
                  onclick={() => {
                    update();
                    handleClose();
                  }}
                  type="contained"
                  color="primary"
                />
              </div>
            </div>
          </Box>
        </ModalComponent>
      </div>
    </>
  );
};

export default EditPatientModal;
