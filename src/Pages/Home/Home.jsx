import "./Home.css";
import NavBar from "../../components/Navbar/Navbar";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Footer from "../../components/Footter/Footer";
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
