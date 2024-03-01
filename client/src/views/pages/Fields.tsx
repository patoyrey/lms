import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import Textfield from "../components/textfield";
import ButtonComponent from "../components/button";
import ModalComponent from "../components/ModalComponent";
import { FieldService } from "../../services/fieldservice";

import { SnackbarOrigin } from "@mui/material/Snackbar";
import AlertComponent from "../components/alert";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { clearField, fetchAllField, setField } from "../../redux/fieldSlice";
import { Field } from "../../interface/field";

interface StateSnackbar extends SnackbarOrigin {
  open: boolean;
}

const Fields: React.FC = () => {
  const [openSnackAlert, setOpenSnackAlert] = React.useState(false);
  const [openSnackFailAlert, setOpenFailSnackAlert] = React.useState(false);
  const fields = useSelector((state: RootState) => state.field);
  const dispatch = useDispatch();
  const [openSnackNetworkFailAlert, setOpenNetworkFailSnackAlert] =
    React.useState(false);

  const [stateSnackbarAlert, setStateSnackbar] = React.useState<StateSnackbar>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = stateSnackbarAlert;

  const getAllField = async () => {
    try {
      const res = await dispatch(fetchAllField());

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

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

  const handleOnChange = (event: any) => {
    const { name, value } = event.target;
    const payload = {
      name,
      value,
    };
    dispatch(setField(payload));
  };

  const add = async () => {
    try {
      const res = await FieldService.add(
        fields.Field_lab as unknown as Field,
        "add-fields"
      );
      if (res) {
        setOpenSnackAlert(true);
        dispatch(clearField());
        console.log(fields);
        getAllField();
      } else {
        setOpenFailSnackAlert(true);
      }
    } catch (error) {
      setOpenNetworkFailSnackAlert(true);
    }
  };
  const searchHandle = () => {
    console.log("Search button clicked");
  };

  useEffect(() => {
    getAllField();
  }, []);
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
            {" "}
            <div className="modalStyle">
              <div className="patient-ref-container">
                {" "}
                <Typography
                  variant="h6"
                  display="block"
                  sx={{ mb: 2 }}
                  gutterBottom
                >
                  Adding Fields
                </Typography>
                <div className="patient-ref">
                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Field Name :
                    </Typography>
                    <Textfield
                      value={fields.Field_lab.field_name}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="field_name"
                      size="small"
                      required={true}
                    />
                  </div>

                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Unit :
                    </Typography>
                    <Textfield
                      value={fields.Field_lab.unit}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="unit"
                      size="small"
                      required={true}
                    />
                  </div>
                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Male Reference Range :
                    </Typography>
                    <Textfield
                      value={fields.Field_lab.maleRefRange}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="maleRefRange"
                      size="small"
                      required={true}
                    />
                  </div>

                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Female Reference Range :
                    </Typography>
                    <Textfield
                      value={fields.Field_lab.femaleRefRange}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="femaleRefRange"
                      size="small"
                      required={true}
                    />
                  </div>

                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Reference Range :
                    </Typography>
                    <Textfield
                      value={fields.Field_lab.RefRange}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="RefRange"
                      size="small"
                      required={true}
                    />
                  </div>

                  <div>
                    {" "}
                    <Typography variant="body2" display="block" gutterBottom>
                      Desirable Reference Range :
                    </Typography>
                    <Textfield
                      value={fields.Field_lab.DesirableRefRange}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="DesirableRefRange"
                      size="small"
                      required={true}
                    />
                  </div>

                  <div>
                    {" "}
                    <Typography variant="body2" display="block" gutterBottom>
                      Borderline Reference Range :
                    </Typography>
                    <Textfield
                      value={fields.Field_lab.borderlineRefRange}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="borderlineRefRange"
                      size="small"
                      required={true}
                    />
                  </div>

                  <div>
                    {" "}
                    <Typography variant="body2" display="block" gutterBottom>
                      High Risk Reference Range :
                    </Typography>
                    <Textfield
                      value={fields.Field_lab.highRiskRefRange}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="highRiskRefRange"
                      size="small"
                      required={true}
                    />
                  </div>

                  <div>
                    {" "}
                    <Typography variant="body2" display="block" gutterBottom>
                      Other :
                    </Typography>
                    <Textfield
                      value={fields.Field_lab.other}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="other"
                      size="small"
                      required={true}
                    />
                  </div>
                </div>
              </div>
              <ButtonComponent
                style={{ height: 40, width: "10rem" }}
                size="large"
                variant="contained"
                label="Add"
                onclick={() => add()}
                color="primary"
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
              value=""
              onchange={(e) => console.log(e.target.value)}
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
              color="secondary"
            />
            <ButtonComponent
              size="medium"
              variant="contained"
              label="Add Field"
              style={{ height: 40, width: "15%" }}
              onclick={() => handleOpen()}
              color="primary"
            />
          </div>
        </div>
      </div>
    </Box>
  );
};
export default Fields;
