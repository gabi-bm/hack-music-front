import { Button } from "react-bootstrap";
import "./ProductCardLarge.css";

const ProductCardLarge = ({ product, handleAddProduct, notify }) => {
  return (
    <div
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
      >
        <img
          src={product.picture}
          style={{ maxWidth: "auto", maxHeight: "100%", maxWidth: "100%" }}
        ></img>
      </div>
      <div className="flex-grow-1 prueba" style={{ paddingLeft: "45px" }}>
        <div className="d-flex flex-column align-items-start prueba2">
          <span className="tx-size-xl">{product.name}</span>
          <span className="tx-size-sm py-2" style={{ textAlign: "start" }}>
            {product.description.slice(0, 300) + "..."}
          </span>
          <span className="tx-size-md pt-2">USD{" $" + product.price}</span>
          <span className="tx-size-md view-product-span view-product py-2">View product {">"}</span>
          {product.stock > 0 ? (
            <Button
              variant="custom"
              className="custom-btn"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleAddProduct(product);
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
  );
};

export default ProductCardLarge;
