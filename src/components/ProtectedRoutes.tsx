import React, { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

type Props = {};

const ProtectedRoutes: FC<Props> = () => {
  const isAuth: boolean = true;
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
