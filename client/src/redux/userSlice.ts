import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface UserState {
    email: string;
    password: string;
    // patientIfo: {
    //     fullName: string;
    //     dateOfVisit: string;

    // }
}
const initialState: UserState = {
    email: "",
    password: "",
    // patientIfo: {
    //     fullName: '',
    //     dateOfVisit: ''
    // }
}

export const hanldeLogin = createAsyncThunk(
    'user/login',
    async (data: { email: string, password: string }) => {
        const res = await axios.post(data.email, data.password);
        return res
    }
)

export const fetchAllLabTest = () => { };

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
        // setPatienInfo: (state, action) => {
        //     state.patientIfo = action.payload
        // }
    },
});
export const { setEmail, setPassword } = userSlice.actions;
export default userSlice.reducer;

