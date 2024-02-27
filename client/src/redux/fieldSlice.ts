import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Field } from "../interface/field";
import { Field_Entity } from "../entity/fieldEntity";
import { FieldService } from "../services/fieldservice";

const initialState: Field = {
  Field_lab: {
    field_id: "",
    field_name: "",
    unit: "",
    maleRefRange: "",
    femaleRefRange: "",
    RefRange: "",
    DesirableRefRange: "",
    borderlineRefRange: "",
    highRiskRefRange: "",
    other: "",
  },
  field: [],
};

export const fetchAllField: any = createAsyncThunk(
  "field/fetchAllField",
  async () => {
    const res = await FieldService.select("retrieve-field");
    return res;
  }
);

const fieldSlice = createSlice({
  name: "field",
  initialState,
  reducers: {
    setField: (state, action) => {
      state.Field_lab = {
        ...state.Field_lab,
        [action.payload.name]: action.payload.value,
      };
    },
    clearField: (state) => {
      state.Field_lab = {
        ...initialState.Field_lab,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllField.pending, (state, action) => {});
    builder.addCase(fetchAllField.fulfilled, (state, action) => {
      state.field = action.payload;
    });
    builder.addCase(fetchAllField.rejected, (state, action) => {});
    builder.addDefaultCase((state, action) => {
      // console.warn("Unhandled action type: ${action.type}");
      return state;
    });
  },
});

export const { setField, clearField } = fieldSlice.actions;
export default fieldSlice.reducer;
