import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Test } from "../interface/test";

const initialState: Test = {
    test_id: "",
    test_name: "",
}

// export const hanldeLogin = createAsyncThunk(
//     'user/login',
//     async (data: { email: string, password: string }) => {
//         const res = await axios.post(data.email, data.password);
//         return res
//     }
// )

// export const fetchAllLabTest = () => { };

const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        setTest: (state, action) => {
            return {
                ...state,
                [action.payload.name]: action.payload.value,

            }
        },
        clearTest: () => {
            return initialState;
        }

    },
});
export const { setTest, clearTest } = testSlice.actions;
export default testSlice.reducer;

