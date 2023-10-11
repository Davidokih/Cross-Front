import React from "react";
import styled from "styled-components";
import Adaccinfo from "./Adaccinfo";
const Adsettings = () => {
  return (
    <Container>
      <Wrapper>
        <Settings>Settings</Settings>
        <Adaccinfo />
      </Wrapper>
    </Container>
  );
};

export default Adsettings;
// const Container = styled.div``
const Settings = styled.div`
  font-size: 15px;
  font-weight: 700;
  padding: 8px 0;
`;
const Wrapper = styled.div`
  width: 95%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
