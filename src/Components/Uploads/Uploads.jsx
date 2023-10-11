import React from "react";
import { BiFridge } from "react-icons/bi";
import { FaMobileAlt, FaShirtsinbulk, FaVest } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Uniheader from "../SigmUpAndSignIn/Uniheader";
import pic1 from "../Assets/realme 2 pro front.png"
import Pic2 from "../Assets/Fashion.png"
import Pic3 from "../Assets/Computer.png"
import Pic4 from "../Assets/Food (1).png"

const Uploads = () => {
  return (
    <Container>
      <Uniheader />
      <Wrap>
        <Cont  to="/seller-dashboard/uploading">
          <Image src={pic1 } />
            <span>Mobiles</span>
        </Cont>
        <Cont to="/seller-dashboard/upload-cloths">
        <Image src={Pic2 } />
            <span>Clothings</span>
        </Cont>
        <Cont to="/seller-dashboard/upload-electronics">
        <Image src={Pic3 } />
            <span>Electronics</span>
        </Cont>
        <Cont to="/seller-dashboard/upload-foods">
        <Image src={Pic4 } />
            <span>Foods And Groceries</span>
        </Cont>
      </Wrap>
    </Container>
  );
};

export default Uploads;
// const Container = styled.div``
const Image = styled.img`

`

const Cont = styled(NavLink)`
  width: 360px;
  height: 365px;
  display: flex;
  border-radius: 5px;
  align-items: center;
  background: rgba(47, 128, 237, 0.37);
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  text-decoration: none;
  justify-content: center;
  @media (max-width: 320px) {
    width: 300px;
  }
  flex-direction: column;
  margin: 20px 20px;
  span {
    font-size: 19px;
    font-weight: 500;
    margin-top: 15px;
  }
`;
const Wrap = styled.div`
  width: 87%;
  border-top: 1.8px solid grey;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  /* @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  } */
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
