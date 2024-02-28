import React from "react";
import Button from "@mui/material/Button";

type Props = {
  size: "small" | "medium" | "large";
  variant: "text" | "outlined" | "contained";
  label: string;
  onclick: () => void;
  style?: React.CSSProperties;
  disabled?: boolean
};

const ButtonComponent: React.FC<Props> = ({
  size,
  variant,
  onclick,
  label,
  style,
  disabled
}) => {
  return (
    <Button
      size={size}
      variant={variant}
      style={style}
      onClick={() => onclick()}
      disabled={disabled}
    >
      {label}
    </Button>
  );
};
export default ButtonComponent;
