import React from "react";
import styled from "styled-components";
import { BiUserCircle, BiUser, BiEnvelope, BiPhone } from "react-icons/bi";

const Adaccinfo = () => {
  return (
    <Container>
      <Wrapper>
        <Image>
          <img src="/Frame 113.png" />
          <span>Manel</span>
        </Image>
        <Info>
          <Text>Account Info</Text>
          <Hold>
            <span>
              {" "}
              <BiUser fontSize="18px" />
            </span>
            <Write>Manel</Write>
          </Hold>
          <Hold>
            <span>
              {" "}
              <BiEnvelope fontSize="18px" />
            </span>
            <Write>Manel@test.com</Write>
          </Hold>
          <Hold>
            <span>
              {" "}
              <BiPhone fontSize="18px" />
            </span>
            <Write>09012075964</Write>
          </Hold>
        </Info>
      </Wrapper>
    </Container>
  );
};

export default Adaccinfo;
// const Container = styled.div``
const Write = styled.div`
  cursor: pointer;
  margin-bottom: 8px;
`;
const Hold = styled.div`
  /* width: 200px; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 400;
  font-size: 13px;
  span {
    margin-right: 7px;
    padding: 5px 0;
  }
  /* background-color: red; */
`;
const Info = styled.div`
  font-weight: 500;
  font-size: 14px;
  margin-left: 18px;
`;
const Text = styled.div`
  padding: 7px 0;
`;
const Image = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
  width: 100px;
  padding: 20px 0;

  img {
    width: 60px;
    height: 60px;
    border-radius: 5px;
  }

  span {
    font-size: 14px;
    font-weight: 500;
    padding: 5px 10px;
  }
`;
const Wrapper = styled.div`
  width: 99%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
