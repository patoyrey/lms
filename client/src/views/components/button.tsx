import React from "react";
import Button from "@mui/material/Button";

type Props = {
  size: "small" | "medium" | "large";
  variant: "text" | "outlined" | "contained";
  label: string;
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
}) => {
  return (
    <Button
      size={size}
      variant={variant}
      style={style}
      onClick={() => onclick()}
      color={color}
    >
      {label}
    </Button>
  );
};
export default ButtonComponent;
