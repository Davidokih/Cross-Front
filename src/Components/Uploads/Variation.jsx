import React from "react";
import { BiPlus } from "react-icons/bi";
import styled from "styled-components";
import Uniheader from "../SigmUpAndSignIn/Uniheader";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addTag } from "../Api/ProductApi";
import { useNavigate } from "react-router-dom";

const Variation = () => {

  const [ tag_No, settag_No ] = useState("");
  const [ quantity, setquantity ] = useState("");
  const [ startDate, setstartDate ] = useState("");
  const [ endDate, setendDate ] = useState("");
  const [ active, setactive ] = useState(true);
  const navigate = useNavigate()
  const check = JSON.parse(localStorage.getItem("product"))


  const create = useMutation({
    mutationFn: addTag,
    onSuccess: () => {
        navigate(`/seller-dashboard/success`)
    },

    onError: (error) => {
      console.log(error.message)
      alert(error.message)
    }
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = check._id
  
      create.mutate({id,tag_No,quantity,startDate,endDate,active})
  }
  return (
    <Container>
      <Uniheader/>
      <Wrapper onSubmit={handleSubmit}>
        <Title>Product Variation</Title>
        <Inputhold>
          <Inputcont>
            <Tag>TAG No.*</Tag>
            <Input>
              <input placeholder="C1000" value={ tag_No} onChange={(e)=> settag_No(e.target.value)}/>
              <span>kindly a unique number</span>
            </Input>
          </Inputcont>
          <Inputcont>
            <Tag>Qty*</Tag>
            <Input>
              <input placeholder="2" type="number" value={ quantity} onChange={(e)=> setquantity(e.target.value)} />
            </Input>
          </Inputcont>
          <Inputcont>
            <Tag>start date*</Tag>
            <Input>
              <input placeholder="11/01/23" type="date" value={ startDate} onChange={(e)=> setstartDate(e.target.value)} />
            </Input>
          </Inputcont>
          <Inputcont>
            <Tag>End date*</Tag>
            <Input>
              <input placeholder="26/09/23" type="date" value={ endDate} onChange={(e)=> setendDate(e.target.value)} />
            </Input>
          </Inputcont>
        </Inputhold>
        <Btn>
            <Button type='submit' disabled={create.status === "loading" ? true: false}>{ create.status === "loading" ? "Loading..." : "Upload"}</Button>
        </Btn>
      </Wrapper>
    </Container>
  );
};

export default Variation;

const Title = styled.div`
  padding: 7px 15px;
  font-size: 12px;
  font-weight: 500;
`;
const Button = styled.button`
  padding: 13px 16px;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: #d6649d;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 3px;
  flex: 0.47;
`;
const Btn = styled.div`
  width: 97%;
  display: flex;
  justify-content: flex-start;
  padding: 13px 0;
`;
const Inputcont = styled.div`
  width: 600px;
  padding: 10px 15px;

  @media (max-width: 680px){
    width: 100%;
  }
`;
const Input = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  span {
    font-size: 12px;
    font-weight: 500;
  }

  input {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 10px;
    border-radius: 4px;
    height: 30px;
    margin-bottom: 5px;
  }
  select {
    outline: 0;
    border: 1.9px solid grey;
    padding: 5px 10px;
    border-radius: 4px;
    height: 40px;
    margin-bottom: 5px;
  }

  textarea{
    height: 300px;
    resize: none;
    border-radius: 5px;
    padding: 10px;
  }

  @media (max-width: 680px){
    width: 100%;
  }
`;
const Tag = styled.div`
  font-size: 15px;
  font-weight: 500;
`;
const Inputhold = styled.div`
  width: 100%;
`;
const Wrapper = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
