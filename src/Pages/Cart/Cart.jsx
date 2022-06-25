import Footer from "../../Components/Footter/Footer";
import NavBar from "../../Components/Navbar/Navbar";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);

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
                <li key={cartItem.product.id}>
                  <span>{cartItem.product.name}</span>
                  <span>(x{cartItem.quantity})</span>
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
