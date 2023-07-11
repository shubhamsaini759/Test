import { Form, Input } from "antd";

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { PersonalSliceActions } from "../Store";

const PersonalDetail = ({ setCurrent }) => {
  const [form] = Form.useForm();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userSkills, setUserSkills] = useState("");

  const dispatch = useDispatch();

  const submitHandler = () => {
    setCurrent();
    dispatch(PersonalSliceActions.Name({ name: userName }));
    dispatch(PersonalSliceActions.Email({ email: userEmail }));
    dispatch(PersonalSliceActions.Skill({ skill: userSkills }));
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
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input onChange={(e) => setUserName(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Required field and should be a valid email address.",
            },
          ]}
        >
          <Input onChange={(e) => setUserEmail(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Skills"
          name="skills"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input onChange={(e) => setUserSkills(e.target.value)} />
        </Form.Item>
        <button type="submit">next</button>
      </Form>
    </div>
  );
};

export default PersonalDetail;

// a. User Information step:
// Full Name: Required field.
// Email: Required field and should be a valid email address.
// Skills: User can add skills (initially 1 input box will be shown) user may add more skills by clicking “add more” button or can remove skills
