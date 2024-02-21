import React from "react";
import TextField from "@mui/material/TextField";
type Props = {
  label?: string;
  value: string;
  onchange: (val: string) => void;
  placeholder?: string;
  type: string;
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
  required: boolean;
  style?: React.CSSProperties;
};

const TextInput: React.FC<Props> = ({
  label,
  value,
  onchange,
  placeholder,
  type,
  variant,
  size,
  required,
  style,
}) => {
  return (
    <TextField
      required={required}
      color="primary"
      variant={variant}
      label={label}
      type={type}
      value={value}
      size={size}
      onChange={(e) => onchange(e.target.value)}
      placeholder={placeholder}
      style={style}
    />
  );
};
export default TextInput;
