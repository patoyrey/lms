import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { LogoutService } from "../../services/logoutservice";

const Logout = () => {
  const [logout, setLogout] = React.useState<boolean>(true);
  useEffect(() => {
    LogoutService.get("user-logout")
      .then((res: any) => {
        if (res) {
          console.log("Private Routes", res);
          setLogout(true);
        }
        // else {
        //   setLogout(false);
        // }
      })
      .catch((error: any) => {
        // setLogout(false);
      });
  }, []);

  return logout ? <Navigate to="/landing" replace /> : "";
};

export default Logout;
