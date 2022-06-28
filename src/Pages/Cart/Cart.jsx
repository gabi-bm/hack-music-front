import Footer from "../../Components/Footter/Footer";
import NavBar from "../../Components/Navbar/Navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProduct, deleteProduct, deleteCartItem, resetCart } from "../../Redux/cartSlice";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faTrashCan, faLock } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const notifyRemoveCart = () => toast("Product removed from cart!");

  const handleAddProduct = (product) => {
    dispatch(addProduct({ product }));
  };

  const handleDeleteProduct = (deletedItem) => {
    dispatch(deleteProduct({ deletedItem }));
  };

  const handleDeleteCartItem = (deletedItem) => {
    dispatch(deleteCartItem({ deletedItem }));
  };

  const handleResetCart = () => {
    dispatch(resetCart());
  };

  const handleCheckout = () => {
    const cartItems = cart.items.map((item) => {
      return { productId: item.product.id, quantity: item.quantity };
    });

    const response = axios.post(process.env.REACT_APP_SERVER_URL + "/orders", cartItems);
    console.log(response);
  };

  return cart.items.length > 0 ? (
    <div>
      <NavBar />
      <ToastContainer />
      <Container>
        <h1>Cart</h1>
        <Row className="p-3">
          <Col xs={8} className="border rounded shadow p-3">
            <ul>
              {cart.items.map((cartItem) => {
                return (
                  <li key={cartItem.product._id} className="border rounded ">
                    <Row>
                      <Col xs={3} className="p-3  me-3">
                        <img
                          src={cartItem.product.picture[0]}
                          alt={cartItem.product.name}
                          className="cart-img border-end"
                        />
                      </Col>
                      <Col className="p-3 pt-5">
                        <div>
                          <h6>{cartItem.product.name}</h6>
                          <div className="">
                            <span className="me-2">(Quantity: {cartItem.quantity})</span>
                            <FontAwesomeIcon
                              icon={faPlus}
                              onClick={() => handleAddProduct(cartItem.product)}
                              className="me-2"
                            />
                            <FontAwesomeIcon
                              icon={faMinus}
                              onClick={() => {
                                handleDeleteProduct(cartItem);
                              }}
                            />
                          </div>
                        </div>

                        <div className="mt-2 p-0">
                          <FontAwesomeIcon
                            icon={faTrashCan}
                            onClick={() => {
                              handleDeleteCartItem(cartItem);
                              notifyRemoveCart();
                            }}
                          />
                        </div>
                      </Col>
                    </Row>
                  </li>
                );
              })}
              <Button size="sm" onClick={handleResetCart} className="mt-2">
                Reset cart
              </Button>
            </ul>
          </Col>
          <Col className="border rounded shadow p-3">
            <span>Total price: ${cart.totalPrice}</span>
            <hr />
            <div className="mt-3">
              <Button onClick={() => handleCheckout()}>
                <FontAwesomeIcon icon={faLock} /> Procced to Checkout
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  ) : (
    <div>
      <NavBar />
      <Container>
        <h1>Cart</h1>

        <p>Your cart is empty.</p>
      </Container>
      <Footer />
    </div>
  );
};

export default Cart;
