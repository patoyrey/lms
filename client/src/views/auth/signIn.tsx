import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
const image_disp = require("../../images/doctor1.png").default;
const logo = require("../../images/logo.png").default;

import TextInput from "../components/textfield";
import ButtonComponent from "../components/button";
import HomePage from "../pages/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import userSlice, { setEmail, setPassword } from "../../redux/userSlice";

import { LoginService } from "../../services/loginservice";
import { Login } from "../../interface/login";
import { useNavigate } from "react-router-dom";
import { CheckAuth } from "../../services/checkAuthServices";

const SignIn: React.FC = () => {
  const email = useSelector((state: RootState) => state.user.email)
  const password = useSelector((state: RootState) => state.user.password);
  const user = useSelector((state: RootState) => state.user);

  const dispatch = useDispatch();


  const handleOnChange = (event: any) => {
    const { name, value } = event.target;
    if (name === "email") {
      dispatch(setEmail(value));
    } else if (name === "password") {
      dispatch(setPassword(value));
    }
  }

  const navigate = useNavigate();

  const handleLogin = async () => {

    await LoginService.post(user as unknown as Login, "login-user").then((res: any) => {
      if (res.succeeded) {
        navigate("/");
      } else {
        console.log(res);
      }
    });
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
      <div className="box">
        {/* LOGIN CREDENTIALS */}
        <center>
          <img className="imgLogo" src={logo} alt="logo"></img>
          <br></br>
          <br></br>
          <TextInput
            value={email}
            onchange={(e: any) => handleOnChange(e)}
            placeholder="Email"
            name="email"
            type="email"
            required={true}
          />
          <TextInput
            value={password}
            placeholder="Password"
            type="password"
            onchange={(e: any) => handleOnChange(e)}
            name="password"
            required={true}
          />

          <ButtonComponent
            size="large"
            variant="contained"
            label="Login"
            onclick={() => { handleLogin(); }}
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
