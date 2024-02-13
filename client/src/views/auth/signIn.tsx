import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
const image_disp = require("../../image/doctor1.png").default;
const logo = require("../../image/logo.png").default;
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton, InputAdornment } from "@mui/material";
import TextInput from "../components/textfield";
import ButtonComponent from "../components/button";

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    {
        /*  const [visible,setVisible] = useState(false)
    
        const EndAdorment = ({}) =>{
            return(
                <InputAdornment position="end">
                <IconButton>
                    <Visibility/>
                </IconButton>
            </InputAdornment>
            );  
        };
    */
    }
    const login = () => {
        console.log("button clicked");
    };
    return (
        <Box
            component="form"
            sx={{
                "& .MuiTextField-root": { m: 0.5, width: "30ch" },
                "& button": { m: 1, width: "28ch" },
            }}
            noValidate
            autoComplete="off"
            className="signContainer"
        >
            <div></div>
            <div className="box">
                {/* LOGIN CREDENTIALS */}
                <center>
                    <img className="imgLogo" src={logo} alt="logo"></img>
                    <br></br>
                    <br></br>
                    <TextInput
                        value={email}
                        onchange={(val: string) => setEmail(val)}
                        placeholder="Email"
                        type="email"
                        required={true}
                    />
                    <TextInput
                        value={password}
                        onchange={(val: string) => setPassword(val)}
                        placeholder="Password"
                        type="password"
                        required={true}
                    />

                    <ButtonComponent
                        size="large"
                        variant="contained"
                        label="Login"
                        onclick={() => login()}
                    />

                    <div className="forgotPass ">
                        <a href="/password-reset" className="forgotPassHyperLink">
                            Forgot Password?
                        </a>
                    </div>
                    <br></br>
                    <div className="poppins-font">
                        Don't have an account yet?{" "}
                        <a href="#" className="poppins-font">
                            Sign up
                        </a>
                    </div>
                </center>
            </div>
            <div>
                <img className="doctor1_img" src={image_disp} alt="doctor1"></img>
            </div>
        </Box>
    );
};

export default SignIn;
