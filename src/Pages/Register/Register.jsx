import "./Register.css";
import { useForm } from "react-hook-form";

import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPencil, faKey, faHeadphonesSimple } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios.post(process.env.REACT_APP_SERVER_URL + "/users", data);
  };

  return (
    <div>
      {/* navbar solo con el logo */}
      <Container className="mt-5" style={{ maxWidth: "760px" }}>
        <div className="d-flex justify-content-center align-items-center">
          <h1 className="me-4 tx-second-color">REGISTER</h1>
          <FontAwesomeIcon
            icon={faHeadphonesSimple}
            className="mb-2"
            style={{ transform: "scale(2.3)", color: "var(--third-color)" }}
          />
        </div>
        <Form onSubmit={handleSubmit(onSubmit)} className="px-5">
          <Form.Group className="mb-3">
            <Form.Label className="tx-size-sm tx-second-color form-label">Email</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Text className="form-icon-container">
                <FontAwesomeIcon icon={faEnvelope} className="form-icon" />
              </Form.Text>
              <Form.Control
                {...register("email")}
                type="email"
                placeholder="Enter email"
                className="form-control ps-0"
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3 form-group-half">
            <Form.Label className="tx-size-sm tx-second-color form-label">First Name</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Text className="form-icon-container">
                <FontAwesomeIcon icon={faPencil} className="form-icon" />
              </Form.Text>
              <Form.Control
                {...register("firstName")}
                type="text"
                placeholder="Enter First Name"
                className="form-control ps-0"
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3 form-group-half" style={{ float: "right" }}>
            <Form.Label className="tx-size-sm tx-second-color form-label">Last Name</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Text className="form-icon-container">
                <FontAwesomeIcon icon={faPencil} className="form-icon" />
              </Form.Text>
              <Form.Control
                {...register("lastName")}
                type="text"
                placeholder="Enter Last Name"
                className="form-control ps-0"
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="tx-size-sm tx-second-color form-label">Password</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Text className="form-icon-container">
                <FontAwesomeIcon icon={faKey} className="form-icon" />
              </Form.Text>
              <Form.Control
                {...register("password")}
                type="password"
                placeholder="Enter your password"
                className="form-control ps-0"
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="tx-size-sm tx-second-color form-label">
              Password Confirmation
            </Form.Label>
            <div className="d-flex align-items-center">
              <Form.Text className="form-icon-container">
                <FontAwesomeIcon icon={faKey} className="form-icon" />
              </Form.Text>
              <Form.Control
                {...register("passwordConfirmation")}
                type="password"
                placeholder="Enter your password (Confirm)"
                className="form-control ps-0"
              />
            </div>
          </Form.Group>

          <Form.Group className="mt-5">
            <div className="d-flex align-items-center">
              <input type="checkbox" className="flex-grow-2 form-icon"></input>
              <Form.Text
                className="tx-size-sm tx-second-color form-label flex-grow-2 "
                style={{ marginLeft: "12px" }}
              >
                I have read and agree to the terms of use and privacy policy.
              </Form.Text>
            </div>
          </Form.Group>

          <div className="tx-third-color d-flex justify-content-end my-4">
            <span className="tx-size-xs me-3">TERMS OF USE</span>
            <span className="tx-size-xs">PRIVACY AND POLICY</span>
          </div>

          <Button variant="custom" type="submit" className="bg-third-color custom-btn">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
