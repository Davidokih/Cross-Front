import React, { useState } from "react";
import styled from "styled-components";
import Item from "./Item";
import {
  FaAmazonPay,
  FaAngleLeft,
  FaApplePay,
  FaCcPaypal,
  FaGooglePay,
} from "react-icons/fa";
import { AiFillAlipayCircle, AiOutlinePayCircle } from "react-icons/ai";
import { BsPaypal } from "react-icons/bs";
import { MdDeleteOutline } from "react-icons/md";
import { RiAddFill } from "react-icons/ri";
import { ImMinus } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { signOut, addProduct, addToCart, removeCart,removeFromCart } from "../Global/GlobalState"

const Cart = () => {

  const [ QTY, setQTY ] = useState()
  const navigate = useNavigate()
  const check = JSON.parse(localStorage.getItem("user"))
  const cartData = useSelector((state) => state.reducers.cartItem)
  const totalPrice = cartData?.reduce((price, item) => price + item.qty * item.price, 0)
  const dispatch = useDispatch();
  const change = () => {
    if (check) {
      if(totalPrice >= 50000){
        navigate("/checkout")
      }else{
        alert("You must have a total price of ₦50,000 to perform this action")
      }
    } else {
      navigate("/login-user")
    }
  }
  var nf = Intl.NumberFormat()
  return (
    <div>
      <Container>
        <Wrapper>
          <Scroll>
          <Text>Shopping Cart</Text>
            {
              cartData?.map((props,index) => (
                 <Card key={index}>
              <Div>
                <Info>
                      <Image src={ props.avatar[0].url} />
                      <Name>{ props.name}</Name>
                </Info>
                <Price>₦{nf.format(props.price * props.qty) }</Price>
              </Div>
              <Actions>
                <Remove onClick={() => dispatch(removeFromCart(props))}>
                  <span><MdDeleteOutline size="20px"/></span>
                  Remove
                </Remove>
                <Show>
                  <But
                    onClick={ () => dispatch(addToCart(props)) }
                  ><RiAddFill fontWeight="700"/></But>
                      <span>{props.qty }</span>
                  <But
                    onClick={ () => dispatch(removeCart(props)) }
                  ><ImMinus /></But>
            </Show> 
              </Actions>
            </Card>
              ))
           }
          </Scroll>
          <Down>
            <Hold>
              <span>SUBTOTAL</span>
              <div>₦{nf.format(totalPrice) }</div>
                <Button onClick={change}> Checkout</Button>
              {/* <Icon>
                <BsPaypal color="#0a223a" fontSize="40px" />
                <FaAmazonPay fontSize="40px" />
              </Icon> */}
            </Hold>
          </Down>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Cart;

const But = styled.button`
  padding: 10px 15px;
  border: 0px;
  border-radius: 2px;
  outline: none;

  background-color: #e8559e;
  color: white;
  cursor: pointer
`
const Show = styled.div`
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;

`;
const Remove = styled.div`
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  color: #e8559e;
  cursor: pointer;
  span{
    margin-right: 5px;
  }
`
const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Price = styled.div`
  font-size: 17px;
  font-weight: 700;

  @media (max-width: 768px){
    font-size: 14px;
  }

  @media (max-width: 400px){
    font-size: 12px;
    font-weight: 600;
  }
`
const Info = styled.div`
  display: flex;
  margin-right: 10px;
`;
const Name = styled.div`
  font-size: 17px;
  font-weight: 700;

  @media (max-width: 768px){
    font-size: 14px;
    font-weight: 700;
  }

  @media (max-width: 400px){
    font-size: 12px;
    font-weight: 600;
  }
`;
const Image = styled.img`
  width: 90px;
  height: 90px;
  margin-right: 20px;

  @media (max-width: 400px){
    width: 60px;
    height: 60px;
  }
`
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const Card = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid lightgray;
  padding: 15px;
`;
const Scroll = styled.div`
  width: 90%;
  background-color: white;
`;
const Icon = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  padding: 12px 35px;
  border: 0;
  outline: none;
  background-color: #e8559e;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;
const Hold = styled.div`
  width: 150px;
  margin-right: 34px;
  span {
    font-size: 18px;
    font-weight: 700;
  }

  div {
    font-size: 13px;
    font-weight: 500;
    margin: 8px 0;
  }
`;
const Text = styled.div`
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 40px;
  margin-left: 15px;
  margin-top: 10px;
`;
const Down = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 0;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  background-color: #F1F1F2;
`;