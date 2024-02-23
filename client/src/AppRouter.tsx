import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./views/auth/signIn";
import Layout from "./views/layout/layout";
import Content from "./views/layout/content";
import ChangePassword from "./views/auth/changepassword"
import Fields from "./views/pages/Fields";
import Tests from "./views/pages/Tests";
import HomePage from "./views/pages/HomePage";


export const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="signin" element={<SignIn />} />
                <Route path="homepage" element={<HomePage />} />
                <Route path='password-reset' element={<ChangePassword />} />
                <Route path="" element={<Layout />}>
                    <Route index element={<Content />} />
                    <Route path="fields" element={<Fields />} />
                    <Route path="tests" element={<Tests />} />


                </Route>
            </Routes>
        </BrowserRouter>
    );
};