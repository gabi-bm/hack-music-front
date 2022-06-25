import "./Product.css";
import NavBar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footter/Footer";
import ProductsCarousel from "../../Components/ProductsCarousel/ProductsCarousel";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const Product = () => {
  const params = useParams();
  const [product, setProduct] = useState([]);
  const [productImg, setProductImg] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(process.env.REACT_APP_SERVER_URL + "/products/" + params.id);
      console.log(response.data);
      setProduct(response.data);
      setProductImg(response.data.picture);
      console.log(response.dat.picture);
    };
    getProduct();
  }, []);

  return (
    <>
      <NavBar />

      <Container style={{ textAlign: "center", marginTop: "15px" }}>
        <div>
          <div className="d-flex border" style={{ height: "350px", padding: "40px 45px" }}>
            <div
              className="border-end"
              style={{ minWidth: "250px", height: "100%", paddingRight: "45px" }}
            >
              <img src={product.picture} style={{ width: "100%", maxHeight: "100%" }}></img>
            </div>
            <div className="flex-grow-1" style={{ paddingLeft: "45px" }}>
              <div className="d-flex flex-column align-items-start">
                <span className="tx-size-xl">{product.name}</span>
                <span className="tx-size-md py-2">USD{" $" + product.price}</span>
                {product.description && (
                  <span className="tx-size-sm py-2" style={{ textAlign: "start" }}>
                    {product.description.slice(0, 200)}
                  </span>
                )}
                <span className="tx-size-md view-product-span">Brand img</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className=" product-description">{product.description}</p>
          <div className="product-images">
            {productImg.map((productImage) => {
              return (
                <div>
                  <img className="pr-image" src={productImage} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      <div className="similar-products">
        <h2 className="home-titles ">SIMILAR PRODUCTS</h2>
        <ProductsCarousel />
      </div>

      <Footer />
    </>
  );
};
export default Product;
