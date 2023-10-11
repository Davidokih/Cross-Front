import React from "react";
import styled from "styled-components";

const ItemData = ({ index, totalPrice, subtotal, props }) => {
    
  // const productID = props?.productID?._id
  // console.log(props)
    var nf = Intl.NumberFormat()
  return (
    <div>
      <Hold key={index}>
        <Content>
          <Left>
            <Circle>{props.qty }</Circle>
            <Image src={props?.productID?.avatar[0]?.url} />
          </Left>
          <Right>
            <Title>{props?.productID?.name }</Title>
            <Price>₦ { nf.format(props?.productID?.price)}</Price>
          </Right>
        </Content>
        <Line />
        <Content>
          <Cont>
            <Div>
              <Title2>Subtotal</Title2>
              <Price>₦{ nf.format(props?.qty * props?.productID?.price)}</Price>
            </Div>
            <Div>
              <Title2>Shipping Fee</Title2>
              <Price>₦ { nf.format(props?.productID?.shippingFee)}</Price>
            </Div>
          </Cont>
        </Content>
        <Line />
        
      </Hold>
    </div>
  );
};

export default ItemData;

const Cont = styled.div``;
const Div = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: gold; */
  margin: 10px 0px;
`;
const Price = styled.div`
  font-weight: 700;
`;
const Title2 = styled.div`
  font-size: 18px;
  font-weight: 600;
  /* margin-bottom: 10px; */
`;
const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Right = styled.div`
  margin-left: 20px;
`;
const Line = styled.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`;
const Image = styled.img`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 5px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #d975c0;
  color: white;
  position: relative;
  left: 85px;
  top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Left = styled.div`
  margin-right: 20px;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  width: 90%;
`;
const Hold = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
