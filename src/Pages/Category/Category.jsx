import "./Category.css";
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footter/Footer";
import ProductCardLarge from "../../components/ProductCardLarge/ProductCardLarge";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/cartSlice";

const Category = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [category, setCategory] = useState(null);

  const notify = (productName) =>
    toast(`${productName} added to cart!`, {
      className: "toast-black-background",
      bodyClassName: "toast-font-color",
      progressClassName: "toast-progress-bar",
      autoClose: 2000,
    });

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
        <NavBar />
        <ToastContainer position="bottom-right" />
        <div style={{ width: "100%", maxHeight: "500px", overflow: "hidden" }}>
          <img
            style={{ width: "100%", height: "auto" }}
            src={category.headerImg}
            alt={category.name}
          ></img>
        </div>
        <Container style={{ textAlign: "center" }}>
          <h1 className="category-title my-5">{category.alias}</h1>
          <ul className="m-0 p-0" style={{ width: "100%" }}>
            {category.products.map((product) => {
              return (
                <li key={product._id} className="tx-color-third w-100 my-4 list-items">
                  <Link to={"/product/" + product._id} style={{ color: "var(--first-color)" }}>
                    <ProductCardLarge
                      product={product}
                      handleAddProduct={handleAddProduct}
                      notify={(productName) => notify(product.name)}
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
