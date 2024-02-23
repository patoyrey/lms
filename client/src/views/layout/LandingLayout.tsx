import React, { useEffect } from "react";
import Nav from "./nav";
import Content from "./content";
import Footer from "./footer";
import { Outlet, useNavigate } from "react-router-dom";
import LandingNav from "./landingNavBar";
import { CheckAuth } from "../../services/checkAuthServices";

const LandingLayout: React.FC = (props) => {
    const navigate = useNavigate()
    useEffect(() => {
        CheckAuth.get("get-auth")
            .then((res: any) => {
                if (res) {
                    navigate("/landing");
                }
            })
            .catch((error) => { });
    }, []);

    return (
        <div>
            <LandingNav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default LandingLayout;
