import { Routes, Route } from "react-router-dom";
import Products from "../pages/user/Products";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
    </Routes>
  );
};

export default UserRoutes;
