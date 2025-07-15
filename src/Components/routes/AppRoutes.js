import { Routes, Route } from 'react-router-dom';
import UserPage from '../pages/crud/index';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserPage />} />
      {/* You can add more routes later here */}
    </Routes>
  );
}

export default AppRoutes;