import { Box, Button, Modal } from "@mui/material";
import React, { useState } from "react";
import Textfield from "../components/textfield";
import ButtonComponent from "../components/button";
import axios from "axios";
import ModalComponent from "../components/ModalComponent";
import { FieldService } from "../../services/fieldservice";
import { Field } from "../../interface/field";

const Fields: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [search, setSearch] = useState<string>("");
  const [fieldName, setFieldName] = useState<string>("");

  const add = async () => {
    console.log(" add field button clicked", fieldName);
    const props = {
      field_name: fieldName,
    } as unknown as Field;
    console.log(await FieldService.add(props, "add-fields"));
    const res = await FieldService.add(props, "add-fields");
    if (res) {
      alert("Insert Succeded");
    } else {
      alert("Failed to Insert!");
    }
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
                value={fieldName}
                onchange={(val: string) => setFieldName(val)}
                type="search"
                placeholder="Field Name"
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
      <h1>LABORATORY FIELDS</h1>
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
              label="Add Field"
              style={{ height: 40, width: "15%" }}
              onclick={() => handleOpen()}
            />
          </div>
        </div>
      </div>
    </Box>
  );
};
export default Fields;
