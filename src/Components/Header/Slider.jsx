import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Slider = ({ myRef }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const removeUser = () => {
    localStorage.removeItem("user")
  }
  return (
      <div>
          <Menu ref={myRef}>
            <Navs to="/electronics">Electronics</Navs>
            <Navs to="/phone">Mobile Phones</Navs>
            <Navs to="/clothing">Clothing & Fashion</Navs>
            <Navs to="/food">Food & Groceries</Navs>
            <Navs to="/allitems">All Products</Navs>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
             { user ? (<>
                  <Navs to="/" onClick={removeUser}>Log Out</Navs>
        </>) : (<div>
          <Navs to="/signup-user">Create Account</Navs>
          <Navs to="/seller-page">Create Seller</Navs>
                    </div>)}
              </Menu>
    </div>
  )
}

export default Slider;

const Menu = styled.div`
 display: none;

 @media (max-width: 1000px){
  width: 250px;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  /* background-color: gold; */
  border-radius: 5px;

  position: fixed;
  top: 0px;
  /* left: 150px; */
  left: -1000px;
  z-index: 1111;
  transition: all 350ms ease-in-out;

  ::before{
    content: "";
    position: fixed;
    width: 100%;
    height: 100vh;
    /* background-color: #6a69649a; */
    z-index: -1;
  }
  div{
    display: flex;
    flex-direction: column;
  }
 }
`;
const Navs = styled(NavLink)`
  width: 95%;
  line-height: 4;
  padding-left: 10px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  font-weight: 700;
  transition: all 350ms ease-in-out;
  text-decoration: none;
  color: black;
  :hover {
    background-color: lightgray;
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
  }
`;