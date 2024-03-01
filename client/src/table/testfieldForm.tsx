import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const TestFieldsForm: React.FC = () => {
  const testfields = useSelector((state: RootState) => state.testfield);
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#ccfdd8",
      color: theme.palette.common.black,
      fontWeight: "bold",
      textAlign: "center",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
      textAlign: "center",
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
    <Box>
      <Typography variant="h5" component="h5" style={{ textAlign: "center" }}>
        Laboratory Test Fields
      </Typography>
      <div className="test-span"></div>
      <div className="test-container">
        <p>
          <span> Test Name:</span> {testfields.test_name}
        </p>
        <p>
          <span> Price:</span> {testfields.test_price}
        </p>
        <p>
          <span>Description:</span> {testfields.test_desc}
        </p>
      </div>
      <div className="test-span"></div>
      <div className="testfields-contianer">
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table sx={{ minWidth: 1000 }} stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {" "}
                <StyledTableCell>No.</StyledTableCell>
                <StyledTableCell>Field Name</StyledTableCell>
                <StyledTableCell align="right">Unit</StyledTableCell>
                <StyledTableCell align="right">Male Ref Range</StyledTableCell>
                <StyledTableCell align="right">
                  Female Ref Range
                </StyledTableCell>
                <StyledTableCell align="right">Ref Range</StyledTableCell>
                <StyledTableCell align="right">
                  Desirable Ref Range
                </StyledTableCell>
                <StyledTableCell align="right">
                  Borderlin Ref Range
                </StyledTableCell>
                <StyledTableCell align="right">
                  High Risk Ref Range
                </StyledTableCell>
                <StyledTableCell align="right">Other</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {testfields.field.map((item: any, index: number) => (
                <StyledTableRow key={index}>
                  {" "}
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {item.field_name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{`${item.unit}`}</StyledTableCell>
                  <StyledTableCell align="right">{`${item.maleRefRange}`}</StyledTableCell>
                  <StyledTableCell align="right">{`${item.femaleRefRange}`}</StyledTableCell>
                  <StyledTableCell align="right">{`${item.RefRange}`}</StyledTableCell>
                  <StyledTableCell align="right">
                    {item.DesirableRefRange}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.borderlineRefRange}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {item.highRiskRefRange}
                  </StyledTableCell>
                  <StyledTableCell align="right">{item.other}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};
export default TestFieldsForm;
