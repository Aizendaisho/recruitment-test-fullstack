import React from "react";
import { Navigate,Outlet } from "react-router-dom";


export default function ProtectedRoute({
  children,
  isAllowed,
  redirectTo= "/"
}: {
  children?: React.ReactElement;
  isAllowed: boolean;
  redirectTo?: string
}) {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet />
}