import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col, Table } from "react-bootstrap";
import AddressForm from "../../Components/AddressForm/AddressForm";
import PaymentForm from "../../Components/PaymentForm/PaymentForm";
import NavBar from "../../Components/Navbar/Navbar";
import ProcessingPaymentModal from "../../Components/ProcessingPaymentModal/ProcessingPaymentModal";

const Checkout = () => {
  const params = useParams();
  const user = useSelector((state) => state.user);
  const [order, setOrder] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);

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
      setOrder(response.data);
    };
    getOrder();
  }, []);

  // UseEffect para traer las imagenes una vez que se cargue order

  const handleShowAddress = (address) => {
    setSelectedAddress(address);
  };

  return (
    order && (
      <>
        <ProcessingPaymentModal show={modalShow} onHide={() => setModalShow(false)} />

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
                <AddressForm
                  addresses={order.buyer.addresses}
                  orderId={order._id}
                  handleShowAddress={handleShowAddress}
                />
              </div>
              <div className="my-5">
                <h4>Payment</h4>
                <PaymentForm orderId={order._id} setModalShow={setModalShow} />
              </div>
            </Col>
            <Col sm={12} md={6} xl={6} className="border-start pt-3">
              <h4>Order details</h4>
              <div className="py-3">
                <h5 style={{ fontWeight: "200", color: "var(--third-color)" }}>Personal data</h5>
                <span className="d-block">Firstname: {order.buyer.firstName}</span>
                <span className="d-block">Firstname: {order.buyer.firstName}</span>
                <span className="d-block">Lastname: {order.buyer.lastName}</span>
                <span className="d-block">Email: {order.buyer.email}</span>
                <span className="d-block">Phone number: {order.buyer.phone}</span>
              </div>

              <h5 style={{ fontWeight: "200", color: "var(--third-color)" }}>Address</h5>

              {!selectedAddress ? (
                <span>Please confirm an address</span>
              ) : (
                <div>
                  <span className="d-block">Street address: {selectedAddress.streetAddress}</span>
                  <span className="d-block">City: {selectedAddress.city}</span>
                  <span className="d-block">Country: {selectedAddress.country}</span>
                  <span className="d-block">Postal Code: {selectedAddress.postalCode}</span>
                </div>
              )}

              <div className="py-4">
                <h5 style={{ fontWeight: "200", color: "var(--third-color)" }}>Order summary</h5>
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
                        <tr key={item.id}>
                          <td style={{ textAlign: "left" }}>{item.name}</td>
                          <td>{item.quantity}</td>
                          <td>${item.subtotal}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tfoot>
                    <tr style={{ border: "none" }}>
                      <td colSpan={3} className="px-2 py-2" style={{ fontWeight: "700" }}>
                        Total: ${order.totalPrice}
                      </td>
                    </tr>
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
