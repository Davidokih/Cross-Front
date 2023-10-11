import React from "react"
import styled from "styled-components"
import { BsCart } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut, addProduct, addToCart, removeCart } from "../Global/GlobalState"

const MobileCard = ({ id, index, name, price,img, data }) => {
  const cartData = useSelector((state) => state.reducers.cartItem);
  const cartitem = cartData?.find((el) => el?._id === id)
  const dispatch = useDispatch();
    return(
      <>
        <Card key={index}>
          <Nav to={`/detail/${id}`}>
            <Image >
              <img src={img} />
            </Image>
          </Nav>
          <Div>
            <Nav to={`/detail/${id}`}>
              <Name>
              {name}
              </Name>
              <Price>₦{ price}</Price>
            </Nav>
            <Hold>
              { cartitem?.qty >= 1 ?
                <Show>
                  <Button onClick={()=> dispatch(addToCart(data))}>+</Button>
                  <span>{cartitem?.qty }</span>
                  <Button onClick={()=> dispatch(removeCart(data))}>-</Button>
                </Show> : <But onClick={()=> dispatch(addToCart(data))}>ADD TO CART</But>}
            </Hold>
          </Div>
        </Card>
      </>
    )
}

export default MobileCard

const Nav = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
const Div = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;

  @media (max-width: 730px){
    width: 200px;
  }
  @media (max-width: 550px){
    width: 170px;
  }
  @media (max-width: 440px){
    width: 150px;
  }
  @media (max-width: 417px){
    width: 130px;
  }
  @media (max-width: 380px){
    width: 120px;
  }
  @media (max-width: 314px){
    width: 100px;
  }
`
const Show = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  padding: 13px 20px;
  border: 0px;
  border-radius: 2px;
  outline: none;

  background-color: #d975c0;
  color: white;
  cursor: pointer
`
const But = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  font-weight: 800;
  outline: none;
  border: 0px;
  background-color: #d975c0;
  color: white;
  cursor: pointer;
  @media (max-width: 370px){
    font-size: 12px;
  }
`
const Hold = styled.div`
  /* display: none; */
  margin-bottom: 10px;
`
const Image = styled.div`
  /* background-color: #cdc8c8; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  width: 270px;
  height: 230px;
  margin: 5px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  @media (max-width: 730px){
    width: 200px;
    height: 200px;
  }
  @media (max-width: 550px){
    width: 170px;
    height: 220px;
  }
  @media (max-width: 440px){
    width: 150px;
    height: 220px;
  }
  @media (max-width: 417px){
    width: 130px;
    height: 200px;
  }
  @media (max-width: 380px){
    width: 120px;
    height: 200px;
  }
  @media (max-width: 350px){
    width: 110px;
    height: 200px;
  }
  @media (max-width: 314px){
    width: 100px;
    height: 160px;
  }
`;

const Name = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 5px;
  span {
    margin-left: 10px;
    position: relative;
    bottom: -2px;
    color: #d975c0;
    cursor: pointer;
  }
  @media (max-width: 550px){
    font-size: 12px;
  }
  @media (max-width: 314px){
    font-size: 10px;
  }
`;
const Price = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: black;
  margin-bottom: 10px;
`;

const Card = styled.div`
  /* width: 300px; */
  flex: 1 0 100px;
  box-sizing: border-box;
  /* height: 350px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 10px;
  /* background-color: gold; */
`;
