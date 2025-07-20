import { Routes, Route } from "react-router-dom";
import Layout from "../layout/index";
import UserPage from "../pages/crud/index";
import EntityViewer from "../pages/entinity/index";

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserPage />} />
          <Route path ="entinities" element={<EntityViewer />} />
        </Route>
      </Routes>
    
  );
}

export default AppRoutes;