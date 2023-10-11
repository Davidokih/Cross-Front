import React from "react";
import styled from "styled-components";
import Reason from "./Reason";
import GetStarted from "./GetStarted";
import { NavLink } from "react-router-dom"
import LandingPageHead from "../Header/LandingPageHead";
import Footer from "../Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <LandingPageHead />
      <div>
      <Container>
        <Wrapper>
          <Hero>
            <Title>ANYONE CAN SELL ON CROSS AFRICA</Title>
            <Content>
              Become a merchant and sell to thousands of people across africa
            </Content>
            <Button to="/auth">Start Selling Today</Button>
          </Hero>
          <Reason />
          <GetStarted />
        </Wrapper>
      </Container>
      <Footer />
    </div>
    </>
  );
};

export default LandingPage;

const Button = styled(NavLink)`
  padding: 15px 70px;
  border: #d975c0;
  background-color: #d975c0;
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
`;
const Title = styled.div`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: center;
`;
const Hero = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  /* z-index: -1; */
  /* background-color: #f4caca; */
  background-image: linear-gradient(
      to bottom,
      rgba(23, 23, 24, 0.52),
      rgba(9, 0, 8, 0.73)
    ),
    url("/Frame 114.png");
`;
const Wrapper = styled.div``;

const Container = styled.div`
  width: 100%;
`;
