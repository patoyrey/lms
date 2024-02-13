import React from "react";
import Button from '@mui/material/Button';

type Props = {
    size: "small" | "medium" | "large"
    variant:"text" | "outlined" | "contained"
    label: string
    onclick: () => void
}

const ButtonComponent: React.FC<Props> = ({
    size,
    variant,  
    onclick,
    label
}) => {
    return (
        <Button
            size={size}
            variant={variant}

            onClick={()=>onclick()}

        >
            {label}
        </Button>
    )
}
export default ButtonComponent