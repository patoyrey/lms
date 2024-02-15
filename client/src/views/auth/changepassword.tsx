import React from "react";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from "@mui/material/Button";
import LockIcon from '@mui/icons-material/Lock';
const lockImage = require("../../images/lockimg.jpg").default;
import { alignProperty } from "@mui/material/styles/cssUtils";
import PasswordFormControl from "../components/passwordformcontrol";
import ButtonComponent from "../components/button";


const ChangePassword: React.FC = () => {
    const [showoldPassword, setShowPassword] = React.useState(false);
    const [shownewPassword, setShowPassword1] = React.useState(false);
    const [showconfirmPassword, setShowPassword2] = React.useState(false);


    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);


    const reset = () => {
        console.log("Reset Password")
    };
    return (
        <div className="changepass-container">

            <div className="left-col">
                <img src={lockImage} alt="forgotimage"></img>
            </div>
            <div className="right-col" >
                <center>
                    <LockIcon sx={{ fontSize: 40 }} />
                </center>
                <p>Reset Your Password</p>
                <div className="right-col-content">
                    <PasswordFormControl
                        id="oldpassword"
                        label="Old Password"
                    />
                    <div className="newpassword">

                        <PasswordFormControl
                            id="newpassword"
                            label="New Password"

                        />
                    </div>

                    <PasswordFormControl
                        id="confirmnewpassword"
                        label="Confirm New Password"

                    />

                    <ButtonComponent
                        size="large"
                        variant="contained"
                        label="Reset Button"
                        onclick={() => reset()}
                        style={{ width: '30ch' }}
                    />
                </div>

            </div>
        </div >
    )
}

export default ChangePassword
