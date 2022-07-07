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
    <div className="py-3 product-cart-card">
      <div
        className="d-flex align-items-start justify-content-center cart-card-img-container"
        alt={cartItem.product.name}
      >
        <img
          src={cartItem.product.picture}
          style={{ maxHeight: "100%", maxWidth: "100%" }}
          alt={cartItem.product.name}
        ></img>
      </div>
      <div className="flex-grow-1 cart-card-text-container" style={{ position: "relative" }}>
        <span className="tx-size-lg cart-item-name d-block">{cartItem.product.name}</span>
        <span className="tx-size-md d-block">Quantity: {cartItem.quantity}</span>
        <span className="tx-size-md d-block">
          Subtotal: $ {cartItem.product.price * cartItem.quantity}
        </span>

        <div className="mt-2 p-0 cart-icon-delete-product">
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
      <div
        className="d-flex justify-content-end mt-2 cart-card-icons-container"
        style={{ color: "var(third-color)" }}
      >
        <FontAwesomeIcon
          icon={faMinus}
          onClick={() => {
            handleDeleteProduct(cartItem);
          }}
          className="cart-icon-minus custom-icon tx-third-color"
        />
        <FontAwesomeIcon
          icon={faPlus}
          onClick={() => handleAddProduct(cartItem.product)}
          className="custom-icon tx-third-color"
        />
      </div>
    </div>
  );
};

export default ProductCardCart;
