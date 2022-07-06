import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const ProductCardCart = ({
  cartItem,
  handleAddProduct,
  handleDeleteProduct,
  handleDeleteCartItem,
  notifyRemoveCart,
}) => {
  return (
    <div
      className="d-flex align-items-start"
      style={{ height: "150px", padding: "15px 45px", paddingLeft: "0" }}
    >
      <div
        className="border-end d-flex align-items-center justify-content-center"
        style={{
          width: "180px",
          maxWidth: "180px",
          minWidth: "180px",
          height: "100%",
          paddingRight: "45px",
        }}
        alt={cartItem.product.name}
      >
        <img
          src={cartItem.product.picture}
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          alt={cartItem.product.name}
        ></img>
      </div>
      <div className="flex-grow-1" style={{ paddingLeft: "45px" }}>
        <div className="d-flex flex-column align-items-start">
          <span className="tx-size-xl">{cartItem.product.name}</span>
          <span className="me-2 my-2">Quantity: {cartItem.quantity}</span>
          <span>Subtotal: $ {cartItem.product.price * cartItem.quantity}</span>

          <div className="mt-2 p-0">
            <FontAwesomeIcon
              icon={faTrashCan}
              onClick={() => {
                handleDeleteCartItem(cartItem);
                notifyRemoveCart();
              }}
              className="custom-icon"
            />
          </div>
        </div>
      </div>
      <div
        className="d-flex justify-content-end mt-2"
        style={{ minWidth: "4.5rem", color: "var(--third-color)" }}
      >
        <FontAwesomeIcon
          icon={faMinus}
          onClick={() => {
            handleDeleteProduct(cartItem);
          }}
          className="me-3 custom-icon"
        />
        <FontAwesomeIcon
          icon={faPlus}
          onClick={() => handleAddProduct(cartItem.product)}
          className="custom-icon"
        />
      </div>
    </div>
  );
};

export default ProductCardCart;
