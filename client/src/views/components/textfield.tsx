import React from "react";
import TextField from "@mui/material/TextField";
type Props = {
  label?: string;
  value: string;
  onchange: (val: any) => void;
  placeholder?: string;
  type: string;
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
  required: boolean;
  style?: React.CSSProperties;
  name?: string
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
  name
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
      onChange={(e) => onchange(e)}
      placeholder={placeholder}
      style={style}
      name={name}
    />
  );
};
export default TextInput;
