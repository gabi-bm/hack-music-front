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
      setUser(response.data);
    };
    getUserInfo();
  }, []);

  return (
    user && (
      <>
        <NavBar />
        <div className="container rounded bg-white mt-5 mb-5 shadow">
          <Row className="row">
            <div className="col-md-3 border-end">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  className="rounded-circle mt-5"
                  width="150px"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                ></img>
                <span className="font-weight-bold">{user.firstName}</span>
                <span className="text-black-50">{user.email}</span>
                <span> </span>
              </div>
            </div>
            <div className="col-md-9 border-end">
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-end">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={user.firstName}
                    ></input>
                  </div>
                  <div className="col-md-6">
                    <label className="labels">Lastname</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={user.lastName}
                    ></input>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12 mt-1">
                    <label className="labels">Email ID</label>
                    <input type="email" className="form-control" defaultValue={user.email}></input>
                  </div>
                  <div className="col-md-12 mt-1">
                    <label className="labels">Phone Number</label>
                    <input type="number" className="form-control" defaultValue={user.phone}></input>
                  </div>
                  <div className="col-md-12 mt-1">
                    <label className="labels">Address Line 1</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={user.addresses[0].streetAddress}
                    ></input>
                  </div>

                  <div className="col-md-12 mt-1">
                    <label className="labels">Postal code</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={user.addresses[0].postalCode}
                    ></input>
                  </div>
                  <div className="col-md-12 mt-1">
                    <label className="labels">City</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={user.addresses[0].city}
                    ></input>
                  </div>
                  <div className="col-md-12 mt-1">
                    <label className="labels">Country</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={user.addresses[0].country}
                    ></input>
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <button className="btn bg-third-color custom-btn" type="button">
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4"></div>
          </Row>

          <Row className="mt-2 border-top">
            <h4 className="text-center">Orders</h4>
            <Table striped bordered hover variant="light">
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
                    <tr key={order._id}>
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
          </Row>
        </div>
        <Footer />
      </>
    )
  );
};

export default UserProfile;

{
  /* <>
        <NavBar />
        <ToastContainer />
        <Container classNameName=" mt-3 border rounded shadow">
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
          <Row classNameName="mt-3">
            <Col>
              <h3>Orders</h3>
             
            </Col>
          </Row>
        </Container>
        <Footer />
      </> */
}
