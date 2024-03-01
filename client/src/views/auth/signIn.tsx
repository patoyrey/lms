import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
const logo = require("../../images/logo.png").default;
const img_right = require("../../images/laboratory.jpg").default;
import TextInput from "../components/textfield";
import ButtonComponent from "../components/button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import userSlice, {
  setEmail,
  setPassword,
  setPatienInfo,
} from "../../redux/userSlice";

import { LoginService } from "../../services/loginservice";
import { Login } from "../../interface/login";
import { useNavigate } from "react-router-dom";
import { CheckAuth } from "../../services/checkAuthServices";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignIn: React.FC = () => {
  const email = useSelector((state: RootState) => state.user.email);
  const password = useSelector((state: RootState) => state.user.password);
  const user = useSelector((state: RootState) => state.user);
  const [showPassword, setShowPassword] = React.useState(false);
  const [error, setError] = useState<string>("");
  const [status, setStatus] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();

  const handleOnChange = (event: any) => {
    const { name, value } = event.target;
    if (name === "email") {
      dispatch(setEmail(value));
    } else if (name === "password") {
      dispatch(setPassword(value));
    }
  };

  const handOnChangePatient = (event: any) => {
    const [name, value] = event.target;
    const payload = {
      name,
      value,
    };
    dispatch(setPatienInfo(payload));
  };

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await LoginService.post(user as unknown as Login, "login-user").then(
        (res: any) => {
          if (res.succeeded) {
            navigate("/");
          } else {
            console.log(res);
            setError(res.msg);
            setStatus(true);
          }
        }
      );
    } catch {
      setError("Invalid Entry");
      setStatus(true);
    }
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
        "& .MuiTextField-root": { m: 1, width: "100%" },
        "& button": { m: 1, width: "37ch" },
      }}
      noValidate
      autoComplete="off"
      className="signContainer"
    >
      <div className="box">
        <div className="left">
          <img className="imgLogo" src={logo} alt="logo"></img>
          <TextInput
            error={status}
            value={email}
            onchange={(e: any) => handleOnChange(e)}
            name="email"
            label="Email"
            type="email"
          />

          <TextInput
            value={password}
            error={status}
            type={showPassword ? "text" : "password"}
            onchange={(e: any) => handleOnChange(e)}
            name="password"
            label="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    style={{ fontSize: "2px" }}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          ></TextInput>

          <div className="forgotPass ">
            <a href="/password-reset" className="forgotPassHyperLink">
              Forgot Password?
            </a>
          </div>

          <div className="login_btn">
            <p className="errorMessage">{error}</p>
            <ButtonComponent
              size="large"
              variant="contained"
              label="Login"
              onclick={() => {
                handleLogin();
              }}
              color="primary"
            />
          </div>
        </div>
        <div className="right">
          <img className="img_right" src={img_right} alt="laboratory"></img>
        </div>
      </div>
    </Box>
  );
};

export default SignIn;
