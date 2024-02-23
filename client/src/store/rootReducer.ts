import { combineReducers } from '@reduxjs/toolkit'
import userReducer from "../redux/userSlice";

//put all reducers
export const rootReducer = combineReducers({
    user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;