import { Action } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { fetchAllHmo } from "../redux/hmoSlice";

export const GetAllHmo = async (dispatch: Dispatch<Action>) => {
  try {
    const res = await dispatch(fetchAllHmo());
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
