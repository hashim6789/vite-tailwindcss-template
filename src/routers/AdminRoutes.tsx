import { Routes, Route } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Products from "../pages/admin/Products";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AdminRoutes;
