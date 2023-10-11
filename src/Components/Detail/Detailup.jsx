import React from "react";
import styled from "styled-components";
import {
  AiFillCaretRight,
  AiFillForward,
  AiFillStar,
  AiOutlineArrowRight,
} from "react-icons/ai";
const Detailup = ({name,price}) => {
  return (
    <Container>
      <Wrapper>
        <Nav>
          <Navs>
            <span>Home</span>
            <div>
              <AiFillCaretRight />
            </div>
          </Navs>
          <Navs>
            <span>All Items</span>{" "}
            <div>
              <AiFillCaretRight />
            </div>
          </Navs>
        </Nav>
        <Name>
          {name}
        </Name>
        <Rating></Rating>
        <Price>₦{ price}</Price>
      </Wrapper>
    </Container>
  );
};

export default Detailup;
const Nav = styled.div`
  display: flex;
  width: 122px;
  align-items: center;
  justify-content: space-between;
`;
const Navs = styled.div`
  display: flex;
  span {
    font-size: 13px;
    font-weight: 500;
    margin-top: 10px;
  }

  div {
    margin-top: 10px;
  }
`;
const Name = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 10px;
`;
const Rating = styled.div``;
const Price = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin: 10px 0;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
const Wrapper = styled.div`
  width: 93.5%;
  border: 1.8px solid black;
  padding: 0 10px;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
