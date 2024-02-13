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
                        <FormControl sx={{ m: 1, width: '35ch' }} variant="filled">
                            <InputLabel htmlFor="oldpassword">Old Password</InputLabel>
                            <FilledInput
                                id="oldpassword"
                                type={showoldPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showoldPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <div className="newpassword">
                            <FormControl sx={{ m: 1, width: '35ch' }} variant="filled">
                                <InputLabel htmlFor="newpassword">New Password</InputLabel>
                                <FilledInput
                                    id="newpassword"
                                    type={shownewPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword1}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {shownewPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>

                        <FormControl sx={{ m: 1, width: '35ch' }} variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">Confirm New Password</InputLabel>
                            <FilledInput
                                id="filled-adornment-password"
                                type={showconfirmPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword2}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showconfirmPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
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
