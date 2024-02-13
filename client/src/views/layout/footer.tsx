import * as React from "react";

import { Button, Typography, TextField } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-lms">
        <div>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", marginBottom: 1 }}
          >
            Offers
          </Typography>
          <Typography variant="body2">Consultation</Typography>
          <Typography variant="body2">Lorem Epsom</Typography>
          <Typography variant="body2">Lorem Epsom</Typography>
          <Typography variant="body2">Lorem Epsom</Typography>
          <Typography variant="body2">Lorem Epsom</Typography>
        </div>
      </div>
      <div>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", marginBottom: 1 }}
        >
          Company
        </Typography>
        <Typography variant="body2">About Us</Typography>
        <Typography variant="body2">Partners</Typography>
        <Typography variant="body2">Media & News</Typography>
      </div>
      <div>
        <Typography
          variant="subtitle1"
          sx={{ fontWeight: "bold", marginBottom: 1 }}
        >
          GET IN TOUCH
        </Typography>
        <Typography variant="body2">0935******</Typography>
        <Typography variant="body2">0935******Q</Typography>
      </div>
    </footer>
  );
};
export default Footer;
