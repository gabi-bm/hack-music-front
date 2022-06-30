import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Table } from "react-bootstrap";
import AddressForm from "../../Components/AddressForm/AddressForm";
import PaymentForm from "../../Components/PaymentForm/PaymentForm";
import NavBar from "../../Components/Navbar/Navbar";

const Checkout = () => {
  const params = useParams();
  const [order, setOrder] = useState(null);
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const getOrder = async () => {
      const response = await axios.get(
        process.env.REACT_APP_SERVER_URL + "/orders/" + params.orderId,
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
          },
        },
      );
      console.log(response.data);
      setOrder(response.data);
    };
    getOrder();
  }, []);

  // UseEffect para traer las imagenes una vez que se cargue order

  return (
    order && (
      <>
        <NavBar />
        <Container className="py-5">
          <div className="pb-3">
            <h1>Checkout</h1>
            <small>Order #{order._id}</small>
          </div>
          <Row className="gx-5 border-top">
            <Col sm={12} md={6} xl={6} className="pt-3">
              <div>
                <h4>Address</h4>
                {console.log(order.buyer.addresses)}
                <AddressForm addresses={order.buyer.addresses} orderId={order._id} />
              </div>
              <div className="my-5">
                <h4>Payment</h4>
                <PaymentForm orderId={order._id} />
              </div>
            </Col>
            <Col sm={12} md={6} xl={6} className="border-start pt-3">
              <h4>Order details</h4>
              <div>
                <h5>Personal data</h5>
                <div>
                  <span>Firstname:</span>
                  <span>{order.buyer.firstName}</span>
                </div>
                <div>
                  <span>Lastname:</span>
                  <span>{order.buyer.lastName}</span>
                </div>
                <div>
                  <span>Email:</span>
                  <span>{order.buyer.email}</span>
                </div>
                <div>
                  <span>Phone number:</span>
                  <span>{order.buyer.phone}</span>
                </div>
              </div>

              <div className="py-4">
                <h5>Order summary</h5>
                <Table style={{ textAlign: "right" }} responsive>
                  <thead>
                    <tr>
                      <th style={{ textAlign: "left" }}>Product</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.products.map((item) => {
                      return (
                        <tr>
                          <td style={{ textAlign: "left" }}>{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>${item.subtotal}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <td colSpan={3} className="px-2" style={{ fontWeight: "700" }}>
                      Total: ${order.totalPrice}
                    </td>
                  </tfoot>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    )
  );
};

export default Checkout;
