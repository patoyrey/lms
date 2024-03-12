import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Test } from "../interface/test";
import { TestService } from "../services/testService";

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
  test_update: {
    test_id: "",
    test_name: "",
    test_price: 0,
    test_desc: "",
    test_created_at: "",
    test_updated_at: "",
  },
  test_id: "",
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

export const UpdateTest: any = createAsyncThunk(
  "update/Test",
  async (props) => {
    const res = await TestService.update(props, "update-test");

    return res;
  }
);

export const DeleteTest: any = createAsyncThunk(
  "delete/Test",
  async (test_id) => {
    const res = await TestService.delete(test_id, "delete-test");

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
    setTestId: (state, action) => {
      state.test_id = action.payload;
    },
//     setSelectTestsId:(state, action)=>{
//       const test_id = action.payload.test_id
//       const arrayIndex = action.payload.index
//       const index = state.test.findIndex(
//         (item: any) => item.field_id === field_id
//       );
// console.log ("Index", index)
//     },
    setTestUpdate: (state, action) => {
      state.test_update = {
        ...state.test_update,
        [action.payload.name]: action.payload.value,
      };
    },
    getTestToUpdate: (state, action) => {
      state.test_update = action.payload;
    },
    clearTest: (state) => {
      state.test_lab = {
        ...initialState.test_lab,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllLabTest.pending, (state, action) => { });
    builder.addCase(fetchAllLabTest.fulfilled, (state, action) => {
      state.tests = action.payload;
    });
    builder.addCase(fetchAllLabTest.rejected, (state, action) => { });

    builder.addCase(AddTestFields.pending, (state, action) => { });
    builder.addCase(AddTestFields.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(UpdateTest.pending, (state, action) => { });
    builder.addCase(UpdateTest.fulfilled, (state, action) => {
      console.log(action.payload);
    });
    builder.addCase(DeleteTest.pending, (state, action) => { });
    builder.addCase(DeleteTest.fulfilled, (state, action) => {
      console.log(action.payload);
    });

    builder.addDefaultCase((state, action) => {
      // console.warn(`Unhandled action type: ${action.type}`);
      return state;
    });
  },
});
export const { setTest, clearTest, setTestUpdate, getTestToUpdate, setTestId } =
  testSlice.actions;
export default testSlice.reducer;
