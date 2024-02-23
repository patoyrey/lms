import { Alert, AlertTitle, Box, Button, Modal } from "@mui/material";
import React, { useState } from "react";
import Textfield from "../components/textfield";
import ButtonComponent from "../components/button";
import ModalComponent from "../components/ModalComponent";
import { Test } from "../../interface/test";
import { TestService } from "../../services/testService";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import AlertComponent from "../components/alert";

interface StateSnackbar extends SnackbarOrigin {
  open: boolean;
}

const Tests: React.FC = () => {
  const [openSnackAlert, setOpenSnackAlert] = React.useState(false);
  const [openSnackFailAlert, setOpenFailSnackAlert] = React.useState(false);
  const [openSnackNetworkFailAlert, setOpenNetworkFailSnackAlert] =
    React.useState(false);

  const [stateSnackbarAlert, setStateSnackbar] = React.useState<StateSnackbar>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = stateSnackbarAlert;

  const handleCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackAlert(false);
  };

  const handleFailCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenFailSnackAlert(false);
  };

  const handleNetworkFailCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNetworkFailSnackAlert(false);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [search, setSearch] = useState<string>("");
  const [testName, setTestName] = useState<string>("");

  const add = async () => {
    try {
      console.log(" add test button clicked", testName);
      const props = {
        test_name: testName,
      } as unknown as Test;
      const res = await TestService.add(props, "add-test");
      if (res) {
        setOpenSnackAlert(true);
        setTestName("");
      } else {
        alert("Failed to Insert!");
        setOpenFailSnackAlert(true);
        setTestName("");
      }
    } catch (error) {
      setOpenNetworkFailSnackAlert(true);
      setTestName("");
    }
  };
  const searchHandle = () => {
    console.log(" search button clicked");
  };

  return (
    <Box className="left-right-spacing">
      <AlertComponent
        className="alert"
        severity="success"
        open={openSnackAlert}
        autoHideDuration={2000}
        anchorOrigin={{ vertical, horizontal }}
        onClose={handleCloseSnackbar}
        message="Successfully inserted!"
      />
      <AlertComponent
        open={openSnackFailAlert}
        severity="warning"
        message="Failed to insert!"
        autoHideDuration={2000}
        anchorOrigin={{ vertical, horizontal }}
        onClose={handleFailCloseSnackbar}
      />
      <AlertComponent
        open={openSnackNetworkFailAlert}
        severity="warning"
        message="Network Error"
        autoHideDuration={2000}
        anchorOrigin={{ vertical, horizontal }}
        onClose={handleNetworkFailCloseSnackbar}
      />

      <ModalComponent open={open} close={() => handleClose()}>
        <Box>
          <div className="modal">
            <div className="modalStyle">
              <Textfield
                value={testName}
                onchange={(val) => setTestName(val.target.value)}
                type="search"
                placeholder="Test Field"
                variant="outlined"
                size="small"
                required={true}
              />
              <ButtonComponent
                style={{ height: 40 }}
                size="large"
                variant="contained"
                label="Add"
                onclick={() => add()}
              />
            </div>
          </div>
        </Box>
      </ModalComponent>

      <h1>LABORATORY TESTS</h1>
      <br></br>
      <div className="boxes">
        <div className="tests">
          <div className="fields">
            <Textfield
              value={search}
              onchange={(val) => setSearch(val.target.value)}
              placeholder="Search"
              type="search"
              variant="outlined"
              size="small"
              style={{ width: "70%" }}
              required={true}
            />
            <ButtonComponent
              size="medium"
              variant="contained"
              label="Search"
              style={{ height: 40, width: "10%" }}
              onclick={() => searchHandle()}
            />
            <ButtonComponent
              size="medium"
              variant="contained"
              label="Add Test"
              style={{ height: 40, width: "15%" }}
              onclick={() => handleOpen()}
            />
          </div>

          <table>
            <tbody>
              <tr>
                <td>Complete Blood Count</td>
              </tr>
              <tr>
                <td>Urinalysis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Box>
  );
};
export default Tests;
