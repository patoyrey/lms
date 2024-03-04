import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import {
  fetchAllTestFiedls,
  setRowsInput,
  sortTestFields,
} from "../redux/testfieldSlice";
import TextInput from "../views/components/textfield";
import { ChangeEvent, useRef, useState } from "react";
import e from "express";
const TestFieldsForm: React.FC = () => {
  const testfields = useSelector((state: RootState) => state.testfield);
  const test = useSelector((state: RootState) => state.test);
  const [value, setValue] = useState<any>({ value: "", index: "" });
  const dispatch = useDispatch();
  const refs: any = {};
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

  const handleDown = async (index: number) => {
    const currentData = testfields.field[index];
    const nextData = testfields.field[index + 1];

    const props = {
      currentData,
      nextData,
    };
    await dispatch(sortTestFields(props));

    await dispatch(fetchAllTestFiedls(test.test_id));
  };
  const handleUp = async (index: number) => {
    const currentData = testfields.field[index];
    const nextData = testfields.field[index - 1];

    const props = {
      currentData,
      nextData,
    };
    await dispatch(sortTestFields(props));

    await dispatch(fetchAllTestFiedls(test.test_id));
  };
  const handleKeyDown = () => {
    // const currentData = testfields.field[value.index];
    // const nextData = testfields.field[value.value];
    // console.log("currentData", currentData);
    // console.log("nextData", nextData);
  };
  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement>,
    testfields_id: string
  ) => {
    const payload = {
      testfields_id,
      value: event.target.value,
    };
    dispatch(setRowsInput(payload));
    refs[testfields_id]?.current?.focus();
    // const props = {
    //   value: event.target.value,
    //   index,
    // };
    // setValue(props);
  };
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
        <TableContainer sx={{ maxHeight: 340 }}>
          <Table sx={{ minWidth: 1000 }} stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <StyledTableCell></StyledTableCell>

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
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {testfields.field.map((item: any, index: number) => {
                refs[item.testfields_id] = useRef(null);
                return (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      <TextInput
                        ref={refs[item.testfields_id]}
                        value={item.testfields_row}
                        onchange={(e) => handleOnChange(e, item.testfields_id)}
                        type="text"
                      />
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
                    <StyledTableCell align="right">
                      {item.other}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {index === 0 ? (
                        <ArrowCircleDownIcon
                          onClick={() => handleDown(index)}
                        />
                      ) : index === testfields.field.length - 1 ? (
                        <ArrowCircleUpIcon onClick={() => handleUp(index)} />
                      ) : (
                        <>
                          <ArrowCircleUpIcon onClick={() => handleUp(index)} />
                          <ArrowCircleDownIcon
                            onClick={() => handleDown(index)}
                          />
                        </>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};
export default TestFieldsForm;
