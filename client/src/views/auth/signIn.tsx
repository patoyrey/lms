import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
const image_disp = require("../../images/doctor1.png").default;
const logo = require("../../images/logo.png").default;

import TextInput from "../components/textfield";
import ButtonComponent from "../components/button";
import { LoginService } from "../../services/loginservice";
import { Login } from "../../interface/login";
import { useNavigate } from "react-router-dom";
import { CheckAuth } from "../../services/checkAuthServices";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const login = async () => {
    const props = {
      email: email,
      password: password,
    } as unknown as Login;

    await LoginService.post(props, "login-user").then((res: any) => {
      if (res.succeeded) {
        navigate("/");
      }
    });
  };

  useEffect(() => {
    CheckAuth.get("get-auth")
      .then((res: any) => {
        if (res) {
          navigate("/");
        }
      })
      .catch((error) => {});
  }, []);

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
        </center>
      </div>
      <div>
        <img className="doctor1_img" src={image_disp} alt="doctor1"></img>
      </div>
    </Box>
  );
};

export default SignIn;
