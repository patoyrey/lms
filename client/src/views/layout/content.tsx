import * as React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const medicalImage = require("../../images/medical.png").default;

const Content: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box className="container">
      <div className="content">
        <h2>Call Best Doctors</h2>
        <h1>Ready to Help.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button
          color="primary"
          size="large"
          variant="outlined"
          sx={{ marginTop: 2 }}
          onClick={() => navigate(`/signin`)}
        >
          Get Started
        </Button>
      </div>
      <img src={medicalImage} alt="Medical" />
    </Box>
  );
};
export default Content;
