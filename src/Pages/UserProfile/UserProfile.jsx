import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footter/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPencil, faKey, faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";

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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const response = await axios.patch(
      process.env.REACT_APP_SERVER_URL + "/users/" + user._id,
      data,
    );
    console.log(errors);
  };

  return (
    user && (
      <>
        <NavBar />
        <div className="container rounded bg-white mt-5 mb-5 shadow">
          <Row>
            <div className="col-md-3 border-end">
              <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                <img
                  className="rounded-circle mt-5"
                  width="150px"
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                ></img>
                <span className="font-weight-bold">{user.firstName}</span>
                <span className="text-black-50">{user.email}</span>
              </div>
            </div>
            <div className="col-md-9 border-end">
              <h3 className="text-center">Edit User Info</h3>
              <Form onSubmit={handleSubmit(onSubmit)} className="px-5">
                <Form.Group className="mb-3">
                  <Form.Label className="tx-size-sm tx-second-color form-label-margin">
                    Email
                  </Form.Label>
                  <div className="d-flex align-items-center">
                    <Form.Text className="form-icon-container">
                      <FontAwesomeIcon icon={faEnvelope} className="form-icon" />
                    </Form.Text>
                    <Form.Control
                      {...register("email", {
                        required: true,
                        maxLength: 30,
                      })}
                      type="email"
                      placeholder={user.email}
                      className="form-control ps-0"
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3 form-group-half">
                  <Form.Label className="tx-size-sm tx-second-color form-label-margin">
                    First Name
                  </Form.Label>
                  <div className="d-flex align-items-center">
                    <Form.Text className="form-icon-container">
                      <FontAwesomeIcon icon={faPencil} className="form-icon" />
                    </Form.Text>
                    <Form.Control
                      {...register("firstName", { required: true, maxLength: 30 })}
                      type="text"
                      placeholder={user.firstName}
                      className="form-control ps-0"
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3 form-group-half" style={{ float: "right" }}>
                  <Form.Label className="tx-size-sm tx-second-color form-label-margin">
                    Last Name
                  </Form.Label>
                  <div className="d-flex align-items-center">
                    <Form.Text className="form-icon-container">
                      <FontAwesomeIcon icon={faPencil} className="form-icon" />
                    </Form.Text>
                    <Form.Control
                      {...register("lastName", { required: true, maxLength: 30 })}
                      type="text"
                      placeholder={user.lastName}
                      className="form-control ps-0"
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="tx-size-sm tx-second-color form-label-margin">
                    Password
                  </Form.Label>
                  <div className="d-flex align-items-center">
                    <Form.Text className="form-icon-container">
                      <FontAwesomeIcon icon={faKey} className="form-icon" />
                    </Form.Text>
                    <Form.Control
                      {...register("password", { required: true, maxLength: 30 })}
                      type="password"
                      placeholder="Enter your password"
                      className="form-control ps-0"
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="tx-size-sm tx-second-color form-label-margin">
                    Password Confirmation
                  </Form.Label>
                  <div className="d-flex align-items-center">
                    <Form.Text className="form-icon-container">
                      <FontAwesomeIcon icon={faKey} className="form-icon" />
                    </Form.Text>
                    <Form.Control
                      {...register("passwordConfirmation", { required: true, maxLength: 30 })}
                      type="password"
                      placeholder="Enter your password (Confirm)"
                      className="form-control ps-0"
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="tx-size-sm tx-second-color form-label-margin">
                    Phone
                  </Form.Label>
                  <div className="d-flex align-items-center">
                    <Form.Text className="form-icon-container">
                      <FontAwesomeIcon icon={faPencil} className="form-icon" />
                    </Form.Text>
                    <Form.Control
                      {...register("phone", { required: true, maxLength: 30 })}
                      type="number"
                      placeholder={user.phone}
                      className="form-control ps-0"
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="tx-size-sm tx-second-color form-label-margin">
                    Address
                  </Form.Label>
                  <div className="d-flex align-items-center">
                    <Form.Text className="form-icon-container">
                      <FontAwesomeIcon icon={faPencil} className="form-icon" />
                    </Form.Text>
                    <Form.Control
                      {...register("address", { required: true, maxLength: 30 })}
                      type="text"
                      placeholder={user.addresses[0].streetAddress}
                      className="form-control ps-0"
                    />
                  </div>
                </Form.Group>

                {/* //ALERT MSGS */}
                {/* {errors.email?.type === "required" && (
            <p className="custom-alert alert-danger fs-6" role="alert">
              Email field is required.
            </p>
          )}
          {errors.firstName?.type === "required" && (
            <p className="custom-alert alert-danger fs-6" role="alert">
              First name field is required.
            </p>
          )}
          {errors.lastName?.type === "required" && (
            <p className="custom-alert alert-danger fs-6 " role="alert">
              Last name field is required.
            </p>
          )}
          {errors.password?.type === "required" && (
            <p className="custom-alert alert-danger fs-6" role="alert">
              Password field is required.
            </p>
          )}
          {errors.passwordConfirmation !== errors.password && (
            <p className="custom-alert alert-danger fs-6 " role="alert">
              Passwords don't match.
            </p>
          )} */}

                <Button
                  variant="custom"
                  type="submit"
                  className="bg-third-color custom-btn mt-3 ms-4 mb-3"
                >
                  Save changes
                </Button>
              </Form>
            </div>
          </Row>

          <Row className="mt-2 border-top">
            <h4 className="text-center">Orders</h4>
            <Table hover variant="light">
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
