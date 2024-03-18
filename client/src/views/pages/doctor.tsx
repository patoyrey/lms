import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import {
  Box,
  Paper,
  SnackbarOrigin,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";
import ButtonComponent from "../components/button";
import Textfield from "../components/textfield";
import ModalComponent from "../components/ModalComponent";
import React, { useEffect } from "react";
import { DoctorService } from "../../services/doctorService";
import { Doctor } from "../../interface/doctor";
import {
  clearDoctor,
  deleteDoctorById,
  fetchAllDoctor,
  fetchDoctorById,
  setDoctor,
  setDoctorUpdate,
  setEditDoctor,
} from "../../redux/doctorSlice";
import Patient from "./Patient";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditDoctorModal from "./component/EditDoctorModal";
import AlertComponent from "../components/alert";
interface StateSnackbar extends SnackbarOrigin {
  open: boolean;
}

const Doctors: React.FC = () => {
  const edit_doctor = useSelector(
    (state: RootState) => state.doctor.editDoctor
  ); //update

  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  const [open, setOpen] = React.useState(false);

  const [editModal, setEditModal] = React.useState(false);
  const doctor_info = useSelector((state: RootState) => state.doctor);
  const [openAlert, setAlert] = React.useState(false);
  const handeCloseDeleteAlert = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert(false);
  };
  const [severity, setSeverity] = React.useState<any>("");
  const [message, setMessage] = React.useState<any>("");
  const [openSnackAlert, setOpenSnackAlert] = React.useState(false);
  const [stateSnackbarAlert, setStateSnackbar] = React.useState<StateSnackbar>({
    open: false,
    vertical: "bottom",
    horizontal: "left",
  });
  const { vertical, horizontal } = stateSnackbarAlert;

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#2196f3",
      color: theme.palette.common.white,
      fontWeight: "bold",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  const getAllDoctor = async () => {
    try {
      const res = await dispatch(fetchAllDoctor());
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    const payload = { name, value };

    dispatch(setDoctor(payload));
  };

  const handleDelete = async (doctorId: any) => {
    const res = await dispatch(deleteDoctorById(doctorId));
    setAlert(true);
    setSeverity("success");
    setMessage("Successfully Deleted!");
    getAllDoctor();
  };

  const handleEdit = (data: any) => {
    console.log("Handle Edit: ", data);
    dispatch(setDoctorUpdate(data));
    setEditModal(true);
  };

  const handleUpdate = async () => {
    const data = {
      doctorId: edit_doctor.doc_id,
      editDoctor: edit_doctor,
    };
    const res = await dispatch(fetchDoctorById(data));
    setAlert(true);
    setSeverity("success");
    setMessage("Updated Successfully!");
    setEditModal(false);
    getAllDoctor();
  };

  const handleEditModalOnClose = () => {
    setEditModal(!editModal);
  };

  const handleEditOnChange = (event: any) => {
    const { name, value } = event.target;
    const payload = {
      name,
      value,
    };
    dispatch(setEditDoctor(payload));
  };

  const add = async () => {
    try {
      const res = await DoctorService.add(
        doctor_info.doctor_info as unknown as Doctor,
        "add-doctor"
      );

      if (res) {
        setAlert(true);
        setSeverity("success");
        setMessage("Successfully Added!");
        setOpen(false);
        getAllDoctor();
        dispatch(clearDoctor());
        setOpen(false);
      }
    } catch (error) {
      console.log("Error Inserting New Doctor: ", error);
      setMessage("Process Unsuccessful");
      setSeverity("error");
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

  useEffect(() => {
    getAllDoctor();
  }, []);

  return (
    <div className="user-container">
      <div className="homepage-content">
        <div className="patients-container">
          <div className="doctor-header-container">
            <Typography
              variant="h5"
              display="block"
              gutterBottom
              sx={{ fontFamily: "Poppins" }}
            >
              Doctor's Information List
            </Typography>
            <Textfield
              value=""
              onchange={(e) => console.log(e.target.value)}
              placeholder="Search"
              type="search"
              variant="outlined"
              size="small"
              style={{ width: "50%" }}
              required={true}
            />
            <ButtonComponent
              size="medium"
              variant="contained"
              label="Search"
              onclick={() => console.log("Click Search Button")}
              color="primary"
            />
            <ButtonComponent
              color="primary"
              size="medium"
              variant="contained"
              label="Add Doctor"
              onclick={() => handleOpen()}
            />
          </div>

          <EditDoctorModal
            open={editModal}
            handleClose={handleEditModalOnClose}
            doctor={edit_doctor}
            update={handleUpdate}
            handleOnChange={handleEditOnChange}
          />

          {/* <AlertComponent
            open={open}
            message={message}
            severity={severity}
            autoHideDuration={3000}
            onClose={handleCloseSnackbar}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          /> */}
          <AlertComponent
            open={openAlert}
            severity={severity}
            message={message}
            autoHideDuration={2000}
            anchorOrigin={{ vertical, horizontal }}
            onClose={handeCloseDeleteAlert}
          />

          {/* ADD NEW DOCTOR MODAL */}
          <ModalComponent open={open} close={() => handleClose()}>
            <Box>
              <div className="modal">
                {" "}
                <div className="modalStyle">
                  <div className="patient-ref-container">
                    <Typography
                      variant="h6"
                      display="block"
                      sx={{ mb: 2 }}
                      gutterBottom
                    >
                      <div className="header-text">
                        <p
                          style={{
                            fontSize: "px",
                            fontWeight: "bold",
                            fontStyle: "Poppins",
                          }}
                        >
                          Doctor's Information
                        </p>
                      </div>
                    </Typography>
                    <div className="doctor-modal">
                      <div>
                        <Typography
                          variant="body2"
                          display="block"
                          gutterBottom
                        >
                          Given Name :
                        </Typography>
                        <Textfield
                          value={doctor_info.doctor_info.doc_fname}
                          type="text"
                          variant="outlined"
                          name="doc_fname"
                          onchange={(val) => handleOnChange(val)}
                          required={true}
                        />
                      </div>

                      <div>
                        <Typography
                          variant="body2"
                          display="block"
                          gutterBottom
                        >
                          Middle Name :
                        </Typography>
                        <Textfield
                          value={doctor_info.doctor_info.doc_mname}
                          onchange={(val) => handleOnChange(val)}
                          type="text"
                          variant="outlined"
                          name="doc_mname"
                          required={true}
                        />
                      </div>
                      <div>
                        <Typography
                          variant="body2"
                          display="block"
                          gutterBottom
                        >
                          Last Name :
                        </Typography>
                        <Textfield
                          value={doctor_info.doctor_info.doc_lname}
                          onchange={(val) => handleOnChange(val)}
                          type="text"
                          variant="outlined"
                          name="doc_lname"
                          required={true}
                        />
                      </div>

                      <div>
                        <Typography
                          variant="body2"
                          display="block"
                          gutterBottom
                        >
                          Specialization :
                        </Typography>
                        <Textfield
                          value={doctor_info.doctor_info.doc_specialization}
                          onchange={(val) => handleOnChange(val)}
                          type="text"
                          variant="outlined"
                          name="doc_specialization"
                          required={true}
                        />
                      </div>

                      <div>
                        <Typography
                          variant="body2"
                          display="block"
                          gutterBottom
                        >
                          PRC No:
                        </Typography>
                        <Textfield
                          value={doctor_info.doctor_info.doc_prc_no}
                          onchange={(val) => handleOnChange(val)}
                          type="text"
                          variant="outlined"
                          name="doc_prc_no"
                          required={true}
                        />
                      </div>

                      <div>
                        {" "}
                        <Typography
                          variant="body2"
                          display="block"
                          gutterBottom
                        >
                          PhilHealth ID No.:
                        </Typography>
                        <Textfield
                          value={doctor_info.doctor_info.doc_philhealth_no}
                          onchange={(val) => handleOnChange(val)}
                          type="text"
                          variant="outlined"
                          name="doc_philhealth_no"
                          required={true}
                        />
                      </div>

                      <div>
                        {" "}
                        <Typography
                          variant="body2"
                          display="block"
                          gutterBottom
                        >
                          TIN No :
                        </Typography>
                        <Textfield
                          value={doctor_info.doctor_info.doc_tin_no}
                          onchange={(val) => handleOnChange(val)}
                          type="text"
                          variant="outlined"
                          name="doc_tin_no"
                          required={true}
                        />
                      </div>

                      <div>
                        {" "}
                        <Typography
                          variant="body2"
                          display="block"
                          gutterBottom
                        >
                          Room Number :
                        </Typography>
                        <Textfield
                          value={doctor_info.doctor_info.doc_room_no}
                          type="text"
                          variant="outlined"
                          name="doc_room_no"
                          onchange={(val) => handleOnChange(val)}
                          required={true}
                        />
                      </div>

                      <div>
                        {" "}
                        <Typography
                          variant="body2"
                          display="block"
                          gutterBottom
                        >
                          Schedule :
                        </Typography>
                        <Textfield
                          value={doctor_info.doctor_info.doc_schedule}
                          onchange={(val) => handleOnChange(val)}
                          type="text"
                          variant="outlined"
                          name="doc_schedule"
                          required={true}
                        />
                      </div>
                      <div>
                        {" "}
                        <Typography
                          variant="body2"
                          display="block"
                          gutterBottom
                        >
                          Phone Number :
                        </Typography>
                        <Textfield
                          value={doctor_info.doctor_info.doc_phone}
                          onchange={(val) => handleOnChange(val)}
                          type="text"
                          variant="outlined"
                          name="doc_phone"
                          required={true}
                        />
                      </div>
                      <div>
                        {" "}
                        <Typography
                          variant="body2"
                          display="block"
                          gutterBottom
                        >
                          Email :
                        </Typography>
                        <Textfield
                          value={doctor_info.doctor_info.doc_email}
                          onchange={(val) => handleOnChange(val)}
                          type="text"
                          variant="outlined"
                          name="doc_email"
                          required={true}
                        />
                      </div>
                      <div>
                        {" "}
                        <Typography
                          variant="body2"
                          display="block"
                          gutterBottom
                        >
                          Price :
                        </Typography>
                        <Textfield
                          value={doctor_info.doctor_info.doc_price}
                          onchange={(val) => handleOnChange(val)}
                          type="text"
                          variant="outlined"
                          name="doc_price"
                          required={true}
                        />
                      </div>
                      <div>
                        {" "}
                        <Typography
                          variant="body2"
                          display="block"
                          gutterBottom
                        >
                          Status :
                        </Typography>
                        <Textfield
                          value={doctor_info.doctor_info.doc_status}
                          onchange={(val) => handleOnChange(val)}
                          type="text"
                          variant="outlined"
                          name="doc_status"
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
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 400 }}
              stickyHeader
              aria-label="sticky table"
              size="small"
            >
              <TableHead sx={{ backgroundColor: "#ccfdd8" }}>
                <TableRow>
                  <StyledTableCell>First Name</StyledTableCell>
                  <StyledTableCell>Middle Name</StyledTableCell>
                  <StyledTableCell>Last Name</StyledTableCell>
                  {/* <StyledTableCell>Gender</StyledTableCell> */}
                  <StyledTableCell>Specialization</StyledTableCell>
                  <StyledTableCell>PRC No.</StyledTableCell>
                  <StyledTableCell>PhilHealth No.</StyledTableCell>
                  <StyledTableCell>TIN No.</StyledTableCell>
                  <StyledTableCell>Room No:</StyledTableCell>
                  <StyledTableCell>Schedule</StyledTableCell>
                  <StyledTableCell>Phone</StyledTableCell>
                  <StyledTableCell>Email</StyledTableCell>
                  <StyledTableCell>Price</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                  <StyledTableCell>Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {doctor_info.doctor.map((item: any, index: number) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.doc_fname}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.doc_mname}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.doc_lname}
                    </TableCell>
                    {/* <TableCell component="th" scope="row">
                      {item.doc_gender}
                    </TableCell> */}
                    <TableCell component="th" scope="row">
                      {item.doc_specialization}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.doc_prc_no}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.doc_philhealth_no}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.doc_tin_no}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.doc_room_no}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.doc_schedule}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.doc_phone}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.doc_email}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.doc_price}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.doc_status}
                    </TableCell>
                    <TableCell>
                      <div className="fieldActions">
                        {" "}
                        <EditIcon
                          style={{ cursor: "pointer" }}
                          onClick={() => handleEdit(item)}
                        />
                        <DeleteIcon
                          style={{ color: "red", cursor: "pointer" }}
                          onClick={() => handleDelete(item.doc_id)}
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
  );
};
export default Doctors;
