import "./Product.css";
import NavBar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footter/Footer";
import { Button, Container, Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { addProduct } from "../../Redux/cartSlice";
import axios from "axios";
import { useDispatch } from "react-redux";
import MultiCarousel from "../../Components/MultiCarousel/MultiCarousel";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const params = useParams();
  const [carouselProducts, setCarouselProducts] = useState(null);
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  const notify = () => toast(product.name + " added to cart!");

  const handleAddProduct = () => {
    dispatch(addProduct({ product }));
    return;
  };

  useEffect(() => {
    const getProduct = async () => {
      const response = await axios.get(process.env.REACT_APP_SERVER_URL + "/products/" + params.id);
      setProduct(response.data);
    };
    getProduct();
  }, [params.id]);

  useEffect(() => {
    const getSimilarProducts = async () => {
      const response = await axios.get(
        process.env.REACT_APP_SERVER_URL + "/products?categoryName=" + product.categoryName,
      );
      setCarouselProducts(response.data);
    };
    product && getSimilarProducts();
    window.scrollTo(0, 0);
  }, [product]);

  return (
    product && (
      <>
        <NavBar />
        <ToastContainer />
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
                  {product.stock > 0 ? (
                    <Button
                      className="cart-button"
                      type="button"
                      onClick={(e) => {
                        handleAddProduct();
                        notify();
                        e.target.blur();
                      }}
                    >
                      Add to cart
                    </Button>
                  ) : (
                    <p>Out of stock</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="description">
            <p className=" product-description">{product.description}</p>
          </div>
          <div className="d-flex" style={{ margin: "auto" }}>
            <Carousel variant="dark" fade>
              {product.picture.map((productImage) => {
                return (
                  <Carousel.Item key={productImage} className="carousel-img">
                    <img className="d-block w-50" src={productImage} alt="First slide" />
                    <Carousel.Caption></Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </Container>
        <div className="similar-products">
          <h2 className="home-titles ">SIMILAR PRODUCTS</h2>

          <MultiCarousel carouselProducts={carouselProducts} />
        </div>

        <Footer />
      </>
    )
  );
};
export default Product;
