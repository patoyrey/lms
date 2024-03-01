import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { IconButton, TextField } from '@mui/material';
import TextInput from '../components/textfield';
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../components/button";

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';
import { setEmail } from '../../redux/userSlice';
import { useState } from 'react';
import { EmailService } from '../../services/emailService';

const EmailVerify: React.FC = (props) => {
    const email = useSelector((state: RootState) => state.user.email);
    const [displayMessageColor, setDisplayMessageColor] = useState<string>('#B2BEB5')
    const [displayMessage, setDisplayMessage] = useState<string>("We will send you an email to reset your password")
    const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false)
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate("/signIn");
    };
    const dispatch = useDispatch();
    const handleOnChange = (event: any) => {
        const { name, value } = event.target;
        if (name === "email") {
            dispatch(setEmail(value));
        }
    };
    const handleValidateEmail = () => {
        if (email === "") return
        setIsButtonDisabled(true)
        EmailService.validateEmail(email).then((result: any) => {
            console.log(result)
            const message = result?.data?.message
            setDisplayMessage(message)

            setDisplayMessageColor("green")
        }).catch((error) => {
            const message = error?.response?.data?.message
            setDisplayMessage(message)
            setDisplayMessageColor("red")
            setStatus(true)
        }

        ).finally(() => setIsButtonDisabled(false))
    }
    return (
        <div className="email-container">
            <div className="email-wrap">
                <div className="email-header">
                    <div className="with-icon">
                        <IconButton onClick={handleGoBack}>
                            <ArrowBackRoundedIcon fontSize="large" color="inherit" />
                        </IconButton>
                        <h1>Reset your password</h1>
                    </div>
                    <div className="p-row">
                        <div className="p-border">
                            <p style={{ color: displayMessageColor }}>{displayMessage}</p>
                        </div>
                    </div>
                </div>
                <h3>Email</h3>
                <div className="email-content">

                    <TextInput
                        error={status}
                        value={email}
                        onchange={(e: any) => handleOnChange(e)}
                        name="email"
                        label="Email"
                        type="email"
                    />
                    <ButtonComponent
                        size="large"
                        variant="contained"
                        label="Send Verification"
                        onclick={() =>
                            handleValidateEmail()
                        }
                        disabled={isButtonDisabled}
                    />
                </div>
            </div>
        </div>
    );
};

export default EmailVerify;
