import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes = (): any => {
  return (
    <Routes>
      <Route path='/index' element={<p>olar</p>} />
      <Route path='*' element={<Navigate to='/index' />} />
    </Routes>
  );
}