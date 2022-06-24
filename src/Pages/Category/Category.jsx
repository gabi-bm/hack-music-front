import "./Category.css";
import NavBar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footter/Footer";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";

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
      <div style={{ width: "100%", height: "500px", overflow: "hidden" }}>
        {/* Ver altura img en vh.. relacionar con altura nav y h1 para que cubran pantalla. Y ver caso pantallas con poco ancho */}
        <img
          style={{ width: "100%", height: "auto" }}
          src="https://i.postimg.cc/V61svYzZ/pexels-caleb-oquendo-3018083.jpg"
        ></img>
      </div>
      <Container style={{ textAlign: "center" }}>
        <h1 className="category-title mt-5">DRUMS & PERCUSSION</h1>
        {/* VER DE TENER DISPONIBLE LA CATGORY PARA NO HARCODEAR */}
        <ul className="m-0 p-0" style={{ width: "100%" }}>
          {products.map((product) => {
            return (
              <li key={product.id} className="tx-color-third w-100 my-4">
                <div className="d-flex border" style={{ height: "270px", padding: "40px 45px" }}>
                  <div
                    className="border-end"
                    style={{ minWidth: "250px", height: "100%", paddingRight: "45px" }}
                  >
                    <img
                      src="https://i.postimg.cc/yNB1LV2h/percussion-santana-front.jpg"
                      style={{ width: "100%", maxHeight: "100%" }}
                    ></img>
                  </div>
                  <div className="flex-grow-1" style={{ paddingLeft: "45px" }}>
                    <div className="d-flex flex-column align-items-start">
                      <span className="tx-size-xl">{product.name}</span>
                      <span className="tx-size-sm py-2" style={{ textAlign: "start" }}>
                        {product.description.slice(0, 300) + "..."}
                      </span>
                      <span className="tx-size-md py-2">USD{" $" + product.price}</span>
                      <span className="tx-size-md view-product-span">View product {">"}</span>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
      <Footer />
    </div>
  );
};
export default Category;
