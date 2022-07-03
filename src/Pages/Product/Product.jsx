import "./Product.css";
import NavBar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footter/Footer";
import { Button, Container, Carousel, Breadcrumb, Row, Col } from "react-bootstrap";
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
        <Container style={{ textAlign: "center", marginTop: "50px" }}>
          <Breadcrumb>
            <Breadcrumb.Item href="/">
              <span className="text-muted tx-size-md">Home</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href={"/" + product.categoryName}>
              <span className="text-muted tx-size-md">{product.categoryName}</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
              <span className="text-muted tx-size-md">{product.name}</span>
            </Breadcrumb.Item>
          </Breadcrumb>
          {/* <div
      className="d-flex border product-card-large"
      style={{ height: "270px", padding: "40px 45px" }}
    >
      <div
        className="border-end d-flex align-items-center justify-content-center"
        style={{
          width: "250px",
          maxWidth: "250px",
          minWidth: "250px",
          height: "100%",
          paddingRight: "45px",
        }}
      > */}
          <Row className="border" style={{ minHeight: "25rem", padding: "40px 45px" }}>
            <Col xs={12} md={5} className="product-page-col-pic">
              {/* <div style={{ width: "100%", height: "100%", maxHeight: "20rem" }}>
                <img src={product.picture} style={{ maxWidth: "100%", maxHeight: "100%" }}></img>
              </div> */}
              <Carousel
                slide={false}
                variant="dark"
                style={{ maxHeight: "20rem", minHeight: "20rem" }}
                className="d-flex align-items-center"
              >
                {product.picture.map((productImage) => {
                  return (
                    <Carousel.Item key={productImage} style={{ margin: "0 auto " }}>
                      <img
                        src={productImage}
                        alt="First slide"
                        style={{ maxWidth: "75%", maxHeight: "calc(17rem - 39px)" }}
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Col>
            <Col
              xs={12}
              md={7}
              className="d-flex flex-column align-items-start product-page-col-text"
            >
              <span className="tx-size-xl" style={{ textAlign: "start" }}>
                {product.name}
              </span>
              <span className="tx-size-md py-2">USD{" $" + product.price}</span>
              {product.description && (
                <span className="tx-size-sm py-2" style={{ textAlign: "start" }}>
                  {product.description}
                </span>
              )}
              {/* <span className="tx-size-md view-product-span">Brand img</span> */}
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
            </Col>
          </Row>
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
