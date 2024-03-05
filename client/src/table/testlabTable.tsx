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
import React, { useEffect, useState } from "react";
import { setSelectedTestID } from "../redux/fieldSlice";
import ModalComponent from "../views/components/ModalComponent";
import FieldsTable from "./fiedlsTable";
import { Box, Typography } from "@mui/material";
import ButtonComponent from "../views/components/button";
import {
  AddTestFields,
  DeleteTest,
  UpdateTest,
  getTestToUpdate,
  setTestId,
  setTestUpdate,
} from "../redux/testSlice";
import { TestFields } from "../services/testfields";
import { fetchAllTestFiedls } from "../redux/testfieldSlice";
import TestFieldsForm from "./testfieldForm";
import Textfield from "../views/components/textfield";
import AlertComponent from "../views/components/alert";

interface TestLabTableProps {
  testlab: any[];
  getAllLabTest: () => void;
}
const TestLabTable: React.FC<TestLabTableProps> = ({
  testlab,
  getAllLabTest,
}) => {
  const field = useSelector((state: RootState) => state.field);
  const testfield = useSelector((state: RootState) => state.testfield);
  const [openTestFields, setopenTestFields] = useState(false);
  const test = useSelector((state: RootState) => state.test);
  const dispatch = useDispatch();
  const [openFields, setopenFields] = React.useState(false);
  const [updateTest, setUpdateTest] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<any>("");
  const [focusRows, setFocusRows] = useState<{ [key: string]: boolean }>({});
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
  const handleSelectTestId = (test_id: string) => {
    dispatch(setSelectedTestID(test_id));
    handleCloseFields();
  };
  const handleCloseFields = () => {
    setopenFields(!openFields);
  };
  const handleUpdateTest = (item: any) => {
    dispatch(getTestToUpdate(item));
    setUpdateTest(true);
  };
  const handleCloseUpdateTest = () => {
    setUpdateTest(false);
  };

  const handleTestFields = () => {
    setopenTestFields(!openTestFields);
  };
  const handleSubmitTestFields = async () => {
    await dispatch(AddTestFields(field.test_fields));
  };

  const handleViewTestFields = async (test_id: string) => {
    dispatch(setTestId(test_id));
    const res = await dispatch(fetchAllTestFiedls(test_id));
    let tempFocusRow = {} as { [key: string]: boolean };
    console.log("Lab Tes", res);
    res.payload.field.forEach((field: any) => {
      tempFocusRow = { ...tempFocusRow, [field.testfields_id]: false };
    });
    setFocusRows(tempFocusRow);
    handleTestFields();
  };

  const handleOnChange = (event: any) => {
    const { name, value } = event.target;

    const payload = {
      name,
      value,
    };

    dispatch(setTestUpdate(payload));
  };
  const handleUpdateTestData = async () => {
    await dispatch(UpdateTest(test.test_update));
    getAllLabTest();
  };

  const handleDeleteTest = async (test_id: any) => {
    try {
      const res = await dispatch(DeleteTest(test_id));
      console.log("Handle Delete", res);

      if (res.payload.succeeded) {
        setOpen(true);
        setMessage(res.payload.msg);
        setSeverity("success");
      } else {
        setOpen(true);
        setMessage(res.payload.msg);
        setSeverity("error");
      }
      getAllLabTest();
    } catch (error: any) {
      setOpen(true);
      setMessage(error.message);
      setSeverity("error");
    }
  };

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
      <ModalComponent open={updateTest} close={() => handleCloseUpdateTest()}>
        <Box>
          <div className="modal ">
            <div className="modalStyle fields-modal">
              <div>
                <Typography variant="body2" display="block" gutterBottom>
                  Test Name:
                </Typography>
                <Textfield
                  value={test.test_update.test_name}
                  type="text"
                  onchange={handleOnChange}
                  name="test_name"
                />
              </div>
              <div>
                <Typography variant="body2" display="block" gutterBottom>
                  Description:
                </Typography>
                <Textfield
                  value={test.test_update.test_desc}
                  type="text"
                  onchange={handleOnChange}
                  name="test_desc"
                />
              </div>
              <div>
                <Typography variant="body2" display="block" gutterBottom>
                  Price:
                </Typography>
                <Textfield
                  value={test.test_update.test_price}
                  type="number"
                  onchange={handleOnChange}
                  name="test_price"
                />
              </div>

              <ButtonComponent
                size="medium"
                variant="outlined"
                label="Submit"
                style={{ height: 40, width: "50%" }}
                onclick={() => handleUpdateTestData()}
                color="primary"
              />
            </div>
          </div>
        </Box>
      </ModalComponent>
      <ModalComponent open={openTestFields} close={() => handleTestFields()}>
        <Box>
          <div className="modal ">
            <div className="modalStyle fields-modal">
              <TestFieldsForm row={focusRows} />
            </div>
          </div>
        </Box>
      </ModalComponent>
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
                      <EditIcon
                        style={{ cursor: "pointer", color: "#2196f3" }}
                        className="pen"
                        onClick={() => handleUpdateTest(item)}
                      />
                      <DeleteIcon
                        style={{ cursor: "pointer", color: "#f32121" }}
                        onClick={() => handleDeleteTest(item.test_id)}
                      />
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
