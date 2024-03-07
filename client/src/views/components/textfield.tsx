import React from "react";
import TextField from "@mui/material/TextField";
type Props = {
  label?: string;
  value: string | number;
  onchange: (val: any) => void;
  placeholder?: string;
  type: string;
  variant?: "outlined" | "filled" | "standard";
  size?: "small" | "medium";
  required?: boolean;
  style?: React.CSSProperties;
  name?: string;
  InputProps?: any;
  helperText?: string;
  error?: boolean;
  color?: any;
  onkeydown?: (e: any) => void;
  ref?: any;
  isFocus?: boolean;
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
  name,
  InputProps,
  helperText,
  color,
  error,
  ref,
  onkeydown,
  isFocus,
}) => {
  return (
    <TextField
      error={error}
      required={required}
      color={color}
      variant={variant}
      label={label}
      type={type}
      value={value}
      size={size}
      onChange={(e) => onchange(e)}
      placeholder={placeholder}
      style={style}
      name={name}
      InputProps={InputProps}
      helperText={helperText}
      onKeyDown={onkeydown}
      ref={ref}
      autoFocus={isFocus}
    />
  );
};
export default TextInput;
