import React, { useState, Fragment, useRef, useEffect } from "react";
import { AiFillInfoCircle, AiOutlineCheck } from "react-icons/ai";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { verifyUser } from "../Api/Api"
import OtpInput from 'react-otp-input';
import "../../App.css"

const OtpPage = () => {
  const navigate = useNavigate()

  const [otp, setOtp] = useState("");
  const check = JSON.parse(localStorage.getItem("user"))
  
  const sendOTP = useMutation({
    mutationFn: verifyUser,
    onSuccess: () => {
      if (check.isSeller === true) {
        navigate("/auth/personalinfo")
      }
    },
    onError: () => {
      navigate("/auth/otperror")
    }
  })

  const handleSubmit = () => {
    const id = check._id
    sendOTP.mutate({id, otp})
  }
  // console.log( check)
  
  return (
    <Container>
      <Card>
        <Icon>OTP Verification!</Icon>
        <Text>Please enter the OTP you received</Text>
        <OtpInput
          style={{border: "1px solid gold"}}
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={ <span> </span> }
          renderInput={ (props) => <input { ...props } /> }
          containerStyle={"containerStyle"}
          inputStyle={"inputStyle"}
          width="70px"
        />
        <Button>
          <button onClick={handleSubmit}>Enter</button>
        </Button>
      </Card>
    </Container>
  );
};

export default OtpPage;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
const Card = styled.div`
  /* width: 280px; */
  /* height: 150px; */
  /* border: 1.8px solid #d975c0; */
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;

  .just-display{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Icon = styled.div`
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 10px;
`;
const Button = styled.div`
  width: 40%;
  button {
    flex: 1;
    background-color: #d975c0;
    color: white;
    font-size: 13px;
    padding: 10px 0;
    width: 100%;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`;
const Text = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
`;
const Input = styled.input`
  width: 2rem;
  height: 2rem;
  border: 2px solid #d975c0;
  outline: none;
  margin: 5px;

  font-size: 12px;
  font-weight: 500;
  margin-bottom: 10px;
  ::-webkit-outer-spin-button{
    appearance: none;
  }
  ::-webkit-inner-spin-button{
    appearance: none;
  }

`;
