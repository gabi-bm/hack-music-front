import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import creditCards from "../../Images/paymentMethods/creditCards.png";
import payPal from "../../Images/paymentMethods/payPal.png";
import mercadoPago from "../../Images/paymentMethods/mercadoPago.png";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../../Redux/cartSlice";
import CreditCardForm from "../CreditCardForm/CreditCardForm";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useState } from "react";

const PaymentForm = ({ orderId, setModalShow }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [showCreditCardForm, setShowCreditCardForm] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const response = await axios.patch(
      process.env.REACT_APP_SERVER_URL + "/orders/" + orderId,
      data,
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      },
    );
    console.log(response.data);
    dispatch(resetCart());
    setModalShow(true);
    setTimeout(() => navigate("/checkout/paymentConfirmation"), 5000);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <span>Select payment method</span>

        <div className="d-flex flex-column align-items-start">
          <div style={{ maxWidth: "337px" }}>
            <div className="d-flex py-3 align-items-center" style={{ height: "5rem" }}>
              <input
                type="radio"
                id="credit-debit-card"
                {...register("paymentMethod")}
                value="credit or debit card"
                required
                onChange={() => setShowCreditCardForm(!showCreditCardForm)}
              ></input>
              <label htmlFor="credit-debit-card" className="mx-3">
                Credit / Debit card
              </label>
              <div className="d-flex align-items-center" style={{ width: "9rem" }}>
                <img
                  alt="credit-debit-card"
                  src={creditCards}
                  style={{ maxWidth: "100%", height: "auto", margin: "0" }}
                ></img>
              </div>
            </div>
            {showCreditCardForm && <CreditCardForm />}
            {/* <Alert severity="warning">
              <AlertTitle>Info</AlertTitle>
              Just in case, this is a fake form, your data will not be stored in the database :)
            </Alert> */}
          </div>
        </div>

        <div className="d-flex flex-column align-items-start">
          <div className="d-flex py-3 align-items-center" style={{ height: "5rem" }}>
            <input
              type="radio"
              id="mercado-pago"
              {...register("paymentMethod")}
              required
              value="mercado pago"
            ></input>
            <label htmlFor="mercado-pago" className="mx-3">
              Mercado Pago
            </label>
            <div className="d-flex align-items-center" style={{ width: "9rem" }}>
              <img
                alt="mercado-pago"
                src={mercadoPago}
                style={{ maxWidth: "100%", height: "auto", margin: "0" }}
              ></img>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column align-items-start">
          <div className="d-flex py-3 align-items-center" style={{ height: "5rem" }}>
            <input
              type="radio"
              id="paypal"
              {...register("paymentMethod")}
              value="paypal"
              required
            ></input>
            <label htmlFor="paypal" className="mx-3">
              PayPal
            </label>
            <div className="d-flex align-items-center" style={{ width: "9rem" }}>
              <img
                alt="paypal"
                src={payPal}
                style={{ maxWidth: "100%", height: "auto", margin: "0" }}
              ></img>
            </div>
          </div>
        </div>
        <Button variant="custom" type="submit" className="bg-third-color custom-btn my-3">
          Confirm payment
        </Button>
      </Form>
    </div>
  );
};

export default PaymentForm;
