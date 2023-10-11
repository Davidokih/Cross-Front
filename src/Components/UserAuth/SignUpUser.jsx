import React, { useRef, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

import { createAdmin } from "../Api/Api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const SignUpUser = () => {
  const [value, setValue] = useState();
  const [Switch, setSwitch] = useState(true);
  const switchIcon = Switch === true ? false : true;
  const navigate = useNavigate();
  const userSchema = yup
    .object({
      firstName: yup.string().required("This field cannot be empty"),
      lastName: yup.string().required("This field cannot be empty"),
      email: yup
        .string()
        .email("this is not a valid email")
        .required("This field cannot be empty"),
      phoneNum: yup.number().required("This field cannot be empty"),
      password: yup.string().required("This field cannot be empty"),
      isAdmin: yup.boolean(),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Password must match"),
    })
    .required();

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const create = useMutation({
    mutationKey: ["createUser"],
    mutationFn: createAdmin,

    onSuccess: (res) => {
      console.log(res);
      navigate("/login-user");
    },

    onError: (error) => {
      alert(error.message)
    },
  });

    const onSubmit = handleSubmit((value) => {
    value.isAdmin = false
    create.mutate(value);
  });
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>Create Account</Title>
          <Text>Please enter every necessary information</Text>
          <InputHold onSubmit={onSubmit}>
            <Hold>
              <Name>First Name</Name>
              <HoldInput
                style={{
                  border: `${
                    errors?.firstName ? "1px solid red" : "1px solid lightgray"
                  }`,
                }}
              >
                <Input placeholder="First Name" {...register("firstName")} />
              </HoldInput>
              <Error>{errors?.firstName && errors?.firstName?.message}</Error>
            </Hold>
            <Hold>
              <Name>Last Name</Name>
              <HoldInput
                style={{
                  border: `${
                    errors?.firstName ? "1px solid red" : "1px solid lightgray"
                  }`,
                }}
              >
                <Input placeholder="Last Name" {...register("lastName")} />
              </HoldInput>
              <Error>{errors?.lastName && errors?.lastName?.message}</Error>
            </Hold>
            <Hold>
              <Name>Email Address</Name>
              <HoldInput
                style={{
                  border: `${
                    errors?.firstName ? "1px solid red" : "1px solid lightgray"
                  }`,
                }}
              >
                <Input placeholder="Email Address" {...register("email")} />
              </HoldInput>
              <Error>{errors?.email && errors?.email?.message}</Error>
            </Hold>
            <Hold>
              <Name>Phone Number</Name>
              <HoldInput
                style={{
                  border: `${
                    errors?.firstName ? "1px solid red" : "1px solid lightgray"
                  }`,
                }}
              >
                <PhoneInput
                  className="phone"
                  defaultCountry="NG"
                  {...register("phoneNum")}
                  placeholder="Phone Number"
                  value={value}
                  onChange={setValue}
                />
              </HoldInput>
              <Error>{errors?.phoneNum && errors?.phoneNum?.message}</Error>
            </Hold>
            <Hold>
              <Name>Password</Name>
              <HoldInput
                style={{
                  border: `${
                    errors?.firstName ? "1px solid red" : "1px solid lightgray"
                  }`,
                }}
              >
                <Input
                  placeholder="Password"
                  type={Switch ? "password" : "text"}
                  id="pass"
                  {...register("password")}
                />
                <Icon
                  onClick={() => {
                    setSwitch(switchIcon);
                  }}
                >
                  {Switch === false ? (
                    <AiOutlineEye />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </Icon>
              </HoldInput>
              <Error>{errors?.password && errors?.password?.message}</Error>
            </Hold>
            <Hold>
              <Name>Confirm Password</Name>
              <HoldInput
                style={{
                  border: `${
                    errors?.firstName ? "1px solid red" : "1px solid lightgray"
                  }`,
                }}
              >
                <Input
                  placeholder="Confirm Password"
                  type={Switch ? "password" : "text"}
                  id="pass"
                  {...register("confirmPassword")}
                />
                <Icon
                  onClick={() => {
                    setSwitch(switchIcon);
                  }}
                >
                  {Switch === false ? (
                    <AiOutlineEye />
                  ) : (
                    <AiOutlineEyeInvisible />
                  )}
                </Icon>
              </HoldInput>
              <Error>
                {errors?.confirmPassword && errors?.confirmPassword?.message}
              </Error>
            </Hold>
            <Button type='submit' disabled={create.status === "loading" ? true: false}>{ create.status === "loading" ? "Loading..." : "Continue"}</Button>
            <AlText>
              Already have an account?{" "}
              <NavLink to="/login-user" style={{ textDecoration: "none" }}>
                <span>LogIn</span>
              </NavLink>
            </AlText>
          </InputHold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default SignUpUser;

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

    .PhoneInputInput {
    width: 300px;
    height: 30px;
    outline: none;
    border: 0px;
  }

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