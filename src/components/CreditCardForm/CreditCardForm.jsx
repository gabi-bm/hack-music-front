import { Form, Input, InputGroup, FormControl, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./CreditCardForm.css";

const CreditCardForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // const response = await axios.patch(
    //   process.env.REACT_APP_SERVER_URL + "/orders/" + orderId,
    //   { address: data },
    //   {
    //     headers: {
    //       Authorization: `Bearer ${user.accessToken}`,
    //     },
    //   },
    // );
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Control
            {...register("creditCardNumber", {
              required: true,
              maxLength: 16,
            })}
            type="text"
            placeholder="Credit card number"
            className="credit-card-input"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            {...register("creditCardName", {
              required: true,
              maxLength: 40,
            })}
            type="text"
            placeholder="Name"
            className="credit-card-input"
          />
        </Form.Group>
        <Form.Group className="mb-3 d-inline-block" style={{ width: "47%" }}>
          <Form.Control
            {...register("creditCardValidThru", {
              required: true,
              maxLength: 40,
            })}
            type="text"
            placeholder="Valid Thru"
            className="credit-card-input"
          />
        </Form.Group>
        <Form.Group className="mb-3 d-inline-block" style={{ width: "47%", float: "right" }}>
          <Form.Control
            {...register("creditCardCvc", {
              required: true,
              maxLength: 3,
            })}
            type="text"
            placeholder="CVC"
            className="credit-card-input d-inline"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default CreditCardForm;
