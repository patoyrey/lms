import { createSlice } from "@reduxjs/toolkit";
import { Patients } from "../interface/patients";

const initialState: Patients = {
  patient_id: "",
  user_id: "",
  patient_fname: "",
  patient_mname: "",
  patient_lname: "",
  patient_gender: "",
  patient_address: "",
  company: "",
  date_of_visit: "",
  referred_name: "",
  patient_dob: "",
  patient_age: 0,
  created_at: "",
  updated_at: "",
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setPatients: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    },
    clearPatients: () => {
      return initialState;
    },
  },
});

export const { setPatients } = patientSlice.actions;
export default patientSlice.reducer;
