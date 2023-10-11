import React from "react";
import styled from "styled-components";
import { BsCart } from "react-icons/bs";

const Detaildown = ({description}) => {
  return (
    <Container>
      <Wrapper>
        <Up>
          <Uptitle>Product Details</Uptitle>
          <Uptext>
            {description}
          </Uptext>
        </Up>
        
      </Wrapper>
    </Container>
  );
};

export default Detaildown;
// const Middle = styled.div``
const Card = styled.div`
  width: 300px;
  height: 300px;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const Image = styled.div`
  background-color: #cdc8c8;
  border-radius: 5px;
  width: 250px;
  height: 260px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
const Name = styled.div`
  font-size: 13px;
  font-weight: 500;
  span {
    margin-left: 10px;
    position: relative;
    bottom: -2px;
    color: #d975c0;
  }
`;
const Price = styled.div`
  font-size: 13px;
  font-weight: 500;
`;
const Cardhold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Downtitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`;
const Up = styled.div`
  width: 94%;
  border: 1.8px solid black;
  border-radius: 3px;
  padding: 0 30px;
`;
const Uptitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`;
const Uptext = styled.div`
  font-size: 16px;
  font-weight: 400;
  margin: 10px 0;
`;
const Down = styled.div`
  width: 94%;
  /* height: 350px; */

  border: 1.8px solid black;
  padding: 0 30px;
  border-radius: 3px;
`;
const Middle = styled.div`
  font-size: 22px;
  font-weight: 700;
  font-family: poppins;
`;

const Wrapper = styled.div`
  width: 95%;
  /* height: 595px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;
const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
