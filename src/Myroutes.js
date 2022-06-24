import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Product from "./Pages/Product/Product";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/product/:id" element={<Product />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default MyRoutes;
