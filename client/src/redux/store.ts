import { Password } from "@mui/icons-material";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

export default configureStore({
    reducer: {
        user: userReducer,

    }
})