import "./Login.css";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { Container, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey, faPlay } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";
import { loginUser } from "../../Redux/userSlice";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/Navbar/Navbar";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [credentialsMsg, setCredentialsMsg] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "user@user.com",
      password: "user",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(process.env.REACT_APP_SERVER_URL + "/tokens", data);
      dispatch(loginUser(response.data));
      if (response.status === 200) return navigate(-1);
    } catch (err) {
      setCredentialsMsg("Invalid credentials.");
    }
  };
  return (
    <div>
      {/* TODO: 
      Quizas armar una version de la NAV mas simplificada pero q almenos permita al usuario volver a la home */}
      <NavBar />
      <Container className="mt-5 p-4" style={{ maxWidth: "472px" }}>
        <Form onSubmit={handleSubmit(onSubmit)} className="border-bottom">
          <div className="d-flex justify-content-center align-items-center">
            <h1 className="me-3 tx-second-color">LOGIN</h1>
            <FontAwesomeIcon
              icon={faPlay}
              className="mb-2"
              style={{ transform: "scale(2.3)", color: "var(--third-color)" }}
            />
          </div>

          <Form.Group className="mb-3">
            <Form.Label className="tx-size-sm tx-second-color form-label-margin">Email</Form.Label>
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
                placeholder="Enter email"
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
                {...register("password", {
                  required: true,
                  maxLength: 30,
                })}
                type="password"
                placeholder="Enter your password"
                className="form-control ps-0"
              />
            </div>
          </Form.Group>
          {errors.email?.type === "required" && (
            <p className="custom-alert alert-danger fs-6" role="alert">
              Email field is required.
            </p>
          )}
          {errors.password?.type === "required" && (
            <p className="custom-alert alert-danger fs-6" role="alert">
              Password field is required.
            </p>
          )}
          {credentialsMsg && (
            <p className="custom-alert alert-danger fs-6" role="alert">
              {credentialsMsg}
            </p>
          )}

          <Button variant="custom" type="submit" className="bg-third-color custom-btn my-3">
            Login
          </Button>
        </Form>
        <div className="tx-third-color d-flex justify-content-start mt-3">
          <span className="tx-size-sm me-3">
            <Link to="/register" style={{ color: "inherit" }}>
              CREATE ACCOUNT
            </Link>
          </span>
          <span className="tx-size-sm">
            <Link to="/register" style={{ color: "inherit" }}>
              RESTORE PASSWORD
            </Link>
          </span>
        </div>
      </Container>
    </div>
  );
};

export default Login;
