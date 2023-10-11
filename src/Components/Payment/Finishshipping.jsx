import React from "react";
import styled from "styled-components";
import Item from "./Item";
import { AiOutlineCheck } from "react-icons/ai";

const Finishhipping = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
          <Tup>
              <Icon>
                <AiOutlineCheck fontSize="32px" color="white" />
              </Icon>
              <Font>
                <Fonttext>
                  {" "}
                  Order <span>05432</span>
                </Fonttext>
                <Fonttitle>
                  {" "}
                  Thank you <span>Manel</span>
                </Fonttitle>
              </Font>
            </Tup>
            <Hold>
              <InputHold>
                <Title>Contact</Title>
                <InputCont>
                  <Test>You@example.com</Test>
                </InputCont>
              </InputHold>
              <InputHold>
                <Title>Shipping Update</Title>
                <InputCont>
                  <Test>
                    You will get shipping and delivery update by email
                  </Test>
                </InputCont>
              </InputHold>
              <InputHold>
                <Title>Customer Information</Title>
                <InputCont>
                  <Dis>
                    <Cont>
                      <Tick>Contact Information</Tick>
                      <PayOn>pay@gmail.com</PayOn>
                    </Cont>
                    <Cont>
                      <Tick>Shipping Address</Tick>
                      <PayOn>Location</PayOn>
                    </Cont>
                    <Cont>
                      <Tick>Payment Method</Tick>
                      <PayOn>Location</PayOn>
                    </Cont>
                  </Dis>
                </InputCont>
              </InputHold>
              <Buttons>
                <Button>Complete Shipping</Button>
              </Buttons>
            </Hold>
          </Left>
          <Right>
            <Item />
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Finishhipping;


const Tup = styled.div`
  display: flex;
  padding: 0 10px;
`;
const Icon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d975c0;
  border-radius: 7px;
`;
const Font = styled.div`
  padding: 3px 10px;
`;
const Fonttext = styled.div`
  font-weight: lighter;
  font-size: 12px;
`;
const Fonttitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  margin-top: 6px;
`;
// const Test = styled.div``
const Test = styled.div`
  margin-left: 10px;
  font-weight: 600;
  color: #363636;
`;
const Right = styled.div`
  flex: 1;
  height: 100vh;
  border-left: 3px solid lightgray;
  /* background-color: blue; */
`;
const Button = styled.button`
  padding: 15px 20px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
const Div = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-weight: 600;
    margin-left: 10px;
    color: #3c3c3c;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0px 10px;
  margin-top: 30px;
`;
const Line = styled.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`;
const PayOn = styled.div`
  font-weight: 500;
  margin-right: 20px;
`;
const Tick = styled.div`
  font-weight: 700;
`;
const Cont = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const Dis = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Input = styled.input`
  width: 90%;
  height: 30px;
  border: 0px;
  outline: none;
  margin-left: 10px;
`;
const InputCont = styled.div`
  border: 1px solid gray;
  width: 100%;
  /* height: 40px; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  border-radius: 5px;
  padding: 10px 0px;

  span {
    color: blue;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    width: 100px;
  }
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const InputHold = styled.div`
  margin: 10px;
`;
const Hold = styled.div`
  width: 90%;
  margin-top: 20px;
`;
const Left = styled.div`
  flex: 1;
  height: 90vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: gold; */
`;
const Wrapper = styled.div`
  width: 95%;
  display: flex;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;
