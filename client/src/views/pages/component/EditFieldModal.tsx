import { Box, Typography } from "@mui/material";
import React from "react";
import ModalComponent from "../../components/ModalComponent";
import ButtonComponent from "../../components/button";
import Textfield from "../../components/textfield";
import { Field_Entity } from "../../../entity/fieldEntity";

interface ModalProps {
  handleClose: () => void;
  open: boolean;
  handleOnChange: (val: any) => void;
  field: Field_Entity;
  update: () => void;
}

const EditFieldModal: React.FC<ModalProps> = ({
  handleClose,
  open,
  handleOnChange,
  field,
  update,
}) => {
  return (
    <>
      <ModalComponent open={open} close={() => handleClose()}>
        <Box>
          <div className="modal">
            {" "}
            <div className="modalStyle">
              <div className="patient-ref-container">
                {" "}
                <Typography
                  variant="h6"
                  display="block"
                  sx={{ mb: 2 }}
                  gutterBottom
                ></Typography>
                <div className="patient-ref">
                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Field Name :
                    </Typography>
                    <Textfield
                      value={field.field_name}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="field_name"
                      size="small"
                      required={true}
                    />
                  </div>

                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Unit :
                    </Typography>
                    <Textfield
                      value={field.unit}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="unit"
                      size="small"
                      required={true}
                    />
                  </div>
                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Male Reference Range :
                    </Typography>
                    <Textfield
                      value={field.maleRefRange}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="maleRefRange"
                      size="small"
                      required={true}
                    />
                  </div>

                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Female Reference Range :
                    </Typography>
                    <Textfield
                      value={field.femaleRefRange}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="femaleRefRange"
                      size="small"
                      required={true}
                    />
                  </div>

                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Reference Range :
                    </Typography>
                    <Textfield
                      value={field.RefRange}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="RefRange"
                      size="small"
                      required={true}
                    />
                  </div>

                  <div>
                    {" "}
                    <Typography variant="body2" display="block" gutterBottom>
                      Desirable Reference Range :
                    </Typography>
                    <Textfield
                      value={field.DesirableRefRange}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="DesirableRefRange"
                      size="small"
                      required={true}
                    />
                  </div>

                  <div>
                    {" "}
                    <Typography variant="body2" display="block" gutterBottom>
                      Borderline Reference Range :
                    </Typography>
                    <Textfield
                      value={field.borderlineRefRange}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="borderlineRefRange"
                      size="small"
                      required={true}
                    />
                  </div>

                  <div>
                    {" "}
                    <Typography variant="body2" display="block" gutterBottom>
                      High Risk Reference Range :
                    </Typography>
                    <Textfield
                      value={field.highRiskRefRange}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="highRiskRefRange"
                      size="small"
                      required={true}
                    />
                  </div>

                  <div>
                    {" "}
                    <Typography variant="body2" display="block" gutterBottom>
                      Other :
                    </Typography>
                    <Textfield
                      value={field.other}
                      onchange={(val) => handleOnChange(val)}
                      type="search"
                      variant="outlined"
                      name="other"
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
                label="Update"
                onclick={() => update()}
              />
            </div>
          </div>
        </Box>
      </ModalComponent>
    </>
  );
};

export default EditFieldModal;
