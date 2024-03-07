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
import { ChangeEvent, useEffect, useState } from "react";

type Props = {
  row: { [key: string]: boolean };
};
const TestFieldsForm: React.FC<Props> = ({ row }) => {
  const testfields = useSelector((state: RootState) => state.testfield);
  const test = useSelector((state: RootState) => state.test);
  const [value, setValue] = useState<any>({ value: "", index: "" });
  const dispatch = useDispatch();
  const [focusRows, setFocusRows] = useState<{ [key: string]: boolean }>(row);
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

  const handleDown = async (labtest_id: string, testfields_row: string) => {
    const props = testfields.field.map((item: any) => {
      if (labtest_id === item.labtest_id) {
        return {
          ...item,
          testfields_row: String(Number(testfields_row) + 1),
        };
      } else {
        return item;
      }
    });

    await dispatch(sortTestFields(props));

    await dispatch(fetchAllTestFiedls(test.test_id));
  };
  const handleUp = async (labtest_id: string, testfields_row: string) => {
    const props = testfields.field.map((item: any) => {
      if (labtest_id === item.labtest_id) {
        return {
          ...item,
          testfields_row: String(Number(testfields_row) - 1),
        };
      } else {
        return item;
      }
    });

    await dispatch(sortTestFields(props));

    await dispatch(fetchAllTestFiedls(test.test_id));
  };
  const handleSave = async (event: any) => {
    if (event.key === "Enter") {
      console.log(testfields.field);
      await dispatch(sortTestFields(testfields.field));

      await dispatch(fetchAllTestFiedls(test.test_id));
    }
  };
  const handleOnChange = (
    event: ChangeEvent<HTMLInputElement>,
    labtest_id: string,
    index: number
  ) => {
    const payload = {
      labtest_id,
      value: event.target.value,
    };
    dispatch(setRowsInput(payload));
    let typeObject = {} as { [key: string]: boolean };
    Object.keys(focusRows).forEach((each) => {
      typeObject = { ...typeObject, [each]: false };
    });
    setFocusRows({ ...typeObject, [labtest_id]: true });
  };

  useEffect(() => {
    console.log("Focus Rows :", focusRows);
  }, [focusRows]);
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
              {testfields.field.length > 0 ? (
                <>
                  {testfields.field.map((item: any, index: number) => {
                    return (
                      <StyledTableRow key={index}>
                        <StyledTableCell component="th" scope="row">
                          <TextInput
                            value={item.testfields_row}
                            onchange={(e) =>
                              handleOnChange(e, item.labtest_id, index)
                            }
                            type="number"
                            isFocus={focusRows[item.labtest_id]}
                            onkeydown={handleSave}
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
                          {testfields.field.length !== 1 ? (
                            <>
                              {index === 0 ? (
                                <ArrowCircleDownIcon
                                  onClick={() =>
                                    handleDown(
                                      item.labtest_id,
                                      item.testfields_row
                                    )
                                  }
                                />
                              ) : index === testfields.field.length - 1 ? (
                                <ArrowCircleUpIcon
                                  onClick={() =>
                                    handleUp(
                                      item.labtest_id,
                                      item.testfields_row
                                    )
                                  }
                                />
                              ) : (
                                <>
                                  <ArrowCircleUpIcon
                                    onClick={() =>
                                      handleUp(
                                        item.labtest_id,
                                        item.testfields_row
                                      )
                                    }
                                  />
                                  <ArrowCircleDownIcon
                                    onClick={() =>
                                      handleDown(
                                        item.labtest_id,
                                        item.testfields_row
                                      )
                                    }
                                  />
                                </>
                              )}
                            </>
                          ) : (
                            ""
                          )}
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
                </>
              ) : (
                ""
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Box>
  );
};
export default TestFieldsForm;
