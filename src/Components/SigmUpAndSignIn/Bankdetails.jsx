import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";

import { bankDetail } from "../Api/Api";
import { useMutation } from "@tanstack/react-query";

const Bankdetails = () => {
  const navigate = useNavigate();
  const [bankName,setBankName] = useState("")
  const [accountName,setaccountName] = useState("")
  const [ accountNumber, setaccountNumber ] = useState("")

  const create = useMutation({
    // mutationKey: ["seller"],
    mutationFn: bankDetail,
    onSuccess: (res) => {
        console.log(res);
        navigate("/auth/review")
    },

    onError: (error) => {
        console.log(error.message)
    }
  })

  const check = JSON.parse(localStorage.getItem("user"))

  const handleSubmit = (e) => {
      e.preventDefault()
    const id = check._id
    const completed = true
    const accNumber = parseInt(accountNumber)

      create.mutate({ id, bankName,accountName,accNumber,completed})
  }
  // console.log(accountNumber)

  // if (create.status === "loading") return <h1>Loading...</h1>
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>Provide Bank Details</Title>
          <Text>
            Enter every necessary details to create
            <br /> your own seller account{" "}
          </Text>
          <InputHold onSubmit={handleSubmit}>
            <Hold>
              <Name>Bank</Name>
              <HoldInput>
                <Input placeholder="Bank" value={bankName} onChange={(e)=> setBankName(e.target.value)}/>
              </HoldInput>
            </Hold>
            <Hold>
              <Name>Account Name</Name>
              <HoldInput>
                <Input placeholder="Account Name" value={accountName} onChange={(e)=> setaccountName(e.target.value)}/>
              </HoldInput>
            </Hold>
            <Hold>
              <Name>Account Number</Name>
              <HoldInput>
                <Input placeholder="Account Number" type="number" value={accountNumber} onChange={(e)=> setaccountNumber(e.target.value)}/>
              </HoldInput>
            </Hold>

            <Button type="submit">{create.status === "Loading..." ? "Loadding": "Continue" }</Button>
          </InputHold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Bankdetails;

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

const HoldInput = styled.div`
  width: 350px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 10px;
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
