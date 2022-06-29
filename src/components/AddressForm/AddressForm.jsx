import { Form, Input, InputGroup, FormControl, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const AddressForm = ({ addresses, orderId }) => {
  const user = useSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const response = await axios.patch(
      process.env.REACT_APP_SERVER_URL + "/orders/" + orderId,
      { address: data },
      {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      },
    );
    console.log(response.data);
    console.log("hola");
  };

  const [existingAddress, setExistingAddress] = useState(true);

  const handleSetValues = (e) => {
    if (e.target.value === "newAddress") {
      setExistingAddress(false);
      reset({ streetAddress: "", city: "", country: "", postalCode: "" });
      return;
    }

    setExistingAddress(true);
    const selectedAddress = addresses.find((address) => address._id === e.target.value);
    setValue("streetAddress", `${selectedAddress.streetAddress}`);
    setValue("city", `${selectedAddress.city}`);
    setValue("country", `${selectedAddress.country}`);
    setValue("postalCode", `${selectedAddress.postalCode}`);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Select className="my-3" onChange={(e) => handleSetValues(e)}>
          <option disabled>Choose an address or add new one</option>
          <option value="newAddress">Add new address</option>
          <option value={addresses[0]._id}>{addresses[0].streetAddress}</option>
        </Form.Select>

        <Form.Group className="mb-3">
          <Form.Label className="tx-size-sm tx-second-color">Street Address</Form.Label>
          <div className="d-flex align-items-center">
            <Form.Control
              {...register("streetAddress", {
                required: true,
                maxLength: 40,
              })}
              type="text"
              placeholder="House number and street name"
              className="form-control ps-0"
              disabled={existingAddress ? true : false}
            />
          </div>
        </Form.Group>

        <div className="d-flex justify-content-between">
          <Form.Group className="mb-3 d-inline-block" style={{ width: "30%" }}>
            <Form.Label className="tx-size-sm tx-second-color">City</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Control
                {...register("city", {
                  required: true,
                  maxLength: 40,
                })}
                type="text"
                placeholder=""
                className="form-control ps-0"
                disabled={existingAddress ? true : false}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3 d-inline-block" style={{ width: "30%" }}>
            <Form.Label className="tx-size-sm tx-second-color">Country</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Control
                {...register("country", {
                  required: true,
                  maxLength: 40,
                })}
                type="text"
                placeholder=""
                className="form-control ps-0"
                disabled={existingAddress ? true : false}
              />
            </div>
          </Form.Group>

          <Form.Group className="mb-3 d-inline-block" style={{ width: "30%" }}>
            <Form.Label className="tx-size-sm tx-second-color">Postal Code</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Control
                {...register("postalCode", {
                  required: true,
                  maxLength: 40,
                })}
                type="text"
                placeholder=""
                className="form-control ps-0"
                disabled={existingAddress ? true : false}
              />
            </div>
          </Form.Group>
        </div>

        <Button type="submit">Confirm address</Button>
      </Form>
    </div>
  );
};

export default AddressForm;
