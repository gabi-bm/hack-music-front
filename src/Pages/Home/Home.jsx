import "./Home.css";
import NavBar from "../../components/Navbar/Navbar";
import HeaderHome from "../../components/HeaderHome/HeaderHome";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Footer from "../../components/Footter/Footer";
import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import MultiCarousel from "../../components/MultiCarousel/MultiCarousel";
import {
  fender,
  bach,
  gibson,
  gretsch,
  korg,
  latinPercussion,
  nord,
  roland,
  taylor,
  yamaha,
} from "../../Images/Logos/index.js";

const Home = () => {
  const logos = [
    fender,
    taylor,
    gibson,
    gretsch,
    roland,
    latinPercussion,
    korg,
    nord,
    bach,
    yamaha,
  ];
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
    categories.length > 0 && (
      <div>
        <NavBar />
        <HeaderHome />
        <h2 className="home-titles" style={{ paddingBottom: "0" }}>
          PREMIUM PRODUCTS
        </h2>
        <MultiCarousel carouselProducts={carouselProducts} />
        <section>
          <Container>
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

        <h2 className="home-titles">OUR BRANDS</h2>
        <div
          className="d-flex align-items-center justify-content-between my-4 flex-wrap"
          style={{ width: "80%", margin: "0 auto" }}
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              style={{ maxWidth: "4rem", height: "auto" }}
              className="mx-3 mb-3"
              src={logo}
              alt={logo}
            ></img>
          ))}
        </div>

        <Footer />
      </div>
    )
  );
};
export default Home;
