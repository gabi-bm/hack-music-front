import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footter/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { ToastContainer } from "react-toastify";
import axios from "axios";

const UserProfile = () => {
  const storeUser = useSelector((state) => state.user);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await axios.get(process.env.REACT_APP_SERVER_URL + "/users/" + storeUser.id);
      console.log(response.data);
      setUser(response.data);
    };
    getUserInfo();
  }, []);

  return (
    user && (
      <>
        <NavBar />
        <ToastContainer />
        <Container className=" mt-3 border rounded shadow">
          <Row>
            <Col>
              FULL NAME: {user.firstName} {user.lastName}
            </Col>
          </Row>
          <Row>
            <Col>EMAIL: {user.email}</Col>
            <Col>PHONE: {user.phone}</Col>
          </Row>
          <Row>
            <Col>ADRESSES: </Col>
          </Row>
          <Row>
            <Col>PASSWORD</Col>
            <Col>CHANGE PASSWORD</Col>
          </Row>
          <Row className="mt-3">
            <Col>
              <h3>Orders</h3>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Products</th>
                    <th>Status</th>
                    <th>Total price</th>
                  </tr>
                </thead>
                <tbody>
                  {user.orders.map((order) => {
                    return (
                      <tr>
                        <td>{order._id}</td>
                        <td>
                          {order.products.map((product) => (
                            <p>{product.name}</p>
                          ))}
                        </td>
                        <td>{order.status}</td>
                        <td>$ {order.totalPrice}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    )
  );
};

export default UserProfile;
