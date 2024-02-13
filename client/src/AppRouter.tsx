import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from "./views/auth/signIn"
import ChangePassword from "./views/auth/changepassword"
export const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='signin' element={<SignIn />} />
                <Route path='password-reset' element={<ChangePassword />} />

            </Routes>
        </BrowserRouter>
    )
}