import { Box, Typography } from "@mui/material";
import ModalComponent from "../../components/ModalComponent";
import ButtonComponent from "../../components/button";
import Textfield from "../../components/textfield";
import { Hmo_Entity } from "../../../entity/hmoEntity";

interface HmoModalProps {
  handleClose: () => void;
  open: boolean;
  handleOnChange: (val: any) => void;
  hmo: Hmo_Entity;
  update: () => void;
}

const EditHmoModal: React.FC<HmoModalProps> = ({
  open,
  handleClose,
  handleOnChange,
  update,
  hmo,
}) => {
  return (
    <>
      <div>
        <ModalComponent
          open={open}
          close={() => {
            handleClose();
          }}
        >
          <Box>
            {" "}
            <div className="modal">
              <div className="modalStyle">
                <div className="patient-ref-container">
                  {" "}
                  <Typography
                    variant="h6"
                    display="block"
                    sx={{ mb: 2 }}
                    gutterBottom
                  >
                    <div className="patient-p">
                      <p
                        style={{
                          fontSize: "px",
                          fontWeight: "bold",
                          fontStyle: "Poppins",
                        }}
                      >
                        Update HMO Information
                      </p>
                    </div>
                  </Typography>
                  <div className="patient-ref">
                    <div>
                      <Typography variant="body2" display="block" gutterBottom>
                        HMO Name :
                      </Typography>
                      <Textfield
                        value={hmo.hmo_name}
                        name="hmo_name"
                        type="text"
                        required={true}
                        onchange={(val) => handleOnChange(val)}
                      />
                    </div>
                    <div>
                      <Typography variant="body2" display="block" gutterBottom>
                        Contact Person :
                      </Typography>
                      <Textfield
                        value={hmo.contact_person}
                        name="contact_person"
                        type="text"
                        required={true}
                        onchange={handleOnChange}
                      />
                    </div>{" "}
                    <div>
                      <Typography variant="body2" display="block" gutterBottom>
                        Email Address :
                      </Typography>
                      <Textfield
                        value={hmo.email_address}
                        name="email_address"
                        type="text"
                        required={true}
                        onchange={handleOnChange}
                      />
                    </div>{" "}
                    <div>
                      <Typography variant="body2" display="block" gutterBottom>
                        Contact Number :
                      </Typography>
                      <Textfield
                        value={hmo.contact_number}
                        name="contact_number"
                        type="text"
                        required={true}
                        onchange={handleOnChange}
                      />
                    </div>{" "}
                    <div>
                      <Typography variant="body2" display="block" gutterBottom>
                        Link to Rates :
                      </Typography>
                      <Textfield
                        value={hmo.link_to_rates}
                        name="link_to_rates"
                        type="text"
                        required={true}
                        onchange={handleOnChange}
                      />
                    </div>{" "}
                    <div>
                      <Typography variant="body2" display="block" gutterBottom>
                        HMO Status :
                      </Typography>
                      <Textfield
                        value={hmo.hmo_status}
                        name="hmo_status"
                        type="text"
                        required={true}
                        onchange={handleOnChange}
                      />
                    </div>{" "}
                  </div>
                </div>
                <ButtonComponent
                  size="medium"
                  variant="contained"
                  label="UPDATE"
                  onclick={() => {
                    update();
                    handleClose();
                  }}
                  type="contained"
                  color="primary"
                />
              </div>
            </div>
          </Box>
        </ModalComponent>
      </div>
    </>
  );
};
export default EditHmoModal;
