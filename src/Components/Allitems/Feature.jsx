import React from "react";
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { BsTrash } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "../Api/ProductApi";
import { useState } from "react";

const Feature = () => {

  const { data } = useQuery({
    queryKey: [ "products" ],
    queryFn: getAllProduct
    
  })
  const [ currentPage, setCurrentPage ] = useState(0)

  const myData = data?.filter((el) => el.status === "approved")
  const recordPage = 8
  const lastIndex = currentPage * recordPage
  const currentPageData = myData?.slice(lastIndex, lastIndex + recordPage)
  // console.log(data)
  return (
    <Container>
      <Wrapper>
      <HoldHead>Featured </HoldHead>
        <Buttom>
            

          {
            currentPageData?.map((props, index) => (
              <Body key={index}>
                <UserHold>
                    <Image src={ props?.avatar[0].url } />
                </UserHold>
            </Body>))
         }
        </Buttom>
      </Wrapper>
    </Container>
  );
};

export default Feature;

// const Wrapper = styled.div``
const Wrapper = styled.div`
  width: 93%;
  /* height: 200px; */
  overflow-x: auto;
  -ms-overflow-style: none;
  background: #D9D9D9;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;
const Image = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 5px;
  background-color: gold;
  margin: 20px;
`;

const HoldHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
  font-size: 20px;
  font-weight: 700;
  margin-left: 10px;
  margin-top: 10px;
`;
const UserHold = styled.div`
  display: flex;
  align-items: center;

  :hover {
    color: blue;
  }
  cursor: pointer;
`;
const Td = styled.div`
  padding: 10px 15px;
  font-size: 16px;
  font-weight: 400;
`;
const Head = styled.tr``;
const Body = styled.tr`
 
`;
const Buttom = styled.div`
  width: 78rem;
  /* height: 150px; */
  /* padding: 0px 20px; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  /* overflow-x: scroll; */
`;
