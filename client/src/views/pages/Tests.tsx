import { Box, Button, Modal } from "@mui/material";
import React, { useState } from "react";
import Textfield from "../components/textfield";
import ButtonComponent from "../components/button";
import ModalComponent from "../components/ModalComponent";
import { Test } from "../../interface/test";
import { TestService } from "../../services/testService";

const Tests: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [search, setSearch] = useState<string>("");
  const [testName, setTestName] = useState<string>("");

  const add = async () => {
    console.log(" add test button clicked", testName);
    const props = {
      test_name: testName,
    } as unknown as Test;
    console.log(await TestService.add(props, "add-test"));
  };
  const searchHandle = () => {
    console.log(" search button clicked");
  };

  return (
    <Box className="left-right-spacing">
      <ModalComponent open={open} close={() => handleClose()}>
        <Box>
          <div className="modal">
            <div className="modalStyle">
              <Textfield
                value={testName}
                onchange={(val: string) => setTestName(val)}
                type="search"
                placeholder="Test Field"
                variant="outlined"
                size="small"
                required={true}
              />
              <ButtonComponent
                style={{ height: 40 }}
                size="large"
                variant="contained"
                label="Add"
                onclick={() => add()}
              />
            </div>
          </div>
        </Box>
      </ModalComponent>

      <h1>LABORATORY TESTS</h1>
      <br></br>
      <div className="boxes">
        <div className="tests">
          <div className="fields">
            <Textfield
              value={search}
              onchange={(val: string) => setSearch(val)}
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
            />
            <ButtonComponent
              size="medium"
              variant="contained"
              label="Add Test"
              style={{ height: 40, width: "15%" }}
              onclick={() => handleOpen()}
            />
          </div>
          <table>
            <tbody>
              <tr>
                <td>Complete Blood Count</td>
              </tr>
              <tr>
                <td>Urinalysis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Box>
  );
};
export default Tests;
