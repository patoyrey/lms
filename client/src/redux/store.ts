import { Password } from "@mui/icons-material";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import FieldsReducer from "./fieldSlice";
import TestReducer from "./testSlice";
import PatientReducer from "./patientsSlice";
import testfieldSlice from "./testfieldSlice";
import patientLabTestFieldsSlice from "./patientLabTestSlice";
import hmoSlice from "./hmoSlice";
import doctorSlice from "./doctorSlice";
export default configureStore({
  reducer: {
    user: userReducer,
    field: FieldsReducer,
    patient: PatientReducer,
    test: TestReducer,
    testfield: testfieldSlice,
    patientlabtest: patientLabTestFieldsSlice,
    hmo: hmoSlice,
    doctor: doctorSlice,
  },
});
