import React from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from 'react-router-dom'
import { useState,useEffect } from "react";
import { AiFillCaretDown } from "react-icons/ai"

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { personalInfo } from "../Api/Api";
import countryData from "../data"

const PersonalInfo = () => {
  const navigate = useNavigate()
  const [ selectCountry, setSelectCountry ] = useState(countryData)
  let [ findCountry, setFindCountry ] = useState(0)
  let [ checkState, setCheckState ] = useState(false)
  const [ gender, setgender ] = useState(""); 
  const [ DateOfBirth, setDateOfBirth ] = useState(""); 
  const [ country, setcountry ] = useState("");
  
  const changedState = () => {
    if (checkState === true) return setCheckState(() => checkState = false)
    setCheckState(() => checkState = true)
    
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
    // mutationKey: ["seller"],
    mutationFn: personalInfo,
    onSuccess: (res) => {
        console.log(res);
        navigate("/auth/businessinfo")
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

    create.mutate({id, gender, DateOfBirth, country})
  }
  // if (create.status === "loading") return <h1>Loading...</h1>
  // console.log(country)

 
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>Personal Details </Title>
          <Text>
           Almost there, just few more details
          </Text>
          <InputHold onSubmit={handleSubmit}>
            <Hold>
              <Name>Date of Birth</Name>
              <HoldInput>
                <Input
                  placeholder="04/19/1999"
                  type="date"
                  value={ DateOfBirth }
                  onChange={(e)=>{setDateOfBirth(e.target.value)}}
                />
              </HoldInput>
            </Hold>
            <Hold>
              <Name>Gender</Name>
              <HoldInput>
                <Select value={gender} onChange={e=>{setgender(e.target.value)}}>
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </Select>
              </HoldInput>
            </Hold>
            <Hold>
              <Name>Country</Name>
              <HoldInput>
                <Image src={ selectCountry[ findCountry ].flag } />
                <Icon onClick={returnCountry}><AiFillCaretDown /></Icon>
              </HoldInput>
            </Hold>
            { !checkState ? <Button bg="fff" disabled={ true }>Continue</Button> : <Button bg="" type="submit">{create.status === "loading"? "Loading...": "Continue" }</Button>}
            {/* <Button>Continue</Button> */}
            <AlText> <InputCheck type="checkbox" onClick={changedState}/>Don't have an account? <span>Terms and Conditions</span></AlText>
          </InputHold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default PersonalInfo;

const Select = styled.select`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
`
const InputCheck = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;
const AlText = styled.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`;
const Image = styled.img`
  width: 40px;
`;
const Button = styled.button`
  width: 360px;
  height: 50px;
  border: 0px;
  background-color:${({ bg }) => (bg === "" ? "#D975C0" : "#c4c4c4")};
  border-radius: 5px;
  color: ${({ bg }) => (bg === "" ? "white" : "black")};
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
  padding: 0px 5px;

  /* input{
    display: none;
  } */
`;
const Input = styled.input`
  width: 100%;
  height: 30px;
  outline: none;
  border: 0px;
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
