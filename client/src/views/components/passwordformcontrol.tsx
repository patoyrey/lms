import React from "react"
import Button from '@mui/material/Button'
import FilledInput from '@mui/material/FilledInput';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type Props = {
    id: string
    label: string
}

const PasswordFormControl: React.FC<Props> = ({ id, label }) => {
    const [showoldPassword, setShowPassword] = React.useState(false);
    const [shownewPassword, setShowPassword1] = React.useState(false);
    const [showconfirmPassword, setShowPassword2] = React.useState(false);
    return (
        // <FilledInput
        //     id={id}
        //     type={type}
        //     endAdornment={endAdornment}
        // />
        <FormControl sx={{ m: 1, backgroundColor: "white" }} variant="filled" >
            <InputLabel >{label}</InputLabel>
            <FilledInput
                id={id}
                type={showoldPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword((show) => !show)}

                            edge="end"
                        >
                            {showoldPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )

}

export default PasswordFormControl