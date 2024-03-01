import { Box, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import Textfield from "../components/textfield";
import ButtonComponent from "../components/button";
import ModalComponent from "../components/ModalComponent";

import { TestService } from "../../services/testService";
import { SnackbarOrigin } from "@mui/material/Snackbar";
import AlertComponent from "../components/alert";
import { useDispatch, useSelector } from "react-redux";
import { clearTest, fetchAllLabTest, setTest } from "../../redux/testSlice";
import { RootState } from "../../store";
import axios from "axios";
import { Test } from "../../interface/test";
import TestLabTable from "../../table/testlabTable";
import { setField, setSelectedTestID } from "../../redux/fieldSlice";

interface StateSnackbar extends SnackbarOrigin {
  open: boolean;
}

const Tests: React.FC = () => {
  const [openSnackAlert, setOpenSnackAlert] = React.useState(false);
  const [openSnackFailAlert, setOpenFailSnackAlert] = React.useState(false);
  const [openSnackNetworkFailAlert, setOpenNetworkFailSnackAlert] =
    React.useState(false);
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const test = useSelector((state: RootState) => state.test);

  const [stateSnackbarAlert, setStateSnackbar] = React.useState<StateSnackbar>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal } = stateSnackbarAlert;
  //Function get lab test
  const getAllLabTest = async () => {
    try {
      const res = await dispatch(fetchAllLabTest());

      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
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

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [search, setSearch] = useState<string>("");

  const add = async () => {
    try {
      const res = await TestService.add(
        test.test_lab as unknown as Test,
        "add-test"
      );
      if (res) {
        setOpenSnackAlert(true);

        dispatch(clearTest());
        getAllLabTest();
      } else {
        setOpenFailSnackAlert(true);
      }
    } catch (error) {
      setOpenNetworkFailSnackAlert(true);
    }

    // console.log(testt);
    dispatch(clearTest());
    // const props = {
    //   test_name: selectedOption,
    // } as unknown as Test;

    //console.log(await TestService.add(testt, "add-test"));
  };
  const searchHandle = () => {
    console.log(" search button clicked");
  };
  // DROPDOWN

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    const payload = {
      name,
      value,
    };
    dispatch(setTest(payload));
    console.log(name);
  };

  //Select Test

  useEffect(() => {
    getAllLabTest();
    console.log("Test Result", test.tests);
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

      {/* <ModalComponent open={open} close={() => handleClose()}>
        <Box>
          <div className="modal">
            <div className="modalStyle"></div>
          </div>
        </Box>
      </ModalComponent> */}

      <div className="boxes">
        <div className="tests">
          <div className="add-test-contianer">
            <div className="fields">
              <Typography variant="h5" display="block" gutterBottom>
                Test Lab
              </Typography>
              <Textfield
                value={search}
                onchange={(val) => setSearch(val.target.value)}
                placeholder="Search"
                type="search"
                variant="outlined"
                size="small"
                style={{ width: "70%" }}
                required={true}
              />
              <ButtonComponent
                size="medium"
                variant="contained"
                label="Search"
                style={{ height: 40, width: "10%" }}
                onclick={() => searchHandle()}
                color="secondary"
              />
            </div>
            <div className="add-test-form">
              <div className="add-test-inputs">
                <div>
                  <Typography variant="body2" display="block" gutterBottom>
                    Test Name:
                  </Typography>
                  <Textfield
                    value={test.test_lab.test_name}
                    type="text"
                    onchange={handleOnChange}
                    name="test_name"
                    size="small"
                    required={true}
                  />
                </div>
                <div>
                  <Typography variant="body2" display="block" gutterBottom>
                    Test Description:
                  </Typography>
                  <Textfield
                    value={test.test_lab.test_desc}
                    type="text"
                    onchange={handleOnChange}
                    name="test_desc"
                    size="small"
                    required={true}
                  />
                </div>
                <div>
                  <Typography variant="body2" display="block" gutterBottom>
                    Test Price:
                  </Typography>
                  <Textfield
                    value={test.test_lab.test_price}
                    type="number"
                    onchange={handleOnChange}
                    name="test_price"
                    size="small"
                    required={true}
                  />
                </div>
                <div>
                  <Typography variant="body2" display="block" gutterBottom>
                    Test Sample:
                  </Typography>
                  <Textfield
                    value={"Sample"}
                    type="number"
                    onchange={(e) => console.log(e.target.event)}
                    name="test_price"
                    size="small"
                    required={true}
                  />
                </div>
              </div>

              <ButtonComponent
                size="medium"
                variant="outlined"
                label="Submit "
                style={{ height: 40, width: "10%" }}
                onclick={() => add()}
                color="primary"
                type="submit"
              />
            </div>
          </div>

          <TestLabTable testlab={test.tests} getAllLabTest={getAllLabTest} />
        </div>
      </div>
    </Box>
  );
};
export default Tests;
