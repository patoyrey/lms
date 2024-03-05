import React, { useEffect, useState } from "react";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { LogoutService } from "../../services/logoutservice";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
interface LogoutInterface {
  ShowLogout: () => void
}
const Logout: React.FC<LogoutInterface> = ({ ShowLogout }) => {
  const [open, setOpen] = React.useState<boolean>(true);

  const handleLogout = () => {
    LogoutService.get("user-logout")
      .then((res: any) => {
        if (res) {
          navigate("/signIn")
        }
      })
      .catch((error: any) => {
        console.error("Error logging out:", error)
      });
  }
  const navigate = useNavigate()
  const HandleShowLogout = () => {
    ShowLogout()
  }
  return (
    <>

      <Dialog open={open} onClose={() => HandleShowLogout()} >
        <DialogTitle>Logout Confirmation</DialogTitle>
        <DialogContent >
          <DialogContentText>
            Are you sure you want to log out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogout} color="primary">
            Confirm
          </Button>
          <Button onClick={() => HandleShowLogout()} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog >
    </>
  );
};

export default Logout;
