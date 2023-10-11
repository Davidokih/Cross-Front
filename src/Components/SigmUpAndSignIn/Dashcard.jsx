import React from "react";
import styled from "styled-components";
import {RiWalletLine} from "react-icons/ri"
import { MdStorefront } from "react-icons/md"
import {RxSketchLogo, RxAvatar} from "react-icons/rx"
const Dashcard = ({ pr, da, ti, bg, sales, name, sales1,id }) => {
  
  // const filteredData = sales1?.products
  function formatNumber(number) {
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'M';
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'K';
    }
    return number;
  }

  return (
    <>
     <Card>
     <Div>
     <Line />
   <Hold>
       <Head>
              <span>{name }</span>
       </Head>
       <Content>
                 {sales1 && <Amount>₦{formatNumber(sales1) }</Amount>}
                 {sales && <Amount>{formatNumber(sales) }</Amount>}
           {/* <Percent>50%</Percent> */}
       </Content>
   </Hold>
   </Div>
        <Icon cl="#7c7eff" bg="#e5e1ff">{ pr}</Icon>
</Card>
    </>
  );
};

export default Dashcard;

const Box = styled.div`
  width: 300px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  margin: 10px;
`;
const Boxhold = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Up = styled.div`
  width: 85%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

const Text = styled.div`
  height: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const H1 = styled.div`
  font-size: 16px;
`;
const Number = styled.div`
  font-size: 16px;
`;
const Mid = styled.div`
  width: 100%;
  height: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  border-radius: 10px;
`;
const Yellow = styled.div`
  background-color: yellow;
  width: 60%;
  height: 100%;
`;
const Down = styled.div`
  color: black;
  font-size: 13px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 60%;

  span {
    color: yellow;
    font-size: 13px;
    font-weight: bold;
  }
  h1 {
    color: skyblue;
    font-size: 13px;
    font-weight: bold;
  }
  h2 {
    color: red;
    font-size: 13px;
    font-weight: bold;
  }
  h3 {
    color: purple;
    font-size: 13px;
    font-weight: bold;
  }
`;
const Line = styled.div`
    width: 5px;
    height: 110px;
    background-color: blue;
    border-radius: 10px;
    /* margin-left: 10px; */
`
const Icon = styled.div`
    /* width: 20px; */
    height: 20px;
    padding: 10px 15px;
    background-color: ${({bg})=> bg};
    color: ${({cl})=> cl};
    font-size: 20px;
    border-radius: 5px; 
`
const Hold = styled.div`
    margin-left: 20px;
`
const Percent = styled.div`
    font-weight: 500;
    font-size: 14px;
`
const Amount = styled.div`
    font-weight: 700;
    font-size: 23px;
    margin-bottom: 20px;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
`
const Head = styled.div`
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #8f9099;
`
const Div = styled.div`
    display: flex;
`
const Card = styled.div`
    /* height: 200px; */
    width: 300px;
    display: flex;
    justify-content: space-between;
    display: flex;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    margin: 10px;
    padding: 20px;

    @media (max-width: 768px){
        width: 100%;
    }
`