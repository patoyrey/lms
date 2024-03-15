import { useDispatch, useSelector } from "react-redux";
import Nav from "../layout/nav";
import { RootState } from "../../store";
import { Box, Typography } from "@mui/material";
import { SnackbarOrigin } from "@mui/material/Snackbar";
import AlertComponent from "../components/alert";
import React, { useEffect, useState } from "react";
import Textfield from "../components/textfield";
import ButtonComponent from "../components/button";
import ModalComponent from "../components/ModalComponent";
import { clearHmoField, setHmo } from "../../redux/hmoSlice";
import { HmoService } from "../../services/hmoService";
import { HmoInterface } from "../../interface/hmoInterface";
import HmoTable from "../../table/hmoTable";
import { GetAllHmo } from "../../utils/fetchHmo";

interface StateSnackbar extends SnackbarOrigin {
  open: boolean;
}
const Hmo: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openSnackAlert, setOpenSnackAlert] = React.useState(false);
  const [openSnackFailAlert, setOpenFailSnackAlert] = React.useState(false);
  const [openSnackNetworkFailAlert, setOpenNetworkFailSnackAlert] =
    React.useState(false);
  const hmo = useSelector((state: RootState) => state.hmo);
  const dispatch = useDispatch();
  const [stateSnackbarAlert, setStateSnackbar] = React.useState<StateSnackbar>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = stateSnackbarAlert;

  const handleCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackAlert(false);
  };
  const handleFailCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenFailSnackAlert(false);
  };
  const handleNetworkFailCloseSnackbar = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenNetworkFailSnackAlert(false);
  };
  // const handleOnClick = () => {
  //   setOpen(!open);
  // };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOnChange = (event: any) => {
    const { name, value } = event.target;
    const payload = {
      name,
      value,
    };
    dispatch(setHmo(payload));
    console.log(name);
  };
  const [search, setSearch] = useState<string>("");
  const searchHandle = () => {};

  const add = async () => {
    try {
      const res = await HmoService.add(
        hmo.hmo_data as unknown as HmoInterface,
        "add-hmo"
      );
      if (res) {
        setOpenSnackAlert(true);
        dispatch(clearHmoField());
        console.log(hmo);
        GetAllHmo(dispatch);
      } else {
        setOpenFailSnackAlert(true);
      }
    } catch (error) {
      setOpenNetworkFailSnackAlert(true);
    }
  };
  useEffect(() => {
    GetAllHmo(dispatch);
  }, []);
  return (
    <Box className="left-right-spacing">
      <AlertComponent
        className="alert"
        severity="success"
        open={openSnackAlert}
        autoHideDuration={2000}
        anchorOrigin={{ vertical, horizontal }}
        onClose={handleCloseSnackbar}
        message="Successfully inserted!"
      />
      <AlertComponent
        open={openSnackFailAlert}
        severity="warning"
        message="Failed to insert!"
        autoHideDuration={2000}
        anchorOrigin={{ vertical, horizontal }}
        onClose={handleFailCloseSnackbar}
      />
      <AlertComponent
        open={openSnackNetworkFailAlert}
        severity="warning"
        message="Network Error"
        autoHideDuration={2000}
        anchorOrigin={{ vertical, horizontal }}
        onClose={handleNetworkFailCloseSnackbar}
      />
      <ModalComponent open={open} close={() => handleClose()}>
        <Box>
          <div className="hmo-modal">
            {" "}
            <div className="hmo-modalStyle">
              <div className="hmo-ref-container">
                {" "}
                <Typography
                  variant="h6"
                  display="block"
                  sx={{ mb: 2 }}
                  gutterBottom
                >
                  Add HMO
                </Typography>
                <div className="patient-ref">
                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      HMO Name :
                    </Typography>
                    <Textfield
                      value={hmo.hmo_data.hmo_name}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="hmo_name"
                      size="small"
                      required={true}
                    />
                  </div>

                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Contact Person :
                    </Typography>
                    <Textfield
                      value={hmo.hmo_data.contact_person}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="contact_person"
                      size="small"
                      required={true}
                    />
                  </div>
                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Email Address :
                    </Typography>
                    <Textfield
                      value={hmo.hmo_data.email_address}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="email_address"
                      size="small"
                      required={true}
                    />
                  </div>

                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Contact Number :
                    </Typography>
                    <Textfield
                      value={hmo.hmo_data.contact_number}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="contact_number"
                      size="small"
                      required={true}
                    />
                  </div>

                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Link to Rates :
                    </Typography>
                    <Textfield
                      value={hmo.hmo_data.link_to_rates}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="link_to_rates"
                      size="small"
                      required={true}
                    />
                  </div>

                  <div>
                    {" "}
                    <Typography variant="body2" display="block" gutterBottom>
                      Status :
                    </Typography>
                    <Textfield
                      value={hmo.hmo_data.hmo_status}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="hmo_status"
                      size="small"
                      required={true}
                    />
                  </div>
                </div>
              </div>
              <ButtonComponent
                style={{ height: 40, width: "10rem" }}
                size="large"
                variant="contained"
                label="Add"
                onclick={() => add()}
                //  onclick={() => add()}
                color="primary"
              />
            </div>
          </div>
        </Box>
      </ModalComponent>

      <div className="hmo-container">
        <div className="patient-content">
          <Typography
            variant="h5"
            display="block"
            gutterBottom
            sx={{ fontFamily: "Poppins" }}
          >
            HMO Information
          </Typography>
          <Textfield
            value=""
            onchange={(e) => console.log(e.target.value)}
            placeholder="Search"
            type="search"
            variant="outlined"
            size="small"
            style={{ width: "50%" }}
            required={true}
          />
          <ButtonComponent
            size="medium"
            variant="contained"
            label="Search"
            onclick={() => console.log("Click ")}
            color="primary"
          />
          <ButtonComponent
            color="primary"
            size="medium"
            variant="contained"
            label="Add HMO"
            onclick={handleOpen}
          />
        </div>
        <HmoTable
          hmoList={hmo.hmo_array}
          getAllHmo={() => GetAllHmo(dispatch)}
        />
      </div>
    </Box>
  );
};

export default Hmo;
