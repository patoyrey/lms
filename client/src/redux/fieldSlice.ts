import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Field } from "../interface/field";
import { Field_Entity } from "../entity/fieldEntity";
import { FieldService } from "../services/fieldservice";

const initialState: Field = {
  field_lab: {
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
  test_fields: {
    test_id: "",
    fields_id: [],
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
      state.field_lab = {
        ...state.field_lab,
        [action.payload.name]: action.payload.value,
      };
    },
    clearField: (state) => {
      state.field_lab = {
        ...initialState.field_lab,
      };
    },
    setSelectedTestID: (state, action) => {
      state.test_fields.test_id = action.payload;
    },
    setSelectFieldsId: (state, action) => {
      const field_id = action.payload;

      const index = state.test_fields.fields_id.indexOf(field_id);

      console.log("Index", index);
      if (index === -1) {
        state.test_fields.fields_id.push(field_id);
      } else {
        state.test_fields.fields_id.splice(index, 1);
      }
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

export const { setField, clearField, setSelectedTestID, setSelectFieldsId } =
  fieldSlice.actions;
export default fieldSlice.reducer;
