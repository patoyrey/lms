import React, { useEffect, useState } from "react";
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { CircularProgress, IconButton } from '@mui/material';
import ButtonComponent from "../components/button";
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from "react-router-dom";
import PasswordFormControl from "../components/passwordformcontrol";
import { setPassword } from "../../redux/userSlice";
import { PasswordResetService } from "../../services/passwordResetService";

const ResetPassword: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const [newPassword, setNewPassword] = React.useState("");
  const [confirmNewPassword, setConfirmNewPassword] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search)
  const token = searchParams.get('token')
  const [displayMessage, setDisplayMessage] = useState<string>("Enter a new password below to change your password")
  const [displayMessageColor, setDisplayMessageColor] = useState<string>('#B2BEB5')
  const handleGoBack = () => {
    window.history.back();
  };
  const [isTokenValid, setIsTokenValid] = React.useState<boolean>(false)
  const [isValidatingToken, setIsValidatingToken] = React.useState<boolean>(true)
  const handleChangePassword = () => {
    if (newPassword === confirmNewPassword) {
      dispatch(setPassword(newPassword));

      setDisplayMessage("Resetting Password...")
      setDisplayMessageColor("green")
      setIsLoading(true)

      PasswordResetService.resetPassword(String(token), newPassword).then(async (result: any) => {
        if (result?.data?.succeeded) {



          await new Promise((resolve: any) => {
            setDisplayMessage(result?.data?.message)
            setTimeout(resolve, 3000)

          })

          navigate("/signIn")
        } else {
          setDisplayMessage(result?.data?.message)
          setDisplayMessageColor("red")
        }
      }).catch((error) => {

        setDisplayMessage(error?.response?.data?.message)
        setDisplayMessageColor("red")
      }).finally(() => setIsLoading(false))
    } else {

      setDisplayMessage("Passwords don't match")
      setDisplayMessageColor("red")
    }
  };
  useEffect(() => {
    PasswordResetService.validateToken(token as string)
      .then(() => setIsTokenValid(true)).catch(() => { }).finally(() => setIsValidatingToken(false))
  }, [])

  if (isValidatingToken) {
    return (
      <div className="loading">
        <CircularProgress />
      </div>
    )
  }
  if (!isTokenValid) {
    return (
      <div className="invalidTokendisplay">
        <div className="invalidTokenWrap">

          <p>Invalid Token</p>
        </div>
      </div>
    )

  }
  return (
    <div className="email-container">
      <div className="password-wrap">
        <div className="email-header">
          <div className="with-icon">
            <IconButton onClick={handleGoBack}>
              <ArrowBackRoundedIcon fontSize="large" color="inherit" />
            </IconButton>
            <h1>Change your password</h1>
          </div>
          <div className="resetp-border">
            <p style={{ color: displayMessageColor }}>{displayMessage}</p>
          </div>
        </div>

        <div className="password-content">
          <h3>New Password</h3>
          <PasswordFormControl
            id="newpassword"
            label="New Password"
            value={newPassword}
            onchange={(event) => setNewPassword(event.target.value)}
          />
          <h3>Confirm Password</h3>
          <PasswordFormControl
            id="confirmnewpassword"
            label="Confirm New Password"
            value={confirmNewPassword}
            onchange={(event) => setConfirmNewPassword(event.target.value)}
          />
          <ButtonComponent
            style={{ marginTop: "20px" }}
            disabled={isLoading}
            size="large"
            variant="contained"
            label="Change Password"
            onclick={handleChangePassword}
          />
        </div>
      </div>
    </div>
  );

};

export default ResetPassword;
