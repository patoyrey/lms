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
import { useEffect } from "react";
import { fetchAllField, setSelectFieldsId } from "../redux/fieldSlice";
import { RootState } from "../store/rootReducer";
import { Checkbox } from "@mui/material";

const FieldsTable: React.FC = () => {
  const dispatch = useDispatch();
  const field = useSelector((state: RootState) => state.field);
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

  useEffect(() => {
    dispatch(fetchAllField());
  }, []);

  const handleCheckFields = (field_id: string, index: number) => {
    const payload = {
      field_id,
      index,
    };
    dispatch(setSelectFieldsId(payload));
    // console.log("Fields Id", field.test_fields.fields_id);
  };
  useEffect(() => {
    console.log(field.test_fields.test_id);
    console.log("Fields Id", field.test_fields);
  }, [field]);
  return (
    <Paper>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table sx={{ minWidth: 1000 }} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Field Name</StyledTableCell>
              <StyledTableCell align="right">Unit</StyledTableCell>
              <StyledTableCell align="right">
                Male Reference Range
              </StyledTableCell>
              <StyledTableCell align="right">
                Female Reference Range
              </StyledTableCell>
              <StyledTableCell align="right">Reference Range</StyledTableCell>
              <StyledTableCell align="right">
                Desirable Reference Range
              </StyledTableCell>
              <StyledTableCell align="right">other</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {field.field.map((item: any, index: number) => (
              <StyledTableRow key={index}>
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
                <StyledTableCell align="right">{item.other}</StyledTableCell>
                <StyledTableCell align="right">
                  <Checkbox
                    onClick={() => handleCheckFields(item.field_id, index)}
                    checked={field.test_fields.fields_id.some(
                      (obj: any) => obj.field_id === item.field_id
                    )}
                  />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
export default FieldsTable;
