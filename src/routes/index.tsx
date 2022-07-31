import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = (): any => {
  return (
    <Routes>
      <Route
        path="/index"
        element={
          <Button variant="contained" color="primary">
            Teste
          </Button>
        }
      />
      <Route path="*" element={<Navigate to="/index" />} />
    </Routes>
  );
};
