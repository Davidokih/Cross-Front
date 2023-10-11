import React from "react";
import styled from "styled-components"
import { NavLink } from "react-router-dom";


const GetStarted = () => {
  return (
      <div>
          <Container>
              <Wrapper>
                    <Title>GET STARTED TODAY</Title>
                    <Content>Join the fast, trusted and best selling platformin Africa</Content>
                    <Button to="/auth">Start Selling Today</Button>
              </Wrapper>
          </Container>
    </div>
  )
}

export default GetStarted;

const Button = styled(NavLink)`
    padding: 15px 70px;
    border: #D975C0;
    background-color: #D975C0;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
`;
const Content = styled.div`
    font-weight: 600;
    font-size: 17px;
    margin-bottom: 15px;
  text-align: center;
`
const Title = styled.div`
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 15px;
    text-align: center;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 500px;
`
const Container = styled.div`
  width: 100%;
  /* background-color: #f6c8ea; */
`