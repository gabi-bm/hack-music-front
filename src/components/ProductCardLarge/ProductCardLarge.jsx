import { Row, Col, Button } from "react-bootstrap";
import "./ProductCardLarge.css";

const ProductCardLarge = ({ product, handleAddProduct, notify }) => {
  return (
    <Row className="border product-card-large" style={{ minHeight: "12rem", padding: "40px 45px" }}>
      <Col xs={12} md={3} className="product-page-col-pic">
        <div style={{ width: "100%", height: "100%", maxHeight: "12rem" }}>
          <img src={product.picture} style={{ maxWidth: "100%", maxHeight: "100%" }}></img>
        </div>
      </Col>
      <Col xs={12} md={9} className="d-flex flex-column align-items-start product-page-col-text">
        <span className="tx-size-xl" style={{ textAlign: "start" }}>
          {product.name}
        </span>
        <span className="tx-size-md py-2">USD{" $" + product.price}</span>
        {product.description && (
          <span className="tx-size-sm py-2" style={{ textAlign: "start" }}>
            {product.description.slice(0, 300) + "..."}
          </span>
        )}
        <span className="tx-size-md view-product-span view-product py-2">View product {">"}</span>
        {product.stock > 0 ? (
          <Button
            className="cart-button"
            type="button"
            onClick={(e) => {
              e.preventDefault();
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
  );
};

export default ProductCardLarge;
