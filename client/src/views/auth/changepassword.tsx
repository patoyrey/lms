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


const ChangePassword: React.FC = () => {
    const [showoldPassword, setShowPassword] = React.useState(false);
    const [shownewPassword, setShowPassword1] = React.useState(false);
    const [showconfirmPassword, setShowPassword2] = React.useState(false);


    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
    const handleClickShowPassword2 = () => setShowPassword2((show) => !show);


    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <div className="container">
            <div className="content">
                <div className="left-col">
                    <img src={lockImage} alt="forgotimage"></img>
                </div>
                <div className="right-col" >
                    <center>
                        <LockIcon sx={{ fontSize: 40 }} />
                    </center>
                    <h1>Reset Your Password</h1>
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
                        <center>
                            <div className="button" >
                                <Button sx={{ m: 1, width: '35ch' }} variant="contained" className="resetbtn">Reset Button</Button>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ChangePassword
