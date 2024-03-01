import React from "react";
import Button from "@mui/material/Button";

type Props = {
  size: "small" | "medium" | "large";
  variant: "text" | "outlined" | "contained";
  label: string;
  type?: any;
  onclick: () => void;
  style?: React.CSSProperties;
  color:
    | "secondary"
    | "success"
    | "error"
    | "inherit"
    | "primary"
    | "info"
    | "warning";
};

const ButtonComponent: React.FC<Props> = ({
  size,
  variant,
  onclick,
  label,
  style,
  color,
  type,
}) => {
  return (
    <Button
      size={size}
      variant={variant}
      style={style}
      onClick={() => onclick()}
      color={color}
      type={type}
    >
      {label}
    </Button>
  );
};
export default ButtonComponent;
