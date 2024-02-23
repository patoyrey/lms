import { Alert, Box, Button, Modal } from "@mui/material";
import React, { useState } from "react";
import Textfield from "../components/textfield";
import ButtonComponent from "../components/button";
import ModalComponent from "../components/ModalComponent";
import { FieldService } from "../../services/fieldservice";
import { Field } from "../../interface/field";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";
import AlertComponent from "../components/alert";

interface StateSnackbar extends SnackbarOrigin {
  open: boolean;
}

const Fields: React.FC = () => {
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

  //modal
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [search, setSearch] = useState<string>("");
  const [fieldName, setFieldName] = useState<string>("");

  const add = async () => {
    try {
      console.log(" add field button clicked", fieldName);
      const props = {
        field_name: fieldName,
      } as unknown as Field;

      const res = await FieldService.add(props, "add-fields");
      if (res) {
        setOpenSnackAlert(true);
        setFieldName("");
      } else {
        alert("Failed to Insert!");
        setOpenFailSnackAlert(true);
        setFieldName("");
      }
    } catch (error) {
      setOpenNetworkFailSnackAlert(true);
      setFieldName("");
    }
  };
  const searchHandle = () => {
    console.log("Search button clicked");
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
                value={fieldName}
                onchange={(val) => setFieldName(val.target.value)}
                type="search"
                placeholder="Field Name"
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
      <h1>LABORATORY FIELDS</h1>
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
              label="Add Field"
              style={{ height: 40, width: "15%" }}
              onclick={() => handleOpen()}
            />
          </div>
        </div>
      </div>
    </Box>
  );
};
export default Fields;
