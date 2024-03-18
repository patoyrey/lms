import { useEffect, useState } from "react";
import AlertComponent from "../views/components/alert";
import {
  Paper,
  RadioGroup,
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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import {
  setHmoData,
  fetchHmoById,
  setEditHmo,
  deleteHmoById,
} from "../redux/hmoSlice";
import React from "react";
import EditHmoModal from "../views/pages/component/EditHmoModal";
interface HmoTableProps {
  hmoList: any[];
  getAllHmo: () => void;
}

const HmoTable: React.FC<HmoTableProps> = ({ getAllHmo }) => {
  const [editHmoOpen, setEditHmoOpen] = React.useState(false);
  const dispatch = useDispatch();
  const hmo = useSelector((state: RootState) => state.hmo);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState<any>("");
  const hmoEdit = useSelector((state: RootState) => state.hmo.editHmo);
  const handleCloseAlert = () => {
    setOpen(false);
  };
  const handleEditOnChange = (event: any) => {
    const { name, value } = event.target;
    const payload = {
      name,
      value,
    };
    dispatch(setEditHmo(payload));
  };
  const handleEditButton = (data: any) => {
    console.log("HMO DATA: ", data);
    dispatch(setHmoData(data));
    handleEditOnClose();
  };
  const handleEditOnClose = () => {
    setEditHmoOpen(!editHmoOpen);
  };
  const handleUpdate = async () => {
    const data = {
      hmoId: hmoEdit.hmo_id,
      editHmo: hmoEdit,
    };
    const res = await dispatch(fetchHmoById(data));

    getAllHmo();
  };
  const handleDeleteHmo = async (hmoId: any) => {
    console.log(hmoId);
    const res = await dispatch(deleteHmoById(hmoId));
    setOpen(true);
    setMessage("HMO Successfully deleted!");
    setSeverity("success");
    getAllHmo();
  };
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
  useEffect(() => {
    getAllHmo();
  }, []);
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
      <Paper sx={{ overflow: "auto", maxHeight: "30rem" }}>
        <TableContainer>
          <Table sx={{ minWidth: 1080 }} size="small" aria-label="table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">HMO Name</StyledTableCell>
                <StyledTableCell align="left">Contact Person</StyledTableCell>
                <StyledTableCell align="left">Email Address</StyledTableCell>
                <StyledTableCell align="left">Contact Number</StyledTableCell>
                <StyledTableCell align="left">Link to Rates</StyledTableCell>
                <StyledTableCell align="left">Status</StyledTableCell>
                <StyledTableCell align="right">Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hmo.hmo_array.map((item: any, index: number) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {item.hmo_name}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {item.contact_person}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {item.email_address}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {item.contact_number}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {item.link_to_rates}
                  </StyledTableCell>

                  <StyledTableCell align="left">
                    {item.hmo_status}
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
                        onClick={() => handleDeleteHmo(item.hmo_id)}
                      />
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <EditHmoModal
        open={editHmoOpen}
        handleClose={handleEditOnClose}
        hmo={hmoEdit}
        update={handleUpdate}
        handleOnChange={handleEditOnChange}
      />
    </>
  );
};
export default HmoTable;
