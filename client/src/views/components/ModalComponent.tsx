import { Box } from "@mui/material";
import ButtonComponent from "./button";
import Textfield from "./textfield";
import { useState } from "react";
import React from "react";
import { Modal } from "@mui/material";
import axios from "axios";
type Props = {
  open: boolean;
  close: () => void;
  children: React.ReactNode;
};

const ModalComponent: React.FC<Props> = ({ open, close, children }) => {
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div>{children}</div>
    </Modal>
  );
};

export default ModalComponent;
