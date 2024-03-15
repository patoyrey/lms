import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import fieldReduce from "../redux/fieldSlice";
import patientsSlice from "../redux/patientsSlice";
import testSlice from "../redux/testSlice";
import testfieldSlice from "../redux/testfieldSlice";
import hmoSlice from "../redux/hmoSlice";
//put all reducers
export const rootReducer = combineReducers({
  user: userReducer,
  field: fieldReduce,
  patient: patientsSlice,
  test: testSlice,
  testfield: testfieldSlice,
  hmo: hmoSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
