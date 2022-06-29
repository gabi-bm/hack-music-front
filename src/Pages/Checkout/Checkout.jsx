import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import AddressForm from "../../Components/AddressForm/AddressForm";
import PaymentForm from "../../Components/PaymentForm/PaymentForm";

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

  return (
    order && (
      <Container>
        <h1>Checkout</h1>
        <Row>
          <Col sm={12} md={8} xl={8}>
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
          <Col sm={12} md={4} xl={4} className="border-start bg-danger">
            <h4>Order details</h4>
            <ul style={{ paddingLeft: "0" }}>
              {order.products.map((item) => {
                return (
                  <li key={item.id}>
                    <div className="d-flex w-100 bg-primary py-2">
                      <span className="flex-grow-1">{item.name}</span>
                      <span style={{ width: "5rem", textAlign: "right" }}>${item.subtotal}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
            <span style={{ float: "right" }}>${order.totalPrice}</span>
          </Col>
        </Row>
      </Container>
    )
  );
};

export default Checkout;
