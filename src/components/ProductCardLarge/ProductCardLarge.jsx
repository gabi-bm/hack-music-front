import { Button } from "react-bootstrap";

const ProductCardLarge = ({ product, handleAddProduct, notify }) => {
  return (
    <div className="d-flex border" style={{ height: "270px", padding: "40px 45px" }}>
      <div
        className="border-end"
        style={{ minWidth: "250px", height: "100%", paddingRight: "45px" }}
      >
        <img src={product.picture} style={{ maxWidth: "auto", maxHeight: "100%" }}></img>
      </div>
      <div className="flex-grow-1" style={{ paddingLeft: "45px" }}>
        <div className="d-flex flex-column align-items-start">
          <span className="tx-size-xl">{product.name}</span>
          <span className="tx-size-sm py-2" style={{ textAlign: "start" }}>
            {product.description.slice(0, 300) + "..."}
          </span>
          <span className="tx-size-md py-2">USD{" $" + product.price}</span>
          <span className="tx-size-md view-product-span">View product {">"}</span>
          {product.stock > 0 ? (
            <Button
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
  );
};

export default ProductCardLarge;
