import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Product from "./Pages/Product/Product";
const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryId" element={<Category />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/:categoryId/:productId" element={<Product />} />
      </Routes>
    </>
  );
};

export default MyRoutes;
