import { Form, Input, InputGroup, FormControl, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import axios from "axios";

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
            placeholder="Credit number"
            className="ps-0"
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
            className="ps-0"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            {...register("creditCardValidThru", {
              required: true,
              maxLength: 40,
            })}
            type="text"
            placeholder="Valid Thru"
            className="ps-0"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            {...register("creditCardCvc", {
              required: true,
              maxLength: 3,
            })}
            type="text"
            placeholder="CVC"
            className="ps-0"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default CreditCardForm;
