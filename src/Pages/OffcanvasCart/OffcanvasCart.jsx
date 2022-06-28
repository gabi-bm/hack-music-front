import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProduct, deleteProduct, deleteCartItem } from "../../Redux/cartSlice";

const OffcanvasCart = () => {
  const cart = useSelector((state) => state.cart);

  //Offcanvas state
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    cart && (
      <>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you have chosen. Like,
            text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    )
  );
};

export default OffcanvasCart;
