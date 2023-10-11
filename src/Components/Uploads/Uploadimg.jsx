import React from "react";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Uniheader from "../SigmUpAndSignIn/Uniheader";
import { useState } from "react";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../Api/ProductApi";
import { useNavigate } from "react-router-dom";

const Uploadimg = () => {
  const [ image, setImage ] = useState(""); 
  const [ image2, setImage2 ] = useState(""); 
  const [ image3, setImage3 ] = useState(""); 
  const [ avatar, setAvatar ] = useState(""); 
  const [ avatar2, setAvatar2 ] = useState(""); 
  const [ avatar3, setAvatar3 ] = useState("");
  const [ name, setname ] = useState("");
  const [ brand, setbrand ] = useState("");
  const [ ram, setRam ] = useState("");
  const [ condition, setcondition ] = useState("");
  const [ description, setdescription ] = useState("");
  const [ price, setprice ] = useState();
  const [ category, setcategory ] = useState("phone");
  const [ Error, setError ] = useState(false);
  const navigate = useNavigate()

  const handleImage = (e) => {
    const file = e.target.files[ 0 ];
    const save = URL.createObjectURL(file);
    setImage(save);
    setAvatar(file);
  };
  const handleImage2 = (e) => {
    const file = e.target.files[ 0 ];
    const save = URL.createObjectURL(file);
    setImage2(save);
    setAvatar2(file);
  };
  const handleImage3 = (e) => {
    const file = e.target.files[ 0 ];
    const save = URL.createObjectURL(file);
    setImage3(save);
    setAvatar3(file);
  };

  const create = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
        navigate(`/seller-dashboard/variation`)
    },

    onError: (error) => {
        alert(error.message)
    }
  })
const check = JSON.parse(localStorage.getItem("user"))

const handleSubmit = (e) => {
  e.preventDefault()
  const id = check._id
  if (
    name.length == 0 ||
    ram.length == 0 ||
    brand.length == 0 ||
    description.length == 0 ||
    condition.length == 0 ||
    !price ||
    avatar.length == 0 ||
    avatar2.length == 0
  ) {
    setError(true)
    alert("All inputs most be filed ")
  }
    const formData = new FormData
    formData.append("name", name)
    formData.append("ram", ram)
    formData.append("condition", condition)
    formData.append("brand", brand)
    formData.append("description", description)
    formData.append("category", category)
    formData.append("price", price)
    avatar3 ? formData.append("avatar", avatar) : null
    avatar2 ? formData.append("avatar", avatar2) : null
    avatar3 ? formData.append("avatar", avatar3) : null

    create.mutate({id,formData})
}
  return (
    <Container>
      <Uniheader />
      <Wrapper onSubmit={handleSubmit}>
        <Top>
          <span>Upload Product Image *</span>
          <Hold>
            <Box style={Error ? {border: "1px solid red"}: null}>
              {avatar ? null : <Icon fontSize="25px" />}
              <InputFile type="file" onChange={ handleImage } />
              {avatar ? <Image src={ image} /> : null}
            </Box>
            <Box style={Error ? {border: "1px solid red"}: null}>
            {avatar2 ? null : <Icon fontSize="25px" />}
              <InputFile type="file" onChange={ handleImage2 } />
              {avatar2 ? <Image src={ image2} /> : null}
            </Box>
            <Box>
            {avatar3 ? null : <Icon fontSize="25px" />}
              <InputFile type="file" onChange={ handleImage3 } />
              {avatar3 ? <Image src={ image3} />: null}
            </Box>
          </Hold>
          <div>Upload at least 2 photos</div>
        </Top>
        <Inputhold>
          <Inputcont>
            <Tag>Name*</Tag>
            <Input>
              <input placeholder="name" value={ name} onChange={(e)=> setname(e.target.value)} />
              <span>kindly specify name of product</span>
            </Input>
          </Inputcont>
          <Inputcont>
            <Tag>Brand*</Tag>
            <Input>
              <input placeholder="brand" value={ brand} onChange={(e)=> setbrand(e.target.value)}/>
              <span>kindly specify brand of product</span>
            </Input>
          </Inputcont>
          <Inputcont>
            <Tag>RAM*</Tag>
            <Input>
              <input placeholder="RAM" value={ ram} onChange={(e)=> setRam(e.target.value)}/>
              <span>kindly specify RAM of product</span>
            </Input>
          </Inputcont>
          <Inputcont>
            <Tag>Price*</Tag>
            <Input>
              <input placeholder="price" type="number" value={ price} onChange={(e)=> setprice(e.target.value)}/>
              <span>kindly specify RAM of product</span>
            </Input>
          </Inputcont>
          <Inputcont>
            <Tag>Condition*</Tag>
            <Input>
              <select placeholder="Select condition" value={ condition } onChange={ (e) => setcondition(e.target.value) } >
                <option>Select Condition</option>
                <option>New</option>
                <option>Used</option>
              </select>
              <span>kindly specify condition of product</span>
            </Input>
          </Inputcont>
          <Inputcont>
            <Tag>Description*</Tag>
            <Input>
              <textarea placeholder="description" value={ description} onChange={(e)=> setdescription(e.target.value)}/>
              <span>kindly specify description of product</span>
            </Input>
          </Inputcont>
        </Inputhold>
        <Btn>
        <Button type='submit' disabled={create.status === "loading" ? true: false}>{ create.status === "loading" ? "Loading..." : "Enter Product Variation"}</Button>
        </Btn>
      </Wrapper>
    </Container>
  );
};

export default Uploadimg;

const InputFile = styled.input`
    width: 100%;
    height: 100%;
    cursor: pointer;
    display: none;
`
const Icon = styled(BiPlus)`
  font-size: 25px;
  position: absolute;
`;
const Image = styled.img`
    
    width: 100%;
    height: 100%;
    border-radius: 5px;
`
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
const Hold = styled.div`
  display: flex;
  padding: 10px 0;
`;
const Box = styled.label`
  width: 200px;
    height: 200px;
    border: 1px solid gray;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

  @media (max-width: 450px){
    height: 100px;
  }
`;
const Top = styled.div`
  width: 97%;
  border-top: 1.7px solid grey;
  padding: 10px 0;

  span {
    font-size: 15px;
    font-weight: 500;
  }

  div {
    font-size: 15px;
    font-weight: lighter;
  }
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
