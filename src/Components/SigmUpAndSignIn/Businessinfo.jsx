import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai"
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NavLink, useNavigate } from 'react-router-dom'
import { businessInfo } from "../Api/Api";
import countryData from "../data"

const Businessinfo = () => {
  // const countryData = [
  //   {
  //     name: "NIgeria",
  //     flag: "https://cdn-icons-png.flaticon.com/512/8603/8603374.png"
  //   },
  //   {
  //     name: "Ghana",
  //     flag: "https://cdn-icons-png.flaticon.com/512/8603/8603142.png"
  //   },
  // ]
  const navigate = useNavigate()
  const [ selectCountry, setSelectCountry ] = useState(countryData)
  let [ findCountry, setFindCountry ] = useState(0)
  const [ address, setaddress ] = useState(""); 
  const [ address2, setaddress2 ] = useState("Default"); 
  const [ postalCode, setpostalCode] = useState("123456");
  const [ shopName, setshopName] = useState("");
  const [ city, setcity] = useState("");
  const [ shippingFrom, setshippingFrom ] = useState("");
  

  const returnCountry = () => {
    setFindCountry(() => findCountry + 1)
    if (findCountry >= selectCountry.length - 1) {
      setFindCountry(()=> findCountry = 0)
    }
  }

  const getCountryName = () => {
    setshippingFrom(selectCountry[findCountry].name)
  }
  const create = useMutation({
    // mutationKey: ["seller"],
    mutationFn: businessInfo,
    onSuccess: (res) => {
        console.log(res);
        navigate("/auth/information")
    },

    onError: (error) => {
        console.log(error.message)
    }
  })
  useEffect(() => {
    getCountryName()
  },[findCountry])
const check = JSON.parse(localStorage.getItem("user"))

  const handleSubmit = (value) => {
    value.preventDefault()
    const id = check._id
    const codePostal = parseInt(postalCode)

    create.mutate({id, address, address2, shippingFrom,codePostal,shopName,city})
  }
  // if (create.status === "loading") return <h1>Loading...</h1>
  console.log(shippingFrom)
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>Business Information </Title>
          <Text>
            Enter every necessary details to create your own seller account{" "}
          </Text>
          <InputHold onSubmit={handleSubmit}>
            <Hold>
              <Name>Shop Name *</Name>
              <HoldInput>
                <Input value={shopName} onChange={(e)=> setshopName(e.target.value)}/>
              </HoldInput>
            </Hold>
            <Hold>
              <Name>Postal code/Zip code</Name>
              <HoldInput>
                <Input type="number" value={postalCode} onChange={(e)=> setpostalCode(e.target.value)}/>
              </HoldInput>
            </Hold>
            <Hold>
              <Name>Address *</Name>
              <HoldInput>
                <Input value={address} onChange={(e)=> setaddress(e.target.value)}/>
              </HoldInput>
            </Hold>
            <Hold>
              <Name>Address 2</Name>
              <HoldInput>
                <Input value={address2} onChange={(e)=> setaddress2(e.target.value)}/>
              </HoldInput>
            </Hold>
            <Hold>
              <Name>City / Town</Name>
              <HoldInput>
                <Input value={city} onChange={(e)=> setcity(e.target.value)}/>
              </HoldInput>
            </Hold>
            <Hold>
              <Name>What country are you shipping from?</Name>
              <HoldInput>
                <Image src={ selectCountry[findCountry].flag} />
                <Icon onClick={returnCountry}><AiFillCaretDown /></Icon>
              </HoldInput>
            </Hold>

            <Button type="submit">{create.status === "loading" ? "Loading...": "Continue" }</Button>
          </InputHold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Businessinfo;

const Image = styled.img`
  width: 40px;
`;
const Button = styled.button`
  width: 360px;
  height: 50px;
  border: 0px;
  background-color: #ec00b1;
  border-radius: 5px;
  color: white;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;
  margin: 20px;
  outline: none;
`;
const Error = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: #ff0000;
`;
const Icon = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const HoldInput = styled.div`
  width: 350px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 10px;
`;
const Input = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: 0px;
  /* margin-bottom: 5px; */
  /* padding-left: 10px;
    padding-right: 10px; */
    ::-webkit-outer-spin-button{
    appearance: none;
  }
  ::-webkit-inner-spin-button{
    appearance: none;
  }
`;
const Name = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const Hold = styled.div`
  margin-bottom: 10px;
`;
const InputHold = styled.form`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Text = styled.div`
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  width: 250px;
  margin-bottom: 20px;
`;
const Title = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  /* border: 1px solid gray; */
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
