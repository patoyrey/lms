import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import fieldReduce from "../redux/fieldSlice";
import patientsSlice from "../redux/patientsSlice";
import testSlice from "../redux/testSlice";
//put all reducers
export const rootReducer = combineReducers({
  user: userReducer,
  field: fieldReduce,
  patient: patientsSlice,
  test: testSlice
});

export type RootState = ReturnType<typeof rootReducer>;
