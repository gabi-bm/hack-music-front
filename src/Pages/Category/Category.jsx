import "./Category.css";
import NavBar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footter/Footer";
import ProductCardLarge from "../../Components/ProductCardLarge/ProductCardLarge";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/cartSlice";

const Category = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [category, setCategory] = useState(null);

  const notify = () => toast("Product added to cart!");

  const handleAddProduct = (product) => {
    dispatch(addProduct({ product }));
    return;
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        process.env.REACT_APP_SERVER_URL + "/products?category=" + params.slug,
      );
      setCategory(response.data);
    };
    getProducts();
  }, [params.slug]);

  return (
    category && (
      <div>
        {console.log(category)}
        <NavBar />
        <ToastContainer />
        <div style={{ width: "100%", height: "500px", overflow: "hidden" }}>
          {/* Ver altura img en vh.. relacionar con altura nav y h1 para que cubran pantalla. Y ver caso pantallas con poco ancho */}
          <img
            style={{ width: "100%", height: "auto" }}
            src="https://i.postimg.cc/V61svYzZ/pexels-caleb-oquendo-3018083.jpg"
          ></img>
        </div>
        <Container style={{ textAlign: "center" }}>
          <h1 className="category-title mt-5">{category.alias}</h1>
          <ul className="m-0 p-0" style={{ width: "100%" }}>
            {category.products.map((product) => {
              return (
                <li key={product._id} className="tx-color-third w-100 my-4 list-items">
                  <Link to={"/product/" + product._id} style={{ color: "var(--first-color)" }}>
                    <ProductCardLarge
                      product={product}
                      handleAddProduct={handleAddProduct}
                      notify={notify}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
        <Footer />
      </div>
    )
  );
};
export default Category;
