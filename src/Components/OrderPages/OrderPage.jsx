import React, { useState } from "react";
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  AiFillCaretDown,
} from "react-icons/ai";
import "../../App.css"

const OrderPage = ({ avatar, index, order_No, price, pending_days, created, delivery_status, payment_method, tag_No, name, payment_status, quantity, amount,products }) => {
  const check = JSON.parse(localStorage.getItem("user"))
  const [ edit, setEdit ] = useState(false);

  // const filterData = price?.filter((el) => el.sellerID === check._id)
  // const orderSums = price.reduce((total, product) => {
  //     return total + (product.price * product.qty);
  //   }, 0);
  const filterData = products?.filter((el) => el.sellerID === check._id)
  return (
          <Body key={index} >
            {order_No && <Td>
              {" "}
        <HoldHead>{order_No }</HoldHead>
            </Td>}
            {pending_days && <Td>
              {" "}
        <HoldHead>{pending_days }</HoldHead>
            </Td>}

            {created && <Td>
              {" "}
        <HoldHead>{ created}</HoldHead>{" "}
            </Td>}
            {tag_No && <Td>
              {" "}
        <HoldHead>{ tag_No}</HoldHead>{" "}
            </Td>}
            {products && <Td>
        {
          filterData?.map((props) => (
            <UserHold>
                <span>
            <Image src={ props.productID?.avatar[0].url} />
                </span>
               {props.productID.name}
              </UserHold>
          ))
              }
            </Td>}
            {products && <Td>
        { filterData?.map((props) => (
          <HoldHead>{ props.price}</HoldHead>
        ))}
      </Td> }
            {quantity && <Td>
        <HoldHead>{ quantity}</HoldHead>{" "}
      </Td> }
      
      { amount && <Td>
        <HoldHead>{ amount }</HoldHead>
      </Td> }
      { payment_method && <Td>
        <HoldHead>{ payment_method }</HoldHead>
      </Td> }
      { payment_status && <Td>
        <HoldHead>{ payment_status }</HoldHead>
      </Td> }
           {delivery_status &&  <Td>
        <HoldHead className={`${delivery_status}`}>{ delivery_status}</HoldHead>
            </Td>}
      
           
          </Body>
  );
};

export default OrderPage;


const Round2 = styled.div`
  width: 50px;
  height: 40px;
  background-color: #bfc2bf;
  border-radius: 5px;
  margin-left: 10px;
`;
const Round = styled.div`
  width: 50px;
  height: 40px;
  background-color: #bfc2bf;
  border-radius: 5px;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  /* background-color: gold; */
  margin-right: 10px;
`;
const Button = styled.div`
  margin: 5px;
  color: blue;
  border-bottom: 2px solid blue;
  font-weight: 600;
  cursor: pointer;
  span {
    margin-left: 3px;
  }
`;
const Hold = styled.div``;
const HoldHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`;
const UserHold = styled.div`
  display: flex;
  align-items: center;

  :hover {
    color: blue;
  }
  cursor: pointer;
`;
const Td = styled.td`
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 400;
  border-left: 1.5px solid #d0d1d2;
`;
const Body = styled.tr`
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;;
`;