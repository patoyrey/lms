import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignIn from "./signIn"

export const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='signin' element={<SignIn />}/>
            </Routes>
        </BrowserRouter>
    )
}