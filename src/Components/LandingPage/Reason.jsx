import React from "react";
import styled from "styled-components";

const Reason = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>WHY YOU SHOULD SELL ON CROSS AFRICA</Title>
          <ButtonHold>
            <Button>SELL MORE PRODUCTS</Button>
            <Button>SELL MORE PRODUCTS</Button>
            <Button>SELL MORE PRODUCTS</Button>
            <Button>SELL MORE PRODUCTS</Button>
            <Button>SELL MORE PRODUCTS</Button>
            <Button>SELL MORE PRODUCTS</Button>
          </ButtonHold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Reason;

const Button = styled.button`
  padding: 10px 20px;
  border: 0px;
  background-color: #ec00b1;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  margin: 20px;
  outline: none;
`;
const ButtonHold = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-top: 70px;
  text-align: center;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 500px;
  min-height: 100%;
`;
const Container = styled.div`
  width: 100%;
  background-color: #902a75;
`;
