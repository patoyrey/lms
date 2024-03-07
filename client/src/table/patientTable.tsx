import { useState } from "react";
import { styled } from "@mui/material/styles";

import AlertComponent from "../views/components/alert";
import ModalComponent from "../views/components/ModalComponent";
import { Box, Collapse, IconButton, Modal, Paper, RadioGroup, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, tableCellClasses } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { DeletePatient, fetchPatientById, getPatientToUpdate, setEditPatient } from "../redux/patientsSlice";
import { useDispatch, useSelector } from "react-redux";
import { setSelectFieldsId } from "../redux/fieldSlice";
import React from "react";
import { RootState } from "../store";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditPatientModal from "../views/pages/component/EditPatientModal";
interface PatientTableProps {
    patientList: any[]
    getAllPatient: () => void
}
const PatientTable: React.FC<PatientTableProps> = ({
    // patients,
    getAllPatient
}) => {
    const [openModal, setOpenModal] = React.useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const [editPatientOpen, setEditPatientOpen] = React.useState(false);


    const [openFields, setopenFields] = React.useState(false);
    const [openIcon, setOpenIcon] = React.useState(false);
    const patient = useSelector((state: RootState) => state.patient);
    const patientLab = useSelector((state: RootState) => state.patient.editPatient);
    const dispatch = useDispatch();
    const handleCloseFields = () => {
        setopenFields(!openFields);
    };
    const handleEditOnChange = (event: any) => {
        const { name, value } = event.target;
        const payload = {
            name,
            value,
        };
        dispatch(setEditPatient(payload));
    };
    const handleEditOnClose = () => {
        setEditPatientOpen(!editPatientOpen);
    };
    const handleUpdate = async () => {

        try {
            const data = {
                patientId: patientLab.patient_id,
                editPatient: patientLab,
            };
            const res = await dispatch(fetchPatientById(data));
            setOpen(true);
            setMessage("Successfully Updated!");
            setSeverity("success");
            getAllPatient();
        } catch {
            setOpen(true);
            setMessage("Failed to Insert");
            setSeverity("error");
        }

    };
    const handleEditButton = (data: any) => {
        console.log(data);
        dispatch(getPatientToUpdate(data));
        handleEditOnClose();
    };
    //SetState of Alert Component
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [severity, setSeverity] = useState<any>("")
    const handleCloseAlert = () => {
        setOpen(false)
    }
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
    const handleDeletePatient = async (patient_id: any) => {

        try {
            const res = await dispatch(DeletePatient(patient_id));
            setOpen(true);
            setMessage("Successfully deleted!");
            setSeverity("success");


            // if (res.payload.succeeded) {
            //     setOpen(true);
            //     setMessage(res.payload.msg);
            //     setSeverity("success");
            // } else {
            //     setOpen(true);
            //     setMessage(res.payload.msg);
            //     setSeverity("error");
            // }
            getAllPatient();
        } catch (error: any) {
            setOpen(true);
            setMessage(error.message);
            setSeverity("error");
        }
    };
    const handleSelectPatientId = (patient_id: string) => {
        dispatch(setSelectFieldsId(patient_id))
        handleCloseFields()
    }
    return (
        <>



            <AlertComponent
                open={open}
                message={message}
                severity={severity}
                autoHideDuration={3000}
                onClose={handleCloseAlert}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            />
            <Paper sx={{ overflow: "auto", maxHeight: "30rem" }} >
                <TableContainer >
                    <Table sx={{ minWidth: 1080 }} size="small" aria-label="table">
                        <TableHead>
                            <TableRow >
                                <StyledTableCell align="left"

                                ></StyledTableCell>
                                <StyledTableCell align="left">First Name</StyledTableCell>
                                <StyledTableCell align="left">Middle Name</StyledTableCell>
                                <StyledTableCell align="left">Last Name</StyledTableCell>
                                <StyledTableCell align="left">Gender</StyledTableCell>
                                <StyledTableCell align="left">Address</StyledTableCell>
                                <StyledTableCell align="left">Company</StyledTableCell>
                                <StyledTableCell align="left">Date of Visit</StyledTableCell>
                                <StyledTableCell align="left">Referred Name</StyledTableCell>
                                <StyledTableCell align="left" >Date of Birth</StyledTableCell>
                                <StyledTableCell align="left">Age</StyledTableCell>
                                <StyledTableCell align="right">Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {patient.patients.map((item: any, index: number) => (
                                <StyledTableRow key={index} >
                                    <StyledTableCell>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={""}
                                        // onChange={ }}
                                        ></RadioGroup>
                                    </StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {item.patient_fname}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{item.patient_mname}</StyledTableCell>
                                    <StyledTableCell align="left">
                                        {item.patient_lname}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {item.patient_gender}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {item.patient_address}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {item.company}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {item.date_of_visit}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {item.referred_name}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {item.patient_dob}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {item.patient_age}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <div className="actions">
                                            {" "}
                                            <EditIcon
                                                style={{ cursor: "pointer", color: "#2196f3" }}
                                                className="pen"
                                                onClick={() => handleEditButton(item)}
                                            />
                                            <DeleteIcon
                                                style={{ cursor: "pointer", color: "#f32121" }}
                                                onClick={() => handleDeletePatient(item.patient_id)}
                                            />

                                        </div>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <EditPatientModal
                open={editPatientOpen}
                handleClose={handleEditOnClose}
                patient={patientLab}
                update={handleUpdate}
                handleOnChange={handleEditOnChange}
            />
        </>
    )
};
export default PatientTable;