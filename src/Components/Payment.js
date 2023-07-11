import { Button, Form, Input, InputNumber, message } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { isValidDate } from "../Utils/Helpers";

const regexPattern = {
  MASTERCARD: /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/,
  VISA: /^4[0-9]{2,}$/,
  AMERICAN_EXPRESS: /^3[47][0-9]{5,}$/,
  DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{3,}$/,
  DINERS_CLUB: /^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/,
  JCB: /^(?:2131|1800|35[0-9]{3})[0-9]{3,}$/,
};

const Payment = () => {
  const [data, setData] = useState({
    ccNum: "",
    month: "",
    year: "",
    cvv: "",
  });

  const changeHandler = (e) => {
    setData((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  const personal = useSelector((state) => state.PersonalSliceReducer);
  const shipping = useSelector((state) => state.ShippingSliceReducer);

  const formHandler = (e) => {
    e.preventDefault();

    if (data.ccNum.length < 16 || isNaN(data.ccNum)) {
      alert("Please enter valid credit card number");
      return;
    }

    let isValid = false;

    for (let key in regexPattern) {
      if (regexPattern[key].test(data.ccNum)) {
        isValid = true;
        break;
      }
    }

    if (!isValid) {
      alert("Please recheck your credit card number");
      return;
    }

    if (data.month.length !== 2 || isNaN(data.month)) {
      alert("Please enter valid credit card number");
      return;
    }

    if (data.cvv.length !== 3 || isNaN(data.cvv)) {
      alert("Please enter valid CVV number");
      return;
    }

    if (data.year.length !== 4 || isNaN(data.year)) {
      alert("Please enter valid year");
      return;
    }

    if (!isValidDate(data.month, data.year)) {
      alert("Please enter valid future date");
      return;
    }

    console.log(personal, shipping, data);
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
      <form onSubmit={formHandler}>
        <Input
          value={data.ccNum}
          onChange={changeHandler}
          name="ccNum"
          type="number"
          maxLength={16}
          placeholder="credit num"
          required
        />
        <Input
          value={data.month}
          onChange={changeHandler}
          name="month"
          type="number"
          maxLength={2}
          placeholder="MM"
          required
        />
        <Input
          value={data.year}
          onChange={changeHandler}
          name="year"
          type="number"
          maxLength={4}
          placeholder="YYYY"
          required
        />
        <Input
          value={data.cvv}
          onChange={changeHandler}
          name="cvv"
          type="number"
          maxLength={3}
          placeholder="CVV"
          required
        />
        <Button type="submit">done</Button>
      </form>
      {/* <Form
        form={form}
        initialValues={val}
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
          <Input
            type="number"
            onChange={(e) => creditHandler(e.target.value)}
          />
        </Form.Item>
        <div style={{ display: "flex" }}>
          <Form.Item
            label="Expiration Date"
            name="expire"
            rules={[
              {
                required: true,
                message: "Required field and should be a valid future date.",
              },
              {
                max: 99,
                message: "Required field and should be a valid future date.",
              },
            ]}
          >
            <InputNumber
              onChange={(e) => setExpire(e.target.value)}
              placeholder="MM"
            />
          </Form.Item>

          <Form.Item
            name="expirey"
            rules={[
              {
                required: true,
                message: "Required field and should be a valid future date.",
              },
              {
                max: 9999,
                message: "Required field and should be a valid future date.",
              },
            ]}
          >
            <InputNumber
              onChange={(e) => setExpire(e.target.value)}
              placeholder="yyyy"
            />
          </Form.Item>
        </div>
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
          <InputNumber onChange={(e) => setCvv(e.target.value)} />
        </Form.Item>
        <button type="submit">next</button>
      </Form> */}
    </div>
  );
};

export default Payment;

// c. Payment Information step:
// Credit Card Number: Required field and should be a valid credit card number.
// Expiration Date: Required field and should be a valid future date.
// CVV: Required field and should be a valid CVV number.

// const regexPattern = {
//   MASTERCARD: /^5[1-5][0-9]{1,}|^2[2-7][0-9]{1,}$/,
//   VISA: /^4[0-9]{2,}$/,
//   AMERICAN_EXPRESS: /^3[47][0-9]{5,}$/,
//   DISCOVER: /^6(?:011|5[0-9]{2})[0-9]{3,}$/,
//   DINERS_CLUB: /^3(?:0[0-5]|[68][0-9])[0-9]{4,}$/,
//   JCB: /^(?:2131|1800|35[0-9]{3})[0-9]{3,}$/
//   };
