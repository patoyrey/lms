import React from "react";
import TextField from '@mui/material/TextField';
type Props={
    label?:string
    value:string
    onchange:(val: string) => void
    placeholder?:string
    type:string 
    required:boolean
}

const TextInput: React.FC<Props>=({
    label,
    value,
    onchange,
    placeholder,
    type, 
    required
}) => {
    return(
        <TextField 
            required={required} 
            color="primary"  
            variant="outlined" 
            label={label} 
            type={type} 
            value={value}
            onChange={(e) => onchange(e.target.value)}
            placeholder={placeholder}
        />
    )
} 
export default TextInput
