import React from "react";
import PersonalDetail from "../Components/PersonalDetail";

import { Button, message, Steps, theme } from "antd";
import { useState } from "react";
import Shipping from "../Components/Shipping";
import Payment from "../Components/Payment";

const Multstep = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  //   const prev = () => {
  //     setCurrent(current - 1);
  //   };

  const steps = [
    {
      title: "First",
      content: <PersonalDetail setCurrent={next} />,
    },
    {
      title: "Second",
      content: <Shipping setCurrent={next} />,
    },
    {
      title: "Last",
      content: <Payment />,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <div style={{ padding: "5rem" }}>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      {/* <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: "0 8px",
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
      </div> */}
    </div>
  );
};
export default Multstep;
