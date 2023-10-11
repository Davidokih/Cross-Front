import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { BiHelpCircle, BiSearch,BiArrowBack } from "react-icons/bi";
import { FiMenu, FiSearch } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";
import Slider from "./Slider";
import { useSelector, useDispatch } from 'react-redux';
import Search from "../Search"

const Header = () => {
  const [categories, setCategories] = useState(false);
  const [ account, setAccount ] = useState(false);
  const [menuChange, setMenuChange] = useState(false)
  const [barChange, setbarChange] = useState(false)
  const [show_search, setshow_search] = useState(false)
  const user = JSON.parse(localStorage.getItem("user"));
  const myRef = useRef()
  const cartData = useSelector((state) => state.reducers.cartItem)

  // console.log(cartData)
  const navigate = useNavigate()
  const removeUser = () => {
    localStorage.removeItem("user")
    navigate("/")
  }
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
          <Logo to="/">
            <Div>
            <img src="/logo 1.png" />
              <div>Cross Africa</div>
            </Div>
          </Logo>
          <Hold>
            <Nav
              onMouseOver={() => {
                setCategories(true);
              }}
              onMouseLeave={() => {
                setCategories(false);
              }}
            >
              <div>Categories</div>
              <span>
                <AiFillCaretDown />
              </span>
            </Nav>
            {categories ? (
              <Menu
                onMouseOver={() => {
                  setCategories(true);
                }}
                onMouseLeave={() => {
                  setCategories(false);
                }}
              >
                <NavLink to="/electronics" style={ { textDecoration: "none", width: "100%"}}><Navs>Electronics</Navs></NavLink>
                <NavLink to="/phone" style={{textDecoration: "none",width: "100%"}}><Navs>Mobile Phones</Navs></NavLink>
                <NavLink to="/clothing" style={{textDecoration: "none",width: "100%"}}><Navs>Clothing & Fashion</Navs></NavLink>
                <NavLink to="/food" style={{textDecoration: "none",width: "100%"}}><Navs>Food & Groceries</Navs></NavLink>
              </Menu>
            ) : null}
            <MyHold>
              <Search />
            </MyHold>
            <Nav
              onMouseOver={() => {
                setAccount(true);
              }}
              onMouseLeave={() => {
                setAccount(false);
              }}
            >
              <div> Account</div>
              <span>
                <AiFillCaretDown />
              </span>
            </Nav>
            {account ? (
              <AcMenu
                onMouseOver={() => {
                  setAccount(true);
                }}
                onMouseLeave={() => {
                  setAccount(false);
                }}
              >
                {
                  user ? (<>
                  <Navs onClick={removeUser}>Log Out</Navs>
                  </>) : (<>
                    
                <NavLink to="/signup-user" style={{textDecoration: "none",width: "100%"}}><Navs>Create Account</Navs></NavLink>
                <NavLink to="/seller-page" style={{textDecoration: "none",width: "100%"}}><Navs>Create Seller</Navs></NavLink>
                    </>)
               }
              </AcMenu>
            ) : null }
            <Nav onClick={ () => {
              setshow_search(true)
            }}>
              <div>Search</div>
              <span><FiSearch /></span>
            </Nav>
            <Nav>
            <NavLink to="/cart" style={ { textDecoration: "none", color: 'black' } }>
                <div> Cart</div>
              </NavLink>
              <NavLink to="/cart" style={ { textDecoration: "none", color: 'black' } }>
                <span>
                  <BsCart color="black" />
                  { cartData.length > 0 ? <Round>{ cartData.length}</Round> : null }
              </span>
              </NavLink>
              </Nav>
            <Nav>
              <div>Help</div>
              <span>
                <BiHelpCircle />
              </span>
            </Nav>
            <BarMenu>
              <FiMenu size="20px" onMouseOver={ () => {
                setbarChange(true)
              } }
                onMouseLeave={ () => {
                setbarChange(false)
              }}/>
            </BarMenu>
            {barChange ? <BarShow
                onMouseOver={() => {
                  setbarChange(true)
                }}
                onMouseLeave={() => {
                  setbarChange(false)
                }}
              >
                <NavLink to="/electronics" style={ { textDecoration: "none", width: "100%"}}><Navs>Electronics</Navs></NavLink>
                <NavLink to="/phone" style={{textDecoration: "none",width: "100%"}}><Navs>Mobile Phones</Navs></NavLink>
                <NavLink to="/clothing" style={{textDecoration: "none",width: "100%"}}><Navs>Clothing & Fashion</Navs></NavLink>
                <NavLink to="/food" style={{textDecoration: "none",width: "100%"}}><Navs>Food & Groceries</Navs></NavLink>
              </BarShow> : null}
            
            <Bar>
              {
                menuChange ? <FiMenu size="20px" onClick={returnAgain}/>: <FiMenu size="20px" onClick={change}/>
              }
              
            </Bar>
            <div onClick={returnAgain}>
             <Slider myRef={ myRef} />
            </div>
          </Hold>
        </Wrapper>
      </Container>
      {
        show_search ? <Show>
          <Search setshow_search={ setshow_search} />
      </Show> : null
      }
    </div>
  );
};

export default Header;

const BarShow = styled.div`
  width: 210px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  /* border: 1px solid blue; */
  border-radius: 5px;

  position: absolute;
  top: 65px;
  /* left: 60%; */
  right: 40px;
  z-index: 1111;
  @media (max-width: 768px) {
    display: none;
  }
`
const BarMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;    
  @media (max-width: 1000px) {
      display: none;
  }
`
const Show = styled.div`
  display: none;

  @media (max-width: 768px){
    display: flex;
    justify-content: center;
    background-color: rgba(0,0,0,0.5);
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0px;


  }
`;
const MyHold = styled.div`
  @media (max-width:768px) {
    display: none;
  } 
`
const Round = styled.main`
  color: white;
  position: absolute;
  font-size: 10px;
  font-weight: 500;
  background-color: red;
  border-radius: 50%;
  /* padding: 5px; */
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -5px;
  right: -5px;
`;
const Navs = styled.div`
  width: 100%;
  padding: 10px 0px;
  /* border-bottom: 1px solid lightgray; */
  cursor: pointer;
  text-align: center;
  font-weight: 600;

  :hover {
    background-color: lightgray;
  }
`;
const AcMenu = styled.div`
  width: 210px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  /* border: 1px solid blue; */
  border-radius: 5px;

  position: absolute;
  top: 60px;
  left: 60%;
  right: 40%;
  z-index: 1111;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Menu = styled.div`
  width: 210px;
  height: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  border-radius: 5px;

  position: absolute;
  top: 70px;
  /* left: 150px; */
  z-index: 1111;

  @media (max-width: 768px) {
    display: none;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #383333; */
  border-bottom: 1px solid lightgray;

  @media (max-width: 768px) {
    height: 70px;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Logo = styled(NavLink)`
  height: 100px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  margin-right: 30px;
  flex: 0.2 0.3 auto;
  text-decoration: none;
  color: black;
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

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;

    img {
      height: 40px;
      width: 40px;
    }
  }

  @media (max-width: 440px){
    img{
      width: 40px;
      height: 40px;
    }
    div{
      font-weight: 700;
      font-size: 16px;
    }
  }
  @media (max-width: 414px){
    img{
      width: 30px;
      height: 30px;
    }
    div{
      font-weight: 700;
      font-size: 14px;
    }
  }
  @media (max-width: 283px){
    img{
      width: 20px;
      height: 20px;
    }
    div{
      font-weight: 500;
      font-size: 12px;
    }
  }
`;
const Hold = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 85%; */
  flex: 1 0 100px;
  @media (max-width:768px) {
    flex: 0.5;
    align-items: flex-end;
    height: 65px;
  }
  width: 80%;
`;
const Bar = styled.div`
  display: none;
  @media (max-width: 1000px) {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 20px;
    /* background-color: blue; */
    cursor: pointer;    
  }
`;
const Nav = styled.div`
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: gold;
  height: 30px;
  cursor: pointer;
  margin-left: 10px;

  span {
    margin-left: 10px;
    position: relative;
    bottom: -3px;
  }
  :nth-child(1) {
    @media (max-width: 1000px) {
      display: none;
    }
  }
  :nth-child(3) {
    @media (max-width: 1000px) {
      display: none;
    }
  }
  :nth-child(4) {
    display: none;
    @media (max-width: 768px) {
      display: flex;
    }
  }

  @media (max-width: 414px){
    div{
      display: none;
    }
  }
`;