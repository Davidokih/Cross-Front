import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { BiHelpCircle, BiSearch } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Slider from "./Slider";

const Header = () => {
  const [categories, setCategories] = useState(false);
  const [ account, setAccount ] = useState(false);
  const [menuChange, setMenuChange] = useState(false)
  const user = JSON.parse(localStorage.getItem("user"));
  const myRef = useRef()

  console.log(menuChange)
  const change = () => {
    myRef.current.style.left = "0px"
    setMenuChange(true)
  }
  const returnAgain = () => {
    myRef.current.style.left = "-1000px"
    setMenuChange(false)
  }
  return (
    <div>
      <Container>
        <Wrapper>
          <Logo>
            <img src="/logo 1.png" />
            <div>Cross Africa</div>
          </Logo>
          <Div to="/seller-dashboard">
            Dashboard
          </Div>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Header;


const Container = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #383333; */
  border-bottom: 1px solid lightgray;
`;
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const Logo = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-right: 30px;
  flex: 0.2 0.3 auto;
  /* background: gold; */
  /* margin-bottom: 10px; */

  img {
    height: 60px;
    width: 60px;
  }

  div {
    font-weight: 700;
    font-size: 20px;
  }
`;

const Div = styled(NavLink)`
  font-size: 30px;
  font-weight: 700;
  text-decoration: none;
  color: black;
`;