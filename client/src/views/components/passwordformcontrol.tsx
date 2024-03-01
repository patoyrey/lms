import React from "react"
import Button from '@mui/material/Button'
import FilledInput from '@mui/material/FilledInput';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextInput from "./textfield";
import { TextField } from "@mui/material";

type Props = {
    id: string
    label: string
    value: string | number;
    onchange: (val: any) => void;
    style?: React.CSSProperties
};

const PasswordFormControl: React.FC<Props> = ({
    id,
    value,
    onchange,
    label,
    style
}) => {
    const [showPassword, setShowPassword] = React.useState(false);

    return (
        <TextField
            id={id}
            type={showPassword ? 'text' : 'password'}
            label={label}
            value={value}
            onChange={(e) => onchange(e)}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword((show) => !show)}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    );
};

export default PasswordFormControl;