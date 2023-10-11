// import { Button } from "antd";
import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";
// import ThanksYou from "./ThanksYou";

const PayNow = () => {
  // const history = useHistory();
  const [amount, setAmount] = useState(0);
  const [email, setEmail] = useState("");

  const onSuccess = (reference) => {
    // history.push("/thanks");
    console.log(reference);
  };

  const onClose = () => {
    alert("having any issue?");
    console.log("closed");
  };

  const initializePayment = usePaystackPayment({
    reference: new Date().getTime(),
    email: email,
    amount: amount ,
    publicKey: "pk_test_5ca53f20c464ea3c97e93b0c6524952bc588cb18",
  });
  return (
    <div
      style={{
        marginTop: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            marginBottom: "10px",
          }}
        >
          {" "}
          You are giving ₦{amount / 100}{" "}
        </div>
        <input
          placeholder="Enter your Email"
          style={{
            width: "300px",
            padding: "10px 10px",
            marginBottom: "10px",
          }}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          placeholder="Amount"
          style={{
            width: "300px",
            padding: "10px 10px",
          }}
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>

      <div
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          marginTop: "30px",
        }}
      >
        Pay Now
      </div>
    </div>
  );
};

export default PayNow