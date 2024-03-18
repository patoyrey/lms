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
  styled,
  tableCellClasses,
} from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import ButtonComponent from "../views/components/button";
import Textfield from "../views/components/textfield";

const ViewReceiptForm: React.FC = () => {
  const patient = useSelector((state: RootState) => state.patient);
  const test = useSelector((state: RootState) => state.test);
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

  return (
    <div className="receipt-container">
      <h2>Patient's Information</h2>
      <div className="breaker"></div>
      <div className="receipt-content">
        <div className="patient-details">
          <p>Fullname:</p>
          <p>
            {patient.patient_lab.patient_fname}{" "}
            {patient.patient_lab.patient_mname}{" "}
            {patient.patient_lab.patient_lname}
          </p>
        </div>
        <div className="patient-details">
          {" "}
          <p>Gender: </p> <p>{patient.patient_lab.patient_gender} </p>
        </div>
        <div className="patient-details">
          {" "}
          <p>Age: </p>
          <p>{patient.patient_lab.patient_age} </p>
        </div>
        <div className="patient-details">
          {" "}
          <p>Address: </p>
          <p>{patient.patient_lab.patient_address} </p>
        </div>
        <div className="patient-details">
          {" "}
          <p>Referred Name: </p> <p> {patient.patient_lab.referred_name} </p>
        </div>
        <div className="patient-details">
          <p>Company: </p> <p> {patient.patient_lab.company} </p>
        </div>
        <div className="patient-details">
          {" "}
          <p>Date Of Birth: </p> <p> {patient.patient_lab.patient_dob} </p>
        </div>
        <div className="patient-details">
          {" "}
          <p>Date Of Visit: </p> <p> {patient.patient_lab.date_of_visit} </p>
        </div>
      </div>
      <div className="breaker"></div>
      <h2>Laboratory Test</h2>
      <Paper>
        <TableContainer sx={{ maxHeight: 420 }}>
          <Table
            sx={{ minWidth: 700 }}
            stickyHeader
            aria-label="sticky table"
            size="small"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell>Test Name</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
                <StyledTableCell align="right">Description</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {patient.patient_labTest.test_id.map(
                (item: any, index: number) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {item.test_name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{`₱ ${item.test_price}`}</StyledTableCell>
                    <StyledTableCell align="right">
                      {item.test_desc}
                    </StyledTableCell>
                  </StyledTableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};
export default ViewReceiptForm;
