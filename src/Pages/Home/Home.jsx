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
import MultiCarousel from "../../Components/MultiCarousel/MultiCarousel";

const Home = () => {
  const [carouselProducts, setCarouselProducts] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get(process.env.REACT_APP_SERVER_URL + "/categories");
      setCategories(response.data);
    };
    getCategories();

    const getPopularProducts = async () => {
      const response = await axios.get(process.env.REACT_APP_SERVER_URL + "/products?premium=true");
      setCarouselProducts(response.data);
    };
    getPopularProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <HeaderHome />
      <h2 className="home-titles">POPULAR PRODUCTS</h2>
      <MultiCarousel carouselProducts={carouselProducts} />
      <section>
        <Container className="mt-5">
          <h2 className="home-titles">CATEGORIES</h2>
        </Container>
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
