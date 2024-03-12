import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import React, { useEffect, useState } from "react";
import { setSelectedTestID } from "../redux/fieldSlice";
import ModalComponent from "../views/components/ModalComponent";
import FieldsTable from "./fiedlsTable";
import { Box, Checkbox, Typography } from "@mui/material";
import ButtonComponent from "../views/components/button";
import {
  AddTestFields,
  DeleteTest,
  UpdateTest,
  getTestToUpdate,
  // setSelectTestId,
  setTestUpdate,
} from "../redux/testSlice";
import { fetchAllTestFiedls } from "../redux/testfieldSlice";
import TestFieldsForm from "./testfieldForm";
import Textfield from "../views/components/textfield";
import AlertComponent from "../views/components/alert";
import { setSelectTestId } from "../redux/patientsSlice";
import { Stream } from "@mui/icons-material";

interface TestPatientTableProps {
  testlab: any[];
  getAllLabTest: () => void;
}
const PatientTestTable: React.FC<TestPatientTableProps> = ({
  testlab,
  getAllLabTest,
}) => {
  const patient = useSelector((state: RootState) => state.patient);

  const [openTestFields, setopenTestFields] = useState(false);
  const dispatch = useDispatch();
  const [openFields, setopenFields] = React.useState(false);
  const [updateTest, setUpdateTest] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<any>("");
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
  // const handleCheckTest = (test_id: string) => {
  //     dispatch(setSelectTestId(test_id));

  // };
  const handleCheckTest = (test_id: string, index: number, item: any) => {
    const payload = {
      test_id,
      index,
      item,
    };
    dispatch(setSelectTestId(payload));
  };
  useEffect(() => {
    console.log(patient.patient_labTest.test_id);
    console.log("LabTest Id", patient.patient_labTest.test_id);
  }, [patient]);

  //NOT SURE

  const handleCloseAlert = () => {
    setOpen(false);
  };
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
      <Paper style={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table
            sx={{ minWidth: 400 }}
            stickyHeader
            aria-label="sticky table"
            size="small"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Action</StyledTableCell>
                <StyledTableCell align="left">Test Name</StyledTableCell>
                <StyledTableCell align="left">Price</StyledTableCell>
                <StyledTableCell align="left">Description</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {testlab.map((item: any, index: number) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="left">
                    <Checkbox
                      onClick={() => handleCheckTest(item.test_id, index, item)}
                      checked={patient.patient_labTest.test_id.some(
                        (obj: any) => obj.test_id === item.test_id
                      )}
                    />
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {item.test_name}
                  </StyledTableCell>
                  <StyledTableCell align="left">{`₱ ${item.test_price}`}</StyledTableCell>
                  <StyledTableCell align="left">
                    {item.test_desc}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default PatientTestTable;
