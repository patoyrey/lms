import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { RootState } from "../store";
import React from "react";
import { setSelectedTestID } from "../redux/fieldSlice";
import ModalComponent from "../views/components/ModalComponent";
import FieldsTable from "./fiedlsTable";
import { Box } from "@mui/material";
import ButtonComponent from "../views/components/button";
import { AddTestFields, fetchAllTestFiedls } from "../redux/testSlice";
import { TestFields } from "../services/testfields";

interface TestLabTableProps {
  testlab: any[];
}
const TestLabTable: React.FC<TestLabTableProps> = ({ testlab }) => {
  const field = useSelector((state: RootState) => state.field);
  const dispatch = useDispatch();
  const [openFields, setopenFields] = React.useState(false);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#2196f3",
      color: theme.palette.common.white,
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
  const handleSelectTestId = (test_id: string) => {
    dispatch(setSelectedTestID(test_id));
    handleCloseFields();
  };
  const handleCloseFields = () => {
    setopenFields(!openFields);
  };
  const handleSubmitTestFields = async () => {
    const res = await dispatch(AddTestFields(field.test_fields));

    console.log(res);
  };

  const handleViewTestFields = async (test_id: string) => {
    const res = await dispatch(fetchAllTestFiedls(test_id));

    console.log(res);
  };

  return (
    <>
      <ModalComponent open={openFields} close={() => handleCloseFields()}>
        <Box>
          <div className="modal ">
            <div className="modalStyle fields-modal">
              <FieldsTable />
              <ButtonComponent
                size="medium"
                variant="contained"
                label="Submit"
                style={{ height: 40, width: "50%" }}
                onclick={() => handleSubmitTestFields()}
                color="primary"
              />
            </div>
          </div>
        </Box>
      </ModalComponent>
      <Paper>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table sx={{ minWidth: 700 }} stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Test Name</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
                <StyledTableCell align="right">Description</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {testlab.map((item: any, index: number) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {item.test_name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{`₱ ${item.test_price}`}</StyledTableCell>
                  <StyledTableCell align="right">
                    {item.test_desc}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <div className="actions">
                      {" "}
                      <EditIcon style={{ cursor: "pointer" }} />
                      <DeleteIcon style={{ cursor: "pointer" }} />
                      <AddIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => handleSelectTestId(item.test_id)}
                      />
                      <RemoveRedEyeIcon
                        style={{ cursor: "pointer" }}
                        onClick={() => handleViewTestFields(item.test_id)}
                      />
                    </div>
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

export default TestLabTable;
