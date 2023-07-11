import { Form, Input } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const Payment = () => {
  const [form] = Form.useForm();
  const [credit, setCredit] = useState("");
  const [expire, setExpire] = useState("");
  const [cvv, setCvv] = useState("");

  const personal = useSelector((state) => state.PersonalSliceReducer);
  const shipping = useSelector((state) => state.ShippingSliceReducer);

  const submitHandler = () => {
    console.log(personal, shipping, {
      creditNumber: credit,
      expireDate: expire,
      CVV: cvv,
    });
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
          label="Credit Card Number"
          name="credit"
          rules={[
            {
              required: true,
              message: "Should be a valid card number",
            },
          ]}
        >
          <Input onChange={(e) => setCredit(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Expiration Date"
          name="expire"
          rules={[
            {
              required: true,
              message: "Required field and should be a valid future date.",
            },
          ]}
        >
          <Input onChange={(e) => setExpire(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Cvv"
          name="cvv"
          rules={[
            {
              required: true,
              message: "Required field and should be a valid CVV number",
            },
          ]}
        >
          <Input onChange={(e) => setCvv(e.target.value)} />
        </Form.Item>
        <button type="submit">next</button>
      </Form>
    </div>
  );
};

export default Payment;

// c. Payment Information step:
// Credit Card Number: Required field and should be a valid credit card number.
// Expiration Date: Required field and should be a valid future date.
// CVV: Required field and should be a valid CVV number.
