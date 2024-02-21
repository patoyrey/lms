import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./views/auth/signIn";
import Layout from "./views/layout/layout";
import Content from "./views/layout/content";
import ChangePassword from "./views/auth/changepassword"

import Tests from "./views/pages/Tests";
import Fields from "./views/pages/Fields";


export const AppRouter: React.FC = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="signin" element={<SignIn />} />
                <Route path='password-reset' element={<ChangePassword />} />
                
                <Route path="" element={<Layout />}>
                    <Route index element={<Content />} />
                    <Route path='tests' element={<Tests />} />
                    <Route path='fields' element={<Fields />} />

                </Route>
            </Routes>
        </BrowserRouter>
    );
};
