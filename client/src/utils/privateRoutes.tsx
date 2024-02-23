import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { CheckAuth } from "../services/checkAuthServices";

const PrivateRoutes = () => {
  const [auth, setAuth] = React.useState<boolean>(true);
  useEffect(() => {
    CheckAuth.get("get-auth")
      .then((res: any) => {
        if (!res) {
          console.log("Private Routes", res);
          setAuth(false);
        }
      })
      .catch((error: any) => {
        setAuth(false);
      });
  }, []);

  return auth ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default PrivateRoutes;
