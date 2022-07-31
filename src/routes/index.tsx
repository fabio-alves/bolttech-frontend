import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/Dashboard";

export const AppRoutes = (): any => {
  return (
    <Routes>
      <Route
        path="/index"
        element={<Dashboard />}
      />
      <Route path="*" element={<Navigate to="/index" />} />
    </Routes>
  );
};
