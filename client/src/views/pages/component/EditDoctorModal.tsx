import { Box, Typography } from "@mui/material";
import React from "react";
import ModalComponent from "../../components/ModalComponent";
import ButtonComponent from "../../components/button";
import Textfield from "../../components/textfield";
import { Doctor_Entity } from "../../../entity/doctorEntity";

interface ModalProps {
  handleClose: () => void;
  open: boolean;
  handleOnChange: (val: any) => void;
  doctor: Doctor_Entity;
  update: () => void;
}

const EditDoctorModal: React.FC<ModalProps> = ({
  handleClose,
  open,
  handleOnChange,
  doctor,
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
                <Typography
                  variant="h6"
                  display="block"
                  sx={{ mb: 2 }}
                  gutterBottom
                >
                  <div className="header-text">
                    <p
                      style={{
                        fontSize: "px",
                        fontWeight: "bold",
                        fontStyle: "Poppins",
                      }}
                    >
                      Update Doctor's Information
                    </p>
                  </div>
                </Typography>
                <div className="doctor-modal">
                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Given Name :
                    </Typography>
                    <Textfield
                      value={doctor.doc_fname}
                      type="text"
                      variant="outlined"
                      name="doc_fname"
                      onchange={(val) => handleOnChange(val)}
                      required={true}
                    />
                  </div>

                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Middle Name :
                    </Typography>
                    <Textfield
                      value={doctor.doc_mname}
                      onchange={(val) => handleOnChange(val)}
                      type="text"
                      variant="outlined"
                      name="doc_mname"
                      required={true}
                    />
                  </div>
                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Last Name :
                    </Typography>
                    <Textfield
                      value={doctor.doc_lname}
                      onchange={(val) => handleOnChange(val)}
                      type="text"
                      variant="outlined"
                      name="doc_lname"
                      required={true}
                    />
                  </div>

                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      Specialization :
                    </Typography>
                    <Textfield
                      value={doctor.doc_specialization}
                      onchange={(val) => handleOnChange(val)}
                      type="text"
                      variant="outlined"
                      name="doc_specialization"
                      required={true}
                    />
                  </div>

                  <div>
                    <Typography variant="body2" display="block" gutterBottom>
                      PRC No:
                    </Typography>
                    <Textfield
                      value={doctor.doc_prc_no}
                      onchange={(val) => handleOnChange(val)}
                      type="text"
                      variant="outlined"
                      name="doc_prc_no"
                      required={true}
                    />
                  </div>

                  <div>
                    {" "}
                    <Typography variant="body2" display="block" gutterBottom>
                      PhilHealth ID No.:
                    </Typography>
                    <Textfield
                      value={doctor.doc_philhealth_no}
                      onchange={(val) => handleOnChange(val)}
                      type="text"
                      variant="outlined"
                      name="doc_philhealth_no"
                      required={true}
                    />
                  </div>

                  <div>
                    {" "}
                    <Typography variant="body2" display="block" gutterBottom>
                      TIN No :
                    </Typography>
                    <Textfield
                      value={doctor.doc_tin_no}
                      onchange={(val) => handleOnChange(val)}
                      type="text"
                      variant="outlined"
                      name="doc_tin_no"
                      required={true}
                    />
                  </div>

                  <div>
                    {" "}
                    <Typography variant="body2" display="block" gutterBottom>
                      Room Number :
                    </Typography>
                    <Textfield
                      value={doctor.doc_room_no}
                      type="text"
                      variant="outlined"
                      name="doc_room_no"
                      onchange={(val) => handleOnChange(val)}
                      required={true}
                    />
                  </div>

                  <div>
                    {" "}
                    <Typography variant="body2" display="block" gutterBottom>
                      Schedule :
                    </Typography>
                    <Textfield
                      value={doctor.doc_schedule}
                      onchange={(val) => handleOnChange(val)}
                      type="text"
                      variant="outlined"
                      name="doc_schedule"
                      required={true}
                    />
                  </div>
                  <div>
                    {" "}
                    <Typography variant="body2" display="block" gutterBottom>
                      Phone Number :
                    </Typography>
                    <Textfield
                      value={doctor.doc_phone}
                      onchange={(val) => handleOnChange(val)}
                      type="text"
                      variant="outlined"
                      name="doc_phone"
                      required={true}
                    />
                  </div>
                  <div>
                    {" "}
                    <Typography variant="body2" display="block" gutterBottom>
                      Email :
                    </Typography>
                    <Textfield
                      value={doctor.doc_email}
                      onchange={(val) => handleOnChange(val)}
                      type="text"
                      variant="outlined"
                      name="doc_email"
                      required={true}
                    />
                  </div>
                  <div>
                    {" "}
                    <Typography variant="body2" display="block" gutterBottom>
                      Price :
                    </Typography>
                    <Textfield
                      value={doctor.doc_price}
                      onchange={(val) => handleOnChange(val)}
                      type="text"
                      variant="outlined"
                      name="doc_price"
                      required={true}
                    />
                  </div>
                  <div>
                    {" "}
                    <Typography variant="body2" display="block" gutterBottom>
                      Status :
                    </Typography>
                    <Textfield
                      value={doctor.doc_status}
                      onchange={(val) => handleOnChange(val)}
                      type="text"
                      variant="outlined"
                      name="doc_status"
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
                color="primary"
              />
            </div>
          </div>
        </Box>
      </ModalComponent>
    </>
  );
};

export default EditDoctorModal;
