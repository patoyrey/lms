import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { PatientLabTestService } from "../services/patientlabtest";
import { PatientLabTest } from "../interface/patientlabtest";

const initialState: PatientLabTest = {
  patient_labtest_field_id: "",
  patien_labtest_id: "",
  field_id: "",
  result: "",
  createdAt: "",
  udpatedAt: "",
  patient_lab_test_data: [],
};

export const fetchAllPatientLabTest: any = createAsyncThunk(
  "patientlabtest/fetchAllLabTest",
  async (props) => {
    console.log("Props", props);
    const res = await PatientLabTestService.select(
      `select-patient-labtest?patient_id=${props}`
    );

    return res;
  }
);

const patientlabtest = createSlice({
  name: "patientlabtest",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(fetchAllPatientLabTest.pending, (state, action) => {});
    builders.addCase(fetchAllPatientLabTest.fulfilled, (state, action) => {
      state.patient_lab_test_data = action.payload;
    });
  },
});
export const {} = patientlabtest.actions;
export default patientlabtest.reducer;
