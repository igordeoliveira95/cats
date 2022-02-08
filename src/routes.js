import { Routes, Route } from "react-router-dom";

import Facts from "./pages/Facts";
import Photos from "./pages/Photos";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Facts />} />
      <Route path="photos" element={<Photos />} />
    </Routes>
  );
}

export default AppRoutes;
