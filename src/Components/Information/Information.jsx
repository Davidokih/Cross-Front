import React,{useState} from 'react'
import styled from "styled-components"
import { NavLink, useNavigate } from 'react-router-dom'

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userInformation } from '../Api/Api';
import pic from "./camera.png"

const Information = () => {
    const navigate = useNavigate();
    const [ image, setImage ] = useState(pic); 
    const [ avatar, setAvatar ] = useState(""); 
    const [ CACNumber, setCACNumber ] = useState(""); 
    const [ IDtype, setIDtype ] = useState("");
    const [ Docs, setDocs ] = useState("");

    const handleImage = (e) => {
        const file = e.target.files[ 0 ];
        const save = URL.createObjectURL(file);
        setImage(save);
        setAvatar(file);
    };
    const handleDocs = (e) => {
        const file = e.target.files[ 0 ];
        setDocs(file);
    };
      const create = useMutation({
        // mutationKey: ["seller"],
        mutationFn: userInformation,
        onSuccess: (res) => {
            console.log(res);
            navigate("/auth/bankdetails")
        },

        onError: (error) => {
            console.log(error.message)
        }
      })
    const check = JSON.parse(localStorage.getItem("user"))

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = check._id
        const formData = new FormData
        formData.append("IDtype", IDtype)
        formData.append("CACNumber", CACNumber)
        formData.append("avatar", avatar)
        formData.append("avatar", Docs)

        create.mutate({id,formData})
    }

    // if (create.status === "loading") return <h1>Loading...</h1>
  return (
      <div>
          <Container>
              <Wrapper>
                  <Title>Business Information</Title>
                  <Text>Enter every necessary details to create your own seller account</Text>
                  <InputHold onSubmit={handleSubmit} type="multipart/form-data">
                        <Hold>
                            <Name>Business owner or legal representative ID type</Name>
                            <HoldInput>
                              {/* <Input placeholder="Phone Number" /> */ }
                              <Select value={IDtype} onChange={e=>{setIDtype(e.target.value)}}>
                                  <option>Select ID type</option>
                                  <option>NIN</option>
                                  <option>BVN</option>
                              </Select>
                            </HoldInput>
                        </Hold>
                        
                        <Hold>
                            <Name>Upload a copy of your valid ID card</Name>
                            <HoldInput>
                              <Input type="file" id='pass' onChange={handleDocs}/>
                              {/* <Icon>Q</Icon> */}
                          </HoldInput>
                      </Hold>
                      <Hold>
                            <Name>CAC Registration Number</Name>
                            <HoldInput>
                              <Input
                                  placeholder="NIN OR BVN"
                                  type='number'
                                  value={ CACNumber } onChange={ (e) => { setCACNumber(e.target.value); } } />
                            </HoldInput>
                      </Hold>
                      <Card>
                          <InputFile type="file" onChange={handleImage}/>
                          <Image src={ image} />
                      </Card>
                      <Button type='submit' disabled={create.status === "loading" ? true: false}>{ create.status === "loading" ? "Loading..." : "Continue"}</Button>
                  </InputHold>
              </Wrapper>
          </Container>
    </div>
  )
}

export default Information

const Select = styled.select`
    width: 100%;
    height: 30px;
    outline: none;
    border: 0px;
`
const InputFile = styled.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    /* opacity: 0px; */
    display: none;
`
const Image = styled.img`
    
    /* background-color: gold; */
    width: 80%;
    height: 70%;
    border-radius: 5px;
`
const Card = styled.label`
    width: 220px;
    height: 220px;
    border: 1px solid gray;
    border-radius: 5px;
    margin-bottom: 10px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
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
const HoldInput = styled.div`
    width: 350px;
    height: 40px;
    border: 1px solid lightgray;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
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
`
const Text = styled.div`
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    width: 300px;
    margin-bottom: 20px;

`
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