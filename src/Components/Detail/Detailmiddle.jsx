import React from "react";
import styled from "styled-components";
import {
  AiFillCaretDown,
  AiFillFlag,
  AiOutlineCreditCard,
} from "react-icons/ai";
import {
  BsFillCarFrontFill,
  BsCreditCard2Front,
  BsInfoCircleFill,
} from "react-icons/bs";
import { useSelector, useDispatch } from 'react-redux';
import { signOut, addProduct, addToCart, removeCart } from "../Global/GlobalState"

const Detailmiddle = ({id, avatar, data, qty }) => {
  const cartData = useSelector((state) => state.reducers.cartItem);
  const cartitem = cartData?.find((el) => el?._id === id)
  const dispatch = useDispatch();

  // console.log(cartitem)
  
  return (
    <Container>
      <Wrapper>
        <Middle>
          <Div>
          {
            avatar?.map((props,index) => (
              <Imghold key={index}>
            <Image1>
              <img src={props.url} />
            </Image1>
          </Imghold>
            ))
          }
          </Div>
          <Others>
            <Select>
              <Option>
                <OptionTitle>
                  <span>Select Country</span>
                </OptionTitle>
                <Optionav>
                  {" "}
                  <div>
                    <AiFillFlag />
                  </div>
                  <span>
                    <AiFillCaretDown />
                  </span>
                </Optionav>
              </Option>
              <Delivery>
                <Icon>
                  <div>
                    <BsFillCarFrontFill />
                  </div>
                </Icon>
                <Icontext>
                  <Icontitle>Door Delivery</Icontitle>
                  <Icontest>
                    Every Delivery will be at
                    <br /> your preferred location,
                    <br /> after 15days of ordering.
                  </Icontest>
                </Icontext>
              </Delivery>
              <Delivery>
                <Icon>
                  <div>
                    <BsInfoCircleFill />
                  </div>
                </Icon>
                <Icontext>
                  <Icontitle>Minimum order</Icontitle>
                  <Icontest>
                    #50,000 worth of item
                    <br />
                    is the minimum
                  </Icontest>
                </Icontext>
              </Delivery>
              <Delivery>
                <Icon>
                  <div>
                    <BsCreditCard2Front />
                  </div>
                </Icon>
                <Icontext>
                  <Icontitle>Payment Method</Icontitle>
                  <Icontest>
                    All Items will be delivered
                    <br /> after Payment
                  </Icontest>
                </Icontext>
              </Delivery>
            </Select>
            <Quantity>
              <Quantitytext>Quantity</Quantitytext>
              {cartitem?.qty >= 1 ? <Quantitycreament>
                <QuantityIncreament onClick={()=> dispatch(addToCart(data))}>+</QuantityIncreament>
                <QuantityFigure>{ cartitem?.qty}</QuantityFigure>
                <QuantityDecreament disabled={cartitem?.qty <= 0 ? true : false} onClick={()=> dispatch(removeCart(data))}>-</QuantityDecreament>
              </Quantitycreament> :  <Quantitybutton>
                <button onClick={()=> dispatch(addToCart(data))}>Add To Cart</button>
              </Quantitybutton>}
            </Quantity>
          </Others>
        </Middle>
      </Wrapper>
    </Container>
  );
};

export default Detailmiddle;

const Div = styled.div`

  @media (max-width: 1076px){
    display: flex;
    overflow-x: auto;
  }
`
const QuantityIncreament = styled.button`
  width: 70px;
  height: 70px;
  border: 1.6px solid grey;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
`;
const QuantityFigure = styled.div`
  width: 70px;
  height: 70px;
  border: 1.6px solid grey;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;
const QuantityDecreament = styled.button`
  width: 70px;
  height: 70px;
  border: 1.6px solid grey;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

`;
const Quantitytext = styled.div`
  font-size: 22px;
  font-weight: 700;
  font-family: poppins;
`;
const Quantitycreament = styled.div`
  width: 70%;
  height: 125px;
  display: flex;
  cursor: pointer;

  align-items: center;
  justify-content: space-between;
`;
const Quantitybutton = styled.div`
  width: 90%;

  button {
    flex: 1;
    background-color: #d975c0;
    color: white;
    font-size: 20px;
    padding: 10px 0;
    width: 100%;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`;
const Quantity = styled.div`
  width: 100%;
  height: 195px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (max-width: 1100px) {
    align-items: center;
  }
`;
const OptionTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  span {
    font-size: 22px;
    font-weight: 700;
    font-family: poppins;
  }
`;
const Optionav = styled.div`
  font-weight: 700;
  width: 95%;
  padding: 0 10px;
  display: flex;
  border: 1.7px solid black;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
  // background-color: gold;
  height: 30px;

  span {
    margin-left: 10px;
    position: relative;
    bottom: -3px;
    cursor: pointer;
  }
  div {
  }
`;
const Icontest = styled.div`
  font-size: 15px;
  font-weight: 500;
  font-family: poppins;
`;
const Icontitle = styled.div`
  font-size: 25px;
  margin-bottom: 15px;
  font-weight: 500;
  font-family: poppins;
`;
const Icon = styled.div`
  width: 100px;
  border-radius: 5px;
  div {
    font-size: 62px;
  }
`;
const Icontext = styled.div`
  width: 230px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;
const Option = styled.div`
  width: 90%;
  height: 70px;
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Delivery = styled.div`
  width: 90%;
  height: 120px;
  border-bottom: 1.5px solid grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
`;
const Select = styled.div`
  border: 1.8px solid black;
  width: 100%;
  height: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 30px;
`;

const Image2 = styled.div`
  width: 450px;
  height: 330px;
  background-color: burlywood;
  border-radius: 5px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;
const Image1 = styled.div`
  width: 450px;
  height: 330px;
  /* background-color: brown; */
  border-radius: 5px;
  margin: 10px;
  img {
    height: 100%;
    width: 100%;
    border-radius: 5px;

    object-fit: cover;
  }

  @media (max-width: 768px){
    width: 300px;
    height: 300px;
  }
`;
const Imghold = styled.div`
  width: 450px;
  /* flex: 1; */
  padding: 50px 0;
`;
const Others = styled.div`
  width: 550px;
  /* flex: 1; */
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 50px 0;
`;

const Wrapper = styled.div`
  width: 95%;
  /* height: 95%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Up = styled.div`
  width: 100%;
  height: 120px;
  border: 2px solid black;
`;
const Middle = styled.div`
  width: 100%;
  flex-wrap: wrap;
  /* height: 970px; */
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
