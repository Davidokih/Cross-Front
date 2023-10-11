import React, { useState } from "react";
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  AiFillCaretDown,
} from "react-icons/ai";

const Productpage = ({ avatar, index, name, price, tag, created, quantity, active, rejected }) => {
  const [ edit, setEdit ] = useState(false);
  console.log(edit)
  return (
          <Body key={index}>
            <Td>
              <UserHold>
                <span>
            <Image src={ avatar} />
                </span>
               {name}
              </UserHold>
            </Td>
            {tag && <Td>
              {" "}
        <HoldHead>{tag }</HoldHead>
            </Td>}

            {created && <Td>
              {" "}
        <HoldHead>{ created}</HoldHead>{" "}
            </Td>}
            {price && <Td>
        <HoldHead>{ price}</HoldHead>{" "}
            </Td>}
           {quantity &&  <Td>
        <HoldHead>{ quantity}</HoldHead>
            </Td>}
          {rejected &&   <Td>
        <HoldHead>{ rejected}</HoldHead>
      </Td>
      }
           {quantity > 0 &&  <Td>
        <HoldHead>
        <Box bg="fff">
            <Round />
            <span>ON</span>
          </Box> 
        </HoldHead>
            </Td>}
           {quantity <= 0 &&  <Td>
        <HoldHead>
        <Box bg="">
                <span>OFF</span>
                <Round2 />
          </Box>
        </HoldHead>
            </Td>}
            <Td>
              <HoldHead >
                {" "}
                <Edit onClick={() => {
                  setEdit(true);
                }}>
                  <Button>
                    Edit
                  </Button>
                  <span>
                    <AiFillCaretDown />
                  </span>
          </Edit>
          {edit ? (
              <Menu
                onClick={() => {
                  setEdit(false);
                }}
              >
                <NavLink  to="/seller-dashboard/edit-image"><Navs>Edit Image</Navs></NavLink>
                <NavLink  to="/seller-dashboard/edit-image"><Navs>Edit Context</Navs></NavLink>
                <Navs>Delete</Navs>
              </Menu>
            ) : null}
        </HoldHead>
       
            </Td>
          </Body>
  );
};

export default Productpage;

const Navs = styled.div`
  width: 100%;
  padding: 10px 0px;
  /* border-bottom: 1px solid lightgray; */
  cursor: pointer;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  color: black;
`;
const Menu = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid #d975c0;
  border-radius: 5px;

  position: sticky;
  bottom: -120px;
  right: 40px;
  /* z-index: 11; */
`;
const Edit = styled.div`
  display: flex;
  align-items: flex-end;
`;
const Box = styled.div`
  width: 100px;
  height: 40px;
  background-color: ${({bg})=> (bg ? "#0ebb0e": "red")};
  border-radius: 5px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  color: white;

  span{
    margin-left: 10px;
  }
`;
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
  background-color: gold;
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
  padding: 10px 10px;
  font-size: 16px;
  font-weight: 400;
  border-left: 1.5px solid #d0d1d2;
`;
const Body = styled.tr`
  border-bottom: 1px solid lightgray;
  border-right: 1px solid lightgray;;
`;