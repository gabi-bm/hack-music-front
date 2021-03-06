import "./PaymentConfirmation.css";
import { Button, Container } from "react-bootstrap";
import NavBar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const PaymentConfirmation = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavBar />
      <Container>
        <div
          style={{ height: "calc(100vh - 65px)" }}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <FontAwesomeIcon
            icon={faCheck}
            style={{ color: "var(--third-color)", transform: "scale(6)" }}
          />
          <h1 className="mt-5 payment-confirmation-title">Thank you!</h1>
          <p className="mb-4 payment-confirmation-text">
            Your payment was successfully received. Please check your email for further details
            about the order.
          </p>
          <Button onClick={() => navigate("/")} variant="custom" className="custom-btn mt-3">
            Return Home
          </Button>
        </div>
      </Container>
    </>
  );
};

export default PaymentConfirmation;
