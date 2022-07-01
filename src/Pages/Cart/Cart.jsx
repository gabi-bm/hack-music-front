import Footer from "../../Components/Footter/Footer";
import NavBar from "../../Components/Navbar/Navbar";
import ProductCardCart from "../../Components/ProductCardCart/ProductCardCart";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct, deleteProduct, deleteCartItem, resetCart } from "../../Redux/cartSlice";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import * as FaIcons from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  console.log(cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const notifyRemoveCart = () => toast("Product removed from cart!");
  const notifyNotLoggedIn = () =>
    toast.warn("You need to be logged in to proceed. Redirecting you to login page.");

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

  const handleCheckout = async () => {
    if (!user.accessToken) {
      notifyNotLoggedIn();
      setTimeout(() => navigate("/login"), 3000);
    }

    const cartItems = cart.items.map((item) => {
      return { productId: item.product._id, quantity: item.quantity };
    });

    const response = await axios.post(
      process.env.REACT_APP_SERVER_URL + "/orders",
      { cartItems },
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      },
    );

    navigate(`/checkout/${response.data._id}`);
  };

  return cart.items.length > 0 ? (
    <div>
      <NavBar />
      <ToastContainer />
      <Container className="py-5">
        <div className="d-flex justify-content-center align-items-center pb-5">
          <h1 className="pe-4" style={{ fontWeight: "200", textAlign: "center" }}>
            My Cart
          </h1>
          <FaIcons.FaShoppingCart
            className="icon-size"
            style={{ transform: "scale(2)", color: "var(--third-color)" }}
          />
        </div>

        <Row>
          <Col xs={12} md={12} lg={8} className="pt-3">
            <ul style={{ paddingLeft: "0" }}>
              {cart.items.map((cartItem) => {
                return (
                  <ProductCardCart
                    key={cartItem.product._id}
                    cartItem={cartItem}
                    handleAddProduct={handleAddProduct}
                    handleDeleteProduct={handleDeleteProduct}
                    handleDeleteCartItem={handleDeleteCartItem}
                    notifyRemoveCart={notifyRemoveCart}
                  />
                );
              })}
            </ul>
          </Col>
          <Col className="pt-3" style={{ backgroundColor: "var(--fourth-color)" }}>
            <div className="d-flex justify-content-between align-items-center pb-4">
              <h5 className="mb-0">Cart summary</h5>
              <Button
                variant="custom"
                size="sm"
                onClick={handleResetCart}
                style={{ backgroundColor: "none", color: "var(--third-color)" }}
              >
                Reset cart
              </Button>
            </div>
            <Table style={{ textAlign: "right" }} responsive>
              <thead>
                <tr>
                  <th style={{ textAlign: "left" }}>Product</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {cart.items.map((cartItem) => {
                  return (
                    <tr key={cartItem.product._id}>
                      <td style={{ textAlign: "left" }}>{cartItem.product.name}</td>
                      <td>{cartItem.quantity}</td>
                      <td>${cartItem.product.price * cartItem.quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={3} className="px-2 py-2" style={{ fontWeight: "700" }}>
                    Total: ${cart.totalPrice}
                  </td>
                </tr>
              </tfoot>
            </Table>
            <Button
              variant="custom"
              className="custom-btn"
              style={{ float: "right" }}
              onClick={() => handleCheckout()}
            >
              <FontAwesomeIcon icon={faLock} /> Procced to Checkout
            </Button>
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
