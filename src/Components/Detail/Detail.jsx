import React, { useEffect, useState } from "react";
import Detailmiddle from "./Detailmiddle";
import Detaildown from "./Detaildown";
import Detailup from "./Detailup";
import DetailProduct from "./DetailProduct";
import styled from "styled-components";
import { getSingleProduct } from "../Api/ProductApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { signOut, addProduct, addToCart, removeCart } from "../Global/GlobalState"

const Detail = () => {
  const {id} = useParams()

  const dispatch = useDispatch();
  // const [cart, setCart] = useState([])
  const { data } = useQuery({
    queryKey: [ "products", id ],
    queryFn: ()=> getSingleProduct(id),
  })

  console.log(data)
  var nf = Intl.NumberFormat()

  return (
    <Container>
      <Wrapper>
        <Detailup name={ data?.name } price={ nf.format(data?.price) } />
        <Detailmiddle id={id} qty={data?.quantity} avatar={ data?.avatar } data={ data } />
        <Detaildown description={ data?.description} />
        <DetailProduct />
      </Wrapper>
    </Container>
  );
};

export default Detail;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;
const Wrapper = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
`;
