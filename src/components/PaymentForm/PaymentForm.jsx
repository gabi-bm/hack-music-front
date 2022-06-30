import { Form, Input, InputGroup, FormControl, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import creditCards from "../../Images/paymentMethods/creditCards.png";
import payPal from "../../Images/paymentMethods/payPal.png";
import mercadoPago from "../../Images/paymentMethods/mercadoPago.png";
import { useNavigate } from "react-router-dom";

const PaymentForm = ({ orderId }) => {
  const user = useSelector((state) => state.user);
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
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <span>Select payment method</span>

        <div className="d-flex flex-column align-items-start">
          <div className="d-flex py-3 align-items-center" style={{ height: "5rem" }}>
            <input
              type="radio"
              id="credit-debit-card"
              {...register("paymentMethod")}
              value="credit or debit card"
            ></input>
            <label for="credit-debit-card" className="mx-3">
              Credit / Debit card
            </label>
            <div className="d-flex align-items-center" style={{ width: "9rem" }}>
              <img
                src={creditCards}
                style={{ maxWidth: "100%", height: "auto", margin: "0" }}
              ></img>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column align-items-start">
          <div className="d-flex py-3 align-items-center" style={{ height: "5rem" }}>
            <input
              type="radio"
              id="mercado-pago"
              {...register("paymentMethod")}
              value="mercado pago"
            ></input>
            <label for="mercado-pago" className="mx-3">
              Mercado Pago
            </label>
            <div className="d-flex align-items-center" style={{ width: "9rem" }}>
              <img
                src={mercadoPago}
                style={{ maxWidth: "100%", height: "auto", margin: "0" }}
              ></img>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column align-items-start">
          <div className="d-flex py-3 align-items-center" style={{ height: "5rem" }}>
            <input type="radio" id="paypal" {...register("paymentMethod")} value="paypal"></input>
            <label for="paypal" className="mx-3">
              PayPal
            </label>
            <div className="d-flex align-items-center" style={{ width: "9rem" }}>
              <img src={payPal} style={{ maxWidth: "100%", height: "auto", margin: "0" }}></img>
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
