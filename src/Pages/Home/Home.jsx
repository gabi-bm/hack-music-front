import "./Home.css";
import NavBar from "../../Components/Navbar/Navbar";
import HeaderHome from "../../Components/HeaderHome/HeaderHome";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import Footer from "../../Components/Footter/Footer";
import React from "react";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeaderHome />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <Footer />
    </div>
  );
};
export default Home;
