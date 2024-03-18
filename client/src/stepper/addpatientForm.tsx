import { Typography } from "@mui/material";
import Textfield from "../views/components/textfield";
import { useDispatch, useSelector } from "react-redux";
import { setPatients } from "../redux/patientsSlice";
import { RootState } from "../store";
import React, { useEffect } from "react";

interface AddPatientFormProps {
  onFormChange: (isValid: boolean) => void;
}
const AddPatientForm: React.FC<AddPatientFormProps> = ({ onFormChange }) => {
  const [formValid, setFormValid] = React.useState(false);
  const dispatch = useDispatch();
  const patient = useSelector((state: RootState) => state.patient);
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
  const validateForm = () => {
    const requiredFields = [
      patient.patient_lab.patient_fname,
      patient.patient_lab.patient_lname,
    ];
    const isFormValid = requiredFields.every((field) => field.trim() !== "");
    console.log("title:", isFormValid);
    onFormChange(isFormValid);
  };
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
  useEffect(() => {
    validateForm();
  }, [patient.patient_lab]);
  return (
    <div>
      {" "}
      <Typography variant="h6" display="block" sx={{ mb: 2 }} gutterBottom>
        <div className="header-text">
          <p
            style={{
              fontSize: "px",
              fontWeight: "bold",
              fontStyle: "Poppins",
            }}
          >
            Add Patient Info
          </p>
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
            minDate={`${new Date().toISOString().slice(0, 10)}`}
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
            maxDate={`${new Date().toISOString().slice(0, 10)}`}
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
            disabled={true}
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
  );
};
export default AddPatientForm;
