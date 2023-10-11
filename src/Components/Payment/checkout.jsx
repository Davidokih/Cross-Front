import React from "react";
import styled from "styled-components";
import Item from "./Item";
import { AiFillCaretDown, AiFillFlag, AiFillCaretLeft } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import countryData from "../data"
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { placeOrder } from "../Api/OrderApi";
import { useEffect } from "react";
import axios from "axios";
import { usePaystackPayment } from "react-paystack";

// const baseURL = "http://localhost:5000";
const baseURL = "https://crossbackend.onrender.com";
const Checkout = () => {
  const navigate = useNavigate()
  var nf = Intl.NumberFormat()
  const cartData = useSelector((state) => state.reducers.cartItem)
  const quantity = useSelector((state) => state.reducers.qty)
  const totalPrice = cartData?.reduce((price, item) => price + item.qty * item.price + item.shippingFee * item.qty, 0)
  const shippingFee = cartData?.reduce((fee, item) => fee + item.qty * item.shippingFee, 0)
  const [ selectCountry, setSelectCountry ] = useState(countryData)
  let [ findCountry, setFindCountry ] = useState(0)
  const [ email, setemail ] = useState(""); 
  const [ firstName, setfirstName ] = useState(""); 
  const [ country, setcountry ] = useState("");
  const [ lastName, setlastName ] = useState("");
  const [ address, setaddress ] = useState("");
  const [ apartment, setapartment ] = useState("");
  const [ state, setstate ] = useState("");
  const [ Localgovt, setLocalgovt ] = useState("");
  const [ nearestBusStop, setnearestBusStop ] = useState("");
  const [ phone_No, setphone_No ] = useState();
  const [ change, setChange ] = useState(false)
  const [ Error, setError ] = useState(false);
  
  const [payment_Method, setPayment_Method] = useState("Payment before delivery")
  const [products, setProducts] = useState([])
  
const productOrdered=()=>{
  const Data = cartData.map((el)=> ({productID: el._id, sellerID: el.user,qty: el.qty, price: el.price}))
  setProducts(Data)
  }

  const returnCountry = () => {
    setFindCountry(() => findCountry + 1)
    if (findCountry >= selectCountry.length - 1) {
      setFindCountry(()=> findCountry = 0)
    }
  }

  const getCountryName = () => {
      setcountry(selectCountry[findCountry].name)
  }
  const create = useMutation({
    mutationKey: ["order"],
    mutationFn: placeOrder,
    onSuccess: () => {
      navigate("/finishshipping")
    },
    onError: (error) => {
        console.log(error)
    }
  })

  const handleSubmit = (e)=>{
    e.preventDefault()
    if (
      firstName.length == 0 ||
      lastName.length == 0 ||
      email.length == 0 ||
      country.length == 0 ||
      !payment_Method ||
      state.length == 0 ||
      apartment.length == 0 ||
      nearestBusStop.length == 0 ||
      products.length == 0 ||
      apartment.length == 0
    ) {
      setError(true)
      alert("All inputs most be filed ")
    }
    const formData = {firstName: firstName,lastName: lastName,email: email,phone_No: phone_No,payment_method: payment_Method,country: country, Localgovt: Localgovt, state:state, apartment: apartment, nearestBusStop: nearestBusStop, products:products,subtotal: totalPrice, totalQty:quantity, address: address, shippingFee: shippingFee}
    create.mutate(formData)
  }
  const onSuccess = (reference) => {
    // history.push("/thanks");
    const formData = {firstName: firstName,lastName: lastName,email: email,phone_No: phone_No,payment_method: payment_Method,country: country, Localgovt: Localgovt, state:state, apartment: apartment, nearestBusStop: nearestBusStop, products:products,subtotal: totalPrice, totalQty:quantity, address: address, shippingFee: shippingFee, payment_status: "paid"}
    create.mutate(formData)
    console.log(reference);
  };

  const onClose = () => {
    alert("having any issue?");
    console.log("closed");
  };

  const initializePayment = usePaystackPayment({
    reference: new Date().getTime(),
    email: email,
    amount: totalPrice*100,
    publicKey: "pk_test_5ca53f20c464ea3c97e93b0c6524952bc588cb18",
  });
  useEffect(() => {
    getCountryName()
    productOrdered()
  },[findCountry])
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <Hold onSubmit={handleSubmit}>
              <InputHold>
                <Title>Contact Information</Title>
                <Text>Email</Text>
                <InputCont>
                  <Input type="email" placeholder="email"  value={email} onChange={(e)=> setemail(e.target.value)}/>
                  {/* <span>Chance</span> */}
                </InputCont>
              </InputHold>
              <InputHold>
                <Title>Payment Method</Title>
                <InputCont>
                  <Dis>
                   {
                    change ?  <Cont onClick={()=>{
                      setChange(false)
                      setPayment_Method("Payment before delivery")
                    }}>
                      <Checkbox bg="fff"></Checkbox>
                      <PayOn>Payment on delivery</PayOn>
                    </Cont> :  <Cont onClick={()=>{
                      setChange(true)
                      setPayment_Method("Payment on delivery")
                    }}>
                      <Checkbox bg=""></Checkbox>
                      <PayOn>Payment on delivery</PayOn>
                    </Cont>
                   }
                    <Line />
                    {
                    change ?   <Cont onClick={()=>{
                      setChange(false)
                      setPayment_Method("Payment before delivery")
                    }}>
                      <Checkbox bg=""></Checkbox>
                      <PayOn>Payment before delivery</PayOn>
                    </Cont> :   <Cont onClick={()=>{
                      setChange(true)
                      setPayment_Method("Payment on delivery")
                    }}>
                      <Checkbox bg="fff"></Checkbox>
                      <PayOn>Payment before delivery</PayOn>
                    </Cont>
                   }
                  </Dis>
                </InputCont>
              </InputHold>

              <InputHold1>
                <Title>Shipping Address</Title>
                <Text>Country</Text>

                <Optionav>
                  {" "}
                  <Image src={ selectCountry[findCountry].flag} />
                <Icon onClick={returnCountry}><AiFillCaretDown /></Icon>
                </Optionav>
              </InputHold1>
              <InputHold2>
                <Wrap>
                  <Text>First Name</Text>
                  <InputCont>
                    <Input placeholder="First Name"  value={firstName} onChange={(e)=> setfirstName(e.target.value)}/>
                    {/* <span>Chance</span> */}
                  </InputCont>
                </Wrap>
                <Wrap>
                  <Text>Last Name</Text>
                  <InputCont>
                    <Input placeholder="Last Name"  value={lastName} onChange={(e)=> setlastName(e.target.value)}/>
                    {/* <span>Chance</span> */}
                  </InputCont>
                </Wrap>
              </InputHold2>
              <InputHold1>
                <Text>Address</Text>
                <InputCont>
                  <Input placeholder="Address"  value={address} onChange={(e)=> setaddress(e.target.value)}/>
                  {/* <span>Chance</span> */}
                </InputCont>
              </InputHold1>
              <InputHold1>
                <Text>Apartment, Suite etc.... (Optional)</Text>
                <InputCont>
                  <Input placeholder="Apartment, Suite etc...."  value={apartment} onChange={(e)=> setapartment(e.target.value)}/>
                  {/* <span>Chance</span> */}
                </InputCont>
              </InputHold1>
              <InputHold2>
                <Wrap1>
                  <Text>State</Text>
                  <InputCont>
                    <Input placeholder="Lagos"  value={state} onChange={(e)=> setstate(e.target.value)}/>
                    {/* <span>Chance</span> */}
                  </InputCont>
                </Wrap1>
                <Wrap1>
                  <Text>LGA</Text>
                  <InputCont>
                    <Input placeholder="Ajeromi"  value={Localgovt} onChange={(e)=> setLocalgovt(e.target.value)}/>
                    {/* <span>Chance</span> */}
                  </InputCont>
                </Wrap1>
                <Wrap1>
                  <Text>Nearest B/Stop</Text>
                  <InputCont>
                    <Input placeholder="OJA"  value={nearestBusStop} onChange={(e)=> setnearestBusStop(e.target.value)}/>
                    {/* <span>Chance</span> */}
                  </InputCont>
                </Wrap1>
              </InputHold2>

              <InputHold1>
                <Text>Phone number</Text>
                <InputCont>
                  <Input placeholder="Phone number" type="number"  value={phone_No} onChange={(e)=> setphone_No(e.target.value)}/>
                  {/* <span>Chance</span> */}
                </InputCont>
              </InputHold1>
              <Buttons>
                <Div>
                  <span>
                    <AiFillCaretLeft />
                  </span>
                  <div onClick={()=>{navigate(-1)}}>Return to Cart</div>
                </Div>
                {payment_Method === "Payment before delivery" ? <Button_Div onClick={() => {initializePayment(onSuccess, onClose)}}>{ create.status === "loading" ? "Loading..." : "Continue"}</Button_Div>
                 :
                  <Button type='submit' disabled={create.status === "loading" ? true: false}>{ create.status === "loading" ? "Loading..." : "Continue"}</Button>}
              </Buttons>
            </Hold>
          </Left>
          <Right>
            {
              cartData?.map((props, index) => (
                <Item index={ index } name={ props.name } price={ nf.format(props.price) } shippingFee={ props?.shippingFee } totalPrice={ nf.format(totalPrice) } subtotal={nf.format(props.price * props.qty)} qty={ props.qty } avatar={ props.avatar[0].url} id={ props._id} />
              ))
            }
            <Content>
          <Cont>
            <MyDiv>
              <Title2>Total</Title2>
              <Price>₦{ nf.format(totalPrice)}</Price>
            </MyDiv>
          </Cont>
        </Content>
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Checkout;

const Button_Div = styled.div`
    padding: 10px 20px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`
const MyDiv = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0px;
`;
const Price = styled.div`
  font-weight: 700;
`;
const Title2 = styled.div`
  font-size: 18px;
  font-weight: 600;
`;
const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;
  width: 90%;
`;
const Image = styled.img`
  width: 40px;
`;
const Icon = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const Wrap = styled.div`
  width: 45%;
`;
const Wrap1 = styled.div`
  width: 30%;
`;
const Optionav = styled.div`
  font-weight: 700;
  width: 95%;
  padding: 10px 10px;
  display: flex;
  border: 1.7px solid grey;
  border-radius: 5px;
  align-items: center;
  justify-content: space-between;
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
const Text = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 6px;
`;
const Right = styled.div`
  flex: 1;

  @media (max-width: 768px ){
    display: none;
  }
`;
const Button = styled.button`
  padding: 15px 20px;
  border: #d975c0;
  background-color: #d975c0;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
const Div = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    font-weight: 600;
    margin-left: 10px;
    color: #3c3c3c;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
  margin-top: 30px;

  span {
    margin-top: 5px;
  }
`;
const Line = styled.div`
  width: 100%;
  background-color: lightgray;
  height: 2px;
  margin: 10px 0px;
`;
const PayOn = styled.div`
  font-weight: 700;
  margin-right: 20px;
`;
const Checkbox = styled.div`
  border: 1px solid black;
  background-color: ${({ bg }) => (bg ? "#D975C0" : "transparent")};
  border-radius: 50%;
  height: 25px;
  width: 25px;
  cursor: pointer;
`;
const Cont = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Dis = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Input = styled.input`
  width: 90%;
  height: 30px;
  border: 0px;
  outline: none;
  /* margin-right: 20px; */
`;
const InputCont = styled.div`
  border: 1px solid gray;
  width: 100%;
  /* height: 40px; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 10px 0px;

  span {
    color: blue;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    width: 100px;
  }
`;
const Title = styled.div`
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 14px;
`;
const InputHold = styled.div`
  margin-bottom: 50px;
`;
const InputHold1 = styled.div`
  margin-bottom: 20px;
`;
const InputHold2 = styled.div`
  margin-bottom: 20px;
  display: flex;

  justify-content: space-between;
  align-items: center;
`;
const Hold = styled.form`
  width: 90%;
  margin-top: 20px;
`;
const Left = styled.div`
  flex: 1;
  border-right: 2px solid lightgray;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 95%;
  display: flex;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;