import { Form, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ShippingSliceActions } from "../Store";

const Shipping = ({ setCurrent }) => {
  const [form] = Form.useForm();
  const [add, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");

  const dispatch = useDispatch();

  const submitHandler = () => {
    dispatch(ShippingSliceActions.Address({ add: add }));
    dispatch(ShippingSliceActions.City({ city: city }));
    dispatch(ShippingSliceActions.Postal({ post: postal }));
    setCurrent();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginTop: "5rem" }}>Personal Details</h1>
      <Form
        form={form}
        onFinish={submitHandler}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          width: "20rem",
        }}
      >
        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your address!",
            },
          ]}
        >
          <Input onChange={(e) => setAddress(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="City"
          name="city"
          rules={[
            {
              required: true,
              message: "Please input your City!",
            },
          ]}
        >
          <Input onChange={(e) => setCity(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Postal"
          name="postal"
          rules={[
            {
              required: true,
              message: "equired field and should be a valid postal code.",
            },
          ]}
        >
          <Input onChange={(e) => setPostal(e.target.value)} />
        </Form.Item>
        <button type="submit">next</button>
      </Form>
    </div>
  );
};

export default Shipping;

// b. Shipping Details step:
// Address: Required field.
// City: Required field.
// Postal Code: Required field and should be a valid postal code.
