import { Form, Input, InputGroup, FormControl, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const PaymentForm = ({ orderId }) => {
  const user = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
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
        <div className="d-flex flex-column align-items-start ms-4">
          <Form.Check
            {...register("paymentMethod")}
            type="radio"
            label="Credit Card"
            value="credit card"
          />
          <Form.Check
            {...register("paymentMethod")}
            type="radio"
            label="Mercado Pago"
            value="mercado pago"
          />
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default PaymentForm;
