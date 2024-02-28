import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Test } from "../interface/test";
import { TestService } from "../services/testService";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { TestFields } from "../services/testfields";

const initialState: Test = {
  test_lab: {
    test_id: "",
    test_name: "",
    test_price: 0,
    test_desc: "",
    test_created_at: "",
    test_updated_at: "",
  },
  tests: [],
};

export const fetchAllLabTest: any = createAsyncThunk(
  "test/fetchAllLabTest",
  async () => {
    const res = await TestService.select("retrieve-test");

    return res;
  }
);

export const AddTestFields: any = createAsyncThunk(
  "test/AddTestFields",
  async (props) => {
    const res = await TestFields.add(props, "add-testfields");

    return res;
  }
);

export const fetchAllTestFiedls: any = createAsyncThunk(
  "testfield/fetchAllTestFiedls",
  async (test_id) => {
    const res = await TestFields.select(test_id, "retrieve-testfield");

    return res;
  }
);

const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTest: (state, action) => {
      state.test_lab = {
        ...state.test_lab,
        [action.payload.name]: action.payload.value,
      };
    },
    clearTest: (state) => {
      state.test_lab = {
        ...initialState.test_lab,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllLabTest.pending, (state, action) => {});
    builder.addCase(fetchAllLabTest.fulfilled, (state, action) => {
      state.tests = action.payload;
    });
    builder.addCase(fetchAllLabTest.rejected, (state, action) => {});

    builder.addCase(AddTestFields.pending, (state, action) => {});
    builder.addCase(AddTestFields.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(fetchAllTestFiedls.pending, (state, action) => {});
    builder.addCase(fetchAllTestFiedls.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addDefaultCase((state, action) => {
      console.warn(`Unhandled action type: ${action.type}`);
      return state;
    });
  },
});
export const { setTest, clearTest } = testSlice.actions;
export default testSlice.reducer;
