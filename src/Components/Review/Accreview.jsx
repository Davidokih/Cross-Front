import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Accreview = () => {
  return (
    <Container>
      <Card>
        <Icon>
          <AiOutlineCheck fontSize="50px" color="green" />
        </Icon>
        <Text>
          You have successfully created
          <br /> an account
        </Text>
        <Button to="/business">
          <button>Continue</button>
        </Button>
      </Card>
    </Container>
  );
};

export default Accreview;
const Container = styled.div`
  width: 100%;
  height: 42vh;
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
const Button = styled(Link)`
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
