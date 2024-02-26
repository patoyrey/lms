import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
  email: string;
  password: string;
  patientIfo: {
    fullName: string;
    dateOfVisit: string;
    email: string;
    birthday: string;
    age: number;
    company: string;
    gender: string;
  };
}
const initialState: UserState = {
  email: "",
  password: "",
  patientIfo: {
    fullName: "",
    dateOfVisit: "",
    email: "",
    birthday: "",
    age: 0,
    company: "",
    gender: "",
  },
};

export const hanldeLogin = createAsyncThunk(
  "user/login",
  async (data: { email: string; password: string }) => {
    const res = await axios.post(data.email, data.password);
    return res;
  }
);

export const fetchAllLabTest = () => {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setPatienInfo: (state, action) => {
      state.patientIfo = {
        ...state.patientIfo,
        [action.payload.name]: action.payload.value,
      };
    },
  },
});
export const { setEmail, setPassword, setPatienInfo } = userSlice.actions;
export default userSlice.reducer;
