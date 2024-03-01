import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import Textfield from "../components/textfield";
import ButtonComponent from "../components/button";
import ModalComponent from "../components/ModalComponent";
import { FieldService } from "../../services/fieldservice";

import { SnackbarOrigin } from "@mui/material/Snackbar";
import AlertComponent from "../components/alert";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import fieldSlice, {
  clearField,
  deleteFieldById,
  fetchAllField,
  fetchFieldById,
  setEditField,
  setField,
  setFieldData,
} from "../../redux/fieldSlice";
import { Field } from "../../interface/field";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditFieldModal from "./component/EditFieldModal";
import { SettingsVoiceRounded } from "@mui/icons-material";

interface StateSnackbar extends SnackbarOrigin {
  open: boolean;
}

const Fields: React.FC = () => {
  const field = useSelector((state: RootState) => state.field);
  const [openSnackAlert, setOpenSnackAlert] = React.useState(false);
  const [openSnackFailAlert, setOpenFailSnackAlert] = React.useState(false);
  const [severity, setSeverity] = React.useState<any>("");
  const [message, setMessage] = React.useState<any>("");
  const fields = useSelector((state: RootState) => state.field); //insert
  const fieldLab = useSelector((state: RootState) => state.field.editField); //update
  const dispatch = useDispatch();
  const [openSnackNetworkFailAlert, setOpenNetworkFailSnackAlert] =
    React.useState(false);

  const [openDeleteAlert, setOpenDeleteAlert] = React.useState(false);
  const handeCloseDeleteAlert = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenDeleteAlert(false);
  };

  const [stateSnackbarAlert, setStateSnackbar] = React.useState<StateSnackbar>({
    open: false,
    vertical: "bottom",
    horizontal: "left",
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
  const [editFieldOpen, setEditFieldOpen] = React.useState(false);

  //edit button
  const handleEditButton = (data: any) => {
    console.log(data);
    dispatch(setFieldData(data));
    handleEditOnClose();
  };
  const handleEditOnClose = () => {
    setEditFieldOpen(!editFieldOpen);
  };
  const handleUpdate = async () => {
    const data = {
      fieldId: fieldLab.field_id,
      editField: fieldLab,
    };
    // console.log(data);
    const res = await dispatch(fetchFieldById(data));
    getAllField();
    // console.log(fieldLab);
    // getAllField();
  };

  const handleDelete = async (fieldId: any) => {
    const res = await dispatch(deleteFieldById(fieldId));
    setOpenDeleteAlert(true);
    setSeverity("success");
    setMessage("Successfully Deleted!");
    getAllField();
  };

  const handleEditOnChange = (event: any) => {
    const { name, value } = event.target;
    const payload = {
      name,
      value,
    };
    dispatch(setEditField(payload));
  };

  //this handles the open and close state of the modal
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
        fields.field_lab as unknown as Field,
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

  //not being used
  const searchHandle = () => {
    console.log("Search button clicked");
  };

  //autorefreshes the table fields
  useEffect(() => {
    getAllField();
  }, []);

  return (
    <Box className="left-right-spacing">
      {/* alerts */}
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
      <AlertComponent
        open={openDeleteAlert}
        severity={severity}
        message={message}
        autoHideDuration={2000}
        anchorOrigin={{ vertical, horizontal }}
        onClose={handeCloseDeleteAlert}
      />
      {/* end of alerts */}

      {/* edit */}
      <EditFieldModal
        open={editFieldOpen}
        handleClose={handleEditOnClose}
        field={fieldLab}
        update={handleUpdate}
        handleOnChange={handleEditOnChange}
      />
      {/* end of edit */}

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
                      value={fields.field_lab.field_name}
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
                      value={fields.field_lab.unit}
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
                      value={fields.field_lab.maleRefRange}
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
                      value={fields.field_lab.femaleRefRange}
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
                      value={fields.field_lab.RefRange}
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
                      value={fields.field_lab.DesirableRefRange}
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
                      value={fields.field_lab.borderlineRefRange}
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
                      value={fields.field_lab.highRiskRefRange}
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
                      value={fields.field_lab.other}
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

      <br></br>
      <div className="boxes">
        <div className="tests">
          <h1>LABORATORY FIELDS</h1>
          <div className="fields">
            <ButtonComponent
              size="medium"
              variant="contained"
              label="Add Field"
              style={{ height: 40, width: "15%" }}
              onclick={() => handleOpen()}
              color="primary"
            />

            <div>
              {" "}
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 1080 }} size="small" aria-label="table">
                  <TableHead sx={{ backgroundColor: "#ccfdd8" }}>
                    <TableRow>
                      <TableCell>Field Name</TableCell>
                      <TableCell align="center">Unit</TableCell>
                      <TableCell align="center">Male Ref Range</TableCell>
                      <TableCell align="center">Female Ref Range</TableCell>
                      <TableCell align="center">Ref Range</TableCell>
                      <TableCell align="center">
                        Desirable Reference Range
                      </TableCell>
                      <TableCell align="center">
                        Borderline Reference Range
                      </TableCell>
                      <TableCell align="center">
                        High Risk Reference Range
                      </TableCell>
                      <TableCell align="center">Other</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {field.field.map((item: any, index: number) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {item.field_name}
                        </TableCell>
                        <TableCell align="center" sx={{ minWidth: 100 }}>
                          {item.unit}
                        </TableCell>
                        <TableCell align="center">
                          {item.maleRefRange}
                        </TableCell>
                        <TableCell align="center">
                          {item.femaleRefRange}
                        </TableCell>
                        <TableCell align="center">{item.RefRange}</TableCell>
                        <TableCell align="center">
                          {item.DesirableRefRange}
                        </TableCell>
                        <TableCell align="center">
                          {item.borderlineRefRange}
                        </TableCell>
                        <TableCell align="center">
                          {item.highRiskRefRange}
                        </TableCell>
                        <TableCell align="center">{item.other}</TableCell>
                        <TableCell align="center">
                          <div className="fieldActions">
                            {" "}
                            <EditIcon
                              style={{ cursor: "pointer" }}
                              onClick={() => handleEditButton(item)}
                            />
                            <DeleteIcon
                              style={{ color: "red", cursor: "pointer" }}
                              onClick={() => handleDelete(item.field_id)}
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};
export default Fields;
