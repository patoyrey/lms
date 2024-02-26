import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import fieldReduce from "../redux/fieldSlice";
import patientsSlice from "../redux/patientsSlice";
//put all reducers
export const rootReducer = combineReducers({
  user: userReducer,
  field: fieldReduce,
  patient: patientsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
