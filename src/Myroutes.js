import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Product from "./Pages/Product/Product";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Logout from "./Pages/Logout/Logout";
import Cart from "./Pages/Cart/Cart";
import OffcanvasCart from "./Pages/OffcanvasCart/OffcanvasCart";
import Checkout from "./Pages/Checkout/Checkout";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/cart" element={<Cart />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
