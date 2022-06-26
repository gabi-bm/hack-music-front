import Footer from "../../Components/Footter/Footer";
import NavBar from "../../Components/Navbar/Navbar";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProduct, deleteProduct, deleteCartItem } from "../../Redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const handleAddProduct = (product) => {
    dispatch(addProduct({ product }));
  };

  const handleDeleteProduct = (deletedItem) => {
    dispatch(deleteProduct({ deletedItem }));
  };

  const handleDeleteCartItem = (deletedItem) => {
    dispatch(deleteCartItem({ deletedItem }));
  };

  return (
    cart && (
      <div>
        <NavBar />
        <Container>
          <h1>Cart</h1>
          <ul>
            {cart.items.map((cartItem) => {
              console.log(cartItem);
              return (
                <li key={cartItem.product._id}>
                  <span>{cartItem.product.name}</span>
                  <span>(x{cartItem.quantity})</span>
                  <button
                    className="btn btn-secondary mx-2"
                    onClick={() => handleAddProduct(cartItem.product)}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-secondary mx-2"
                    onClick={() => handleDeleteProduct(cartItem)}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => handleDeleteCartItem(cartItem)}
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
          <span>Total price: ${cart.totalPrice}</span>
        </Container>
        <Footer />
      </div>
    )
  );
};

export default Cart;
