import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PatienLabTestFields } from "../interface/patientlabtestfields";
import { PatientLabTestFieldsService } from "../services/patientlabtestfieldsservice";

const initialState: PatienLabTestFields = {
  patient_labtest_field_id: "",
  patient_labtest_id: "",
  field_id: "",
  result: "",
  createdAt: "",
  udpatedAt: "",
};

export const addPatientLabtestFields: any = createAsyncThunk(
  "add/patientlabtestfields",
  async (props: any) => {
    //TODO: add patientlabtestfields service

    const res = await PatientLabTestFieldsService.add(
      { props },
      "add-patientlabtestfields"
    );
    return res;
  }
);

const patientlabtestfields = createSlice({
  name: "patientlabtestfields",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(addPatientLabtestFields.pending, (state, action) => {});
    builders.addCase(addPatientLabtestFields.fulfilled, (state, action) => {
      console.log(action.payload);
    });
  },
});
export const {} = patientlabtestfields.actions;
export default patientlabtestfields.reducer;
