import React from 'react'
import styled from "styled-components"
import { NavLink } from 'react-router-dom'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { useState } from 'react';

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginUser } from '../Api/Api'

const SignInUser = () => {
    const navigate = useNavigate();
    const userSchema = yup.object({
        email: yup.string().email("this is not a valid email").required("This field cannot be empty"),
        password: yup.string().required("This field cannot be empty"),
    }).required()

    // const [show, setShow] = useState(false)
    const [ Switch, setSwitch ] = useState(true)
    const switchIcon = Switch === true ? false : true
    
    const {
        handleSubmit,
        formState: { errors },
        reset,
        register,
      } = useForm({
        resolver: yupResolver(userSchema),
      });
    
      const create = useMutation({
        mutationKey: [ "Admin" ],
        mutationFn: loginUser,

        onSuccess: (res) => {
            navigate("/")
        },

        onError: (error) => {
            console.log(error.message)
        }
    })

    const onSubmit = handleSubmit((value) => {
        create.mutate(value)
    })

    // if () return <h1>Loading...</h1>
  return (
      <div>
          <Container>
              <Wrapper>
                  <Title>Log-In Account</Title>
                  <Text>Please enter every necessary information</Text>
                  <InputHold onSubmit={onSubmit}>
                        <Hold>
                            <Name>Email Address</Name>
                            <HoldInput style={{border: `${errors?.email ? "1px solid red" : "1px solid lightgray"}`}}>
                                <Input placeholder="Email Address" type="email" {...register("email")}/>
                            </HoldInput>
                            <Error>{errors?.email && errors?.email?.message }</Error>
                        </Hold>
                        <Hold>
                            <Name>Password</Name>
                            <HoldInput  style={{border: `${errors?.password ? "1px solid red" : "1px solid lightgray"}`}}>
                              <Input placeholder="Password" type={Switch ? "password" : "text"} id='pass' {...register("password")}/>
                              <Icon onClick={ ()=>{ setSwitch(switchIcon)}}>{ Switch === false ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</Icon>
                            </HoldInput>
                            <Error>{errors?.password && errors?.password?.message }</Error>
                      </Hold>
                      <PassHold>
                          Forget Password?
                      </PassHold>
                      <Button type='submit'>{ create.status === "loading" ? "Loading..." : "Log In"}</Button>
                      {/* <Button>Continue as a Guest</Button> */}
                      <AlText>Don't have an account? <NavLink to="/signup-user" style={{textDecoration: "none"}}><span>Sign Up</span></NavLink></AlText>
                  </InputHold>
              </Wrapper>
          </Container>
    </div>
  )
}

export default SignInUser

const PassHold = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    cursor: pointer;
    width: 90%;

    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`;
const AlText = styled.div`
    font-size: 13px;
    font-weight: 500;

    span{
        color: #ec00b1;
        cursor: pointer;
    }
`;
const Button = styled.button`
    width: 360px;
    height: 40px;
    border: 0px;
    background-color: #ec00b1;
    border-radius: 5px;
    color: white;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    margin: 20px;
    outline: none;

    @media (max-width: 370px){
        width: 300px;
        height: 30px;
        font-size: 16px;
    }
    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
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
    justify-content: center;
    padding-left: 10px;

    @media (max-width: 370px){
        width: 300px;
        height: 30px;
    }
    @media (max-width: 315px){
        width: 250px;
        height: 30px;
    }
`;
const Input = styled.input`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
    /* margin-bottom: 5px; */
    /* padding-left: 10px;
    padding-right: 10px; */
`
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

    @media (max-width: 370px){
        width: 350px;
    }
`
const Text = styled.div`
    text-align: center;
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 20px;
    width: 250px;
`
const Title = styled.div`
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
    font-weight: 700;
`;
const Wrapper = styled.div`
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 120px;
    /* border: 1px solid gray; */
    /* background-color: gold; */

    /* @media (max-width: 370px){
        width: 90%;
    } */
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;