import Footer from "../../components/Footter/Footer";
import NavBar from "../../components/Navbar/Navbar";
import ProductCardCart from "../../components/ProductCardCart/ProductCardCart";
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct, deleteProduct, deleteCartItem, resetCart } from "../../Redux/cartSlice";
import "./Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import * as FaIcons from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

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

    dispatch(resetCart());
    navigate(`/checkout/${response.data._id}`);
  };

  return cart.items.length > 0 ? (
    <div>
      <NavBar />
      <ToastContainer />
      <Container className="py-5">
        <div className="d-flex justify-content-center align-items-center pb-5 mt-3">
          <h1 className="pe-4 " style={{ fontWeight: "300", textAlign: "center" }}>
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
          <Col className="p-3" style={{ backgroundColor: "var(--fourth-color)" }}>
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
                  <td
                    colSpan={3}
                    className="px-2 py-2"
                    style={{ fontWeight: "700", borderBottom: "none" }}
                  >
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
    <div style={{ minHeight: "100vh" }} className="d-flex flex-column">
      <NavBar />
      <Container>
        <div className="d-flex justify-content-center align-items-center pb-5 mt-3">
          <h1 className="pe-4 " style={{ fontWeight: "400", textAlign: "center" }}>
            My Cart
          </h1>
          <FaIcons.FaShoppingCart
            className="icon-size"
            style={{ transform: "scale(2)", color: "var(--third-color)" }}
          />
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center pb-5">
          <h3 className="text-center mb-5" style={{ fontWeight: "300", textAlign: "center" }}>
            Oh no! <br /> It seems like your cart is empty.
          </h3>
          <div>
            <Button
              variant="custom"
              className="custom-btn"
              style={{ float: "right" }}
              onClick={() => navigate("/")}
            >
              <FontAwesomeIcon icon={faCartPlus} /> Continue shopping!
            </Button>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Cart;
