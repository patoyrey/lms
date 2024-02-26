import { createSlice } from "@reduxjs/toolkit";
import { Field } from "../interface/field";

const initialState: Field = {
  field_id: "",
  field_name: "",
  unit: "",
  mainRefRange: "",
  femaleRefRange: "",
  RefRange: "",
  DesirableRefRange: "",
  borderlineRefRange: "",
  highRiskRefRange: "",
  other: "",
};

const fieldSlice = createSlice({
  name: "field",
  initialState,
  reducers: {
    setField: (state, action) => {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    },
    clearField: () => {
      return initialState;
    },
  },
});

export const { setField, clearField } = fieldSlice.actions;
export default fieldSlice.reducer;
