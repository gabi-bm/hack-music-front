import "./Category.css";
import NavBar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footter/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Category = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        process.env.REACT_APP_SERVER_URL + "/products?category=" + params.slug,
      );
      console.log(response.data);
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    <div>
      <NavBar />
      <h1>Category</h1>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id} className="tx-color-third">
              {product.name}
            </li>
          );
        })}
      </ul>
      <Footer />
    </div>
  );
};
export default Category;
