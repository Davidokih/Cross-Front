import React from "react";
import { AiFillInfoCircle, AiOutlineCheck } from "react-icons/ai";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const ErrorOtp = () => {
  return (
    <Container>
      <Card>
        <Icon>
          <AiFillInfoCircle fontSize="50px" color="red" />
        </Icon>
        <Text>Incorrect OTP number, please try again</Text>
        <Button to="/auth/verify">
          <button>Try again</button>
        </Button>
      </Card>
    </Container>
  );
};

export default ErrorOtp;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;
const Card = styled.div`
  width: 280px;
  height: 150px;
  border: 1.8px solid #d975c0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
`;
const Icon = styled.div``;
const Button = styled(NavLink)`
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
  font-size: 12px;
  font-weight: 500;
`;
