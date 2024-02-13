import React from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
const image_disp = require("../../image/doctor1.png").default;
const logo = require("../../image/logo.png").default;
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const SignIn: React.FC = () => {
    return (  
        <Box 
            component="form"
            sx={{
                
                '& .MuiTextField-root': { m: 0.5,  width: '30ch' },
                '& button': { m: 1, width: '28ch' } ,     
            }}
            noValidate
            autoComplete="off"
          
        >
            <div></div>
            <div className="box">
                {/* LOGIN CREDENTIALS */}
                <center>
                    <img className="imgLogo" src={logo} alt="logo"></img><br></br><br></br>
                    <TextField required color="primary"  variant="outlined" label="Email" type="email" /><br></br>
                    <TextField required variant="outlined" label="Password" type="password" /><br></br>
                    <div className="forgotPass " ><a href="#" className="forgotPassHyperLink">Forgot Password?</a></div><br></br>
                    <Button size="large" color="primary" variant="contained">login</Button><br></br>
                    <div className="poppins-font">Don't have an account yet? <a href="#" className="poppins-font">Sign up</a></div>
                </center>
            </div>    
            <div>
                <img className="doctor1_img" src={image_disp} alt="doctor1"></img>
            </div>
            
        </Box>  
        
    )
}

export default SignIn