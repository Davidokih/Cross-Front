import React from 'react'
import styled from 'styled-components'
import Item from './Item'
import { FaAngleLeft } from "react-icons/fa"


const Payment = () => {
  return (
      <div>
          <Container>
              <Wrapper>
                  <Left>
                      <Hold>
                          <InputHold>
                              <Title>Contact</Title>
                              <InputCont>
                                  <Input placeholder="email"/>
                                  <span>Chance</span>
                              </InputCont>
                          </InputHold>
                          <InputHold>
                              <Title>Address</Title>
                              <InputCont>
                                  <Input placeholder="Address"/>
                                  <span>Chance</span>
                              </InputCont>
                          </InputHold>
                          <InputHold>
                              <Title>Payment Method</Title>
                              <InputCont>
                                    <Dis>
                                        <Cont>
                                            <Checkbox bg="fff"></Checkbox>
                                            <PayOn>Pay on delivery</PayOn>
                                        </Cont>
                                        <Line />  
                                        <Cont>
                                            <Checkbox bg=""></Checkbox>
                                            <PayOn>Pay on delivery</PayOn>
                                        </Cont>
                                    </Dis>
                              </InputCont>
                          </InputHold>
                          <Buttons>
                              <Div>
                                  <span><FaAngleLeft /></span>
                                  <div>Return to Information</div>
                              </Div>
                              <Button>Complete Order</Button>
                          </Buttons>
                      </Hold>
                  </Left>
                  <Right>
                      <Item />
                  </Right>
              </Wrapper>
          </Container>
    </div>
  )
}

export default Payment

const Right = styled.div`
    flex: 1;
    height: 100vh;
    border-left: 3px solid lightgray;
    /* background-color: blue; */
`        
const Button = styled.button`
    padding: 15px 20px;
    border: #D975C0;
    background-color: #D975C0;
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

    div{
        font-weight: 600;
        /* margin-left: 10px; */
        color: #3c3c3c;
    }
    span{
        margin-top: 5px;
    }
`;
const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    margin-top: 30px;
`
const Line = styled.div`
    width: 100%;
    background-color: lightgray;
    height: 2px;
    margin: 10px 0px;
`;
const PayOn = styled.div`
    font-weight: 700;
    margin-right: 20px;
`
const Checkbox = styled.div`
    border: 1px solid black;
    background-color: ${({ bg }) => (bg ? "#D975C0" : "transparent")};
    border-radius: 50%;
    height: 25px;
    width: 25px;
    cursor: pointer;
`;
const Cont = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Dis = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Input = styled.input`
    width: 90%;
    height: 30px;
    border: 0px;
    outline: none;
    margin-left: 10px;

`        
const InputCont = styled.div`
    border: 1px solid gray;
    width: 100%;
    /* height: 40px; */
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 10px 0px;

    span{
        color: blue;
        margin-left: 10px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        width: 100px;
    }
`        
const Title = styled.div`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
`        
const InputHold = styled.div`
    margin: 10px;
`        
const Hold = styled.div`
    width: 90%;
    margin-top: 20px;
`;
const Left = styled.div`
    flex: 1;
    height: 100vh;
    display: flex;
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
`