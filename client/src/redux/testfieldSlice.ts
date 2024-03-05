import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TestField } from "../interface/testfield";
import { TestFields } from "../services/testfields";

const initialState: TestField = {
  test_id: "",
  test_name: "",
  test_price: 0,
  test_desc: "",
  test_created_at: "",
  test_updated_at: "",
  field: [],
};
export const fetchAllTestFiedls: any = createAsyncThunk(
  "testfield/fetchAllTestFiedls",
  async (test_id) => {
    const res = await TestFields.select(test_id, "retrieve-testfield");

    return res;
  }
);

const testfield = createSlice({
  name: "testfield",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllTestFiedls.pending, (state, action) => { });
    builder.addCase(fetchAllTestFiedls.fulfilled, (state, action) => {
      //console.log(action.payload);
      //   return action.payload;

      return {
        ...state,
        ...action.payload,
      };
    });
    builder.addDefaultCase((state, action) => {
      // console.warn(`Unhandled action type: ${action.type}`);
      return state;
    });
  },
});
export const { } = testfield.actions;
export default testfield.reducer;
