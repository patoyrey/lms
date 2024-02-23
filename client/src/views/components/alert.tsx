import { Alert, Snackbar } from "@mui/material";
import React from "react";

export interface SnackbarOrigin {
  vertical: "top" | "bottom";
  horizontal: "left" | "center" | "right";
}

export type SnackbarCloseReason = "timeout" | "clickaway" | "escapeKeyDown";

type Props = {
  className?: string;
  open?: boolean;
  autoHideDuration: number;
  anchorOrigin?: SnackbarOrigin;
  severity: "success" | "info" | "warning" | "error";
  message: string;
  onClose?: (
    event: React.SyntheticEvent<any> | Event,
    reason: SnackbarCloseReason
  ) => void;
};

const AlertComponent: React.FC<Props> = ({
  className,
  open,
  severity,
  message,
  autoHideDuration,
  anchorOrigin,
  onClose,
}) => {
  return (
    <Snackbar
      open={open}
      className={className}
      autoHideDuration={autoHideDuration}
      anchorOrigin={anchorOrigin}
      onClose={onClose}
    >
      <Alert severity={severity}>{message}</Alert>
    </Snackbar>
  );
};
export default AlertComponent;
