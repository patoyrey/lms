import { fetchAllPatients } from "../redux/patientsSlice";
import { Action, Dispatch } from "@reduxjs/toolkit";

export const GetAllPatients = async (dispatch: Dispatch<Action>) => {
  try {
    const res = await dispatch(fetchAllPatients());

    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
