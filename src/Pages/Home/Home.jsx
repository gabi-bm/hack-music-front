import "./Home.css";
import NavBar from "../../Components/Navbar/Navbar";
import HeaderHome from "../../Components/HeaderHome/HeaderHome";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import ProductsCarousel from "../../Components/ProductsCarousel/ProductsCarousel";
import Footer from "../../Components/Footter/Footer";
import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(process.env.REACT_APP_SERVER_URL + "/categories");
      setCategories(response.data);
    };
    getCategories();
  }, []);

  return (
    <div>
      <NavBar />
      <HeaderHome />
      <ProductsCarousel />
      <section>
        <h2>CATEGORIES</h2>
        {categories.map((category) => {
          return (
            <Link to={"/category/" + category.slug} key={"category-" + category.name}>
              <CategoryCard category={category} />
            </Link>
          );
        })}
      </section>
      <Footer />
    </div>
  );
};
export default Home;
