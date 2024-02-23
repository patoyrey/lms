import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./views/auth/signIn";
import Layout from "./views/layout/layout";
import Content from "./views/layout/content";
import ChangePassword from "./views/auth/changepassword";

import Tests from "./views/pages/Tests";
import Fields from "./views/pages/Fields";
import PrivateRoutes from "./utils/privateRoutes";
import Logout from "./views/pages/Logout";
import HomePage from "./views/pages/HomePage";
import LandingNav from "./views/layout/landingNavBar";
import LandingLayout from "./views/layout/LandingLayout";
import Users from "./views/pages/Users";
import TestFields from "./views/pages/TestField";
import Patient from "./views/pages/Patient";
import PatientTests from "./views/pages/PatientTest";

// const NoAuth = () => {
//     return(
//         <>
//              <Routes>
//                 <Route path="/" element={<Content />} />
//                 <Route path="password-reset" element={<ChangePassword />} />
//                 <Route path="logout" element={<Logout />} />
//                 <Route path="signin" element={<SignIn />} />
//             </Routes>
//         </>
//     )
// }

// const auth = () => {
//     return(
//         <></>
//     )
// }

export const AppRouter: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/landing" element={<LandingLayout />}>
                    <Route index element={<Content />} />

                </Route>
                <Route path="signin" element={<SignIn />} />
                <Route path="password-reset" element={<ChangePassword />} />
                <Route path="logout" element={<Logout />} />
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="tests" element={<Tests />} />
                        <Route path="fields" element={<Fields />} />
                        <Route path="users" element={<Users />} />
                        <Route path="testfields" element={<TestFields />} />
                        <Route path="patient" element={<Patient />} />
                        <Route path="patienttest" element={<PatientTests />} />

                    </Route>
                </Route>

            </Routes>
        </BrowserRouter>
    );
};
