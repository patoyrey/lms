import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

interface StateSnackbar extends SnackbarOrigin {
  open: boolean;
}

export default function PositionedSnackbar() {
  const [stateSnackbar, setStateSnackbar] = React.useState<StateSnackbar>({
    open: false,
    vertical: "bottom",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = stateSnackbar;

  const handleClickSnackbar = (newState: SnackbarOrigin) => () => {
    setStateSnackbar({ ...newState, open: true });
  };

  const handleCloseSnackbar = () => {
    setStateSnackbar({ ...stateSnackbar, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleClickSnackbar({
            vertical: "top",
            horizontal: "center",
          })}
        >
          Top-Center
        </Button>
      </Box>
    </React.Fragment>
  );

  return (
    <Box sx={{ width: 500 }}>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={1000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          //   onClose={handleCloseSnackbar}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Successful!
        </Alert>
      </Snackbar>
    </Box>
  );
}
