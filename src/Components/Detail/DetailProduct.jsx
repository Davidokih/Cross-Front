import React, { useState } from 'react'
import styled from "styled-components";
import { BsCart } from "react-icons/bs";
import ItemsCard from '../Allitems/ItemsCard';
import { getAllProduct } from '../Api/ProductApi';
import { useQuery } from '@tanstack/react-query';

const DetailProduct = () => {

  const { data } = useQuery({
    queryKey: [ "products" ],
    queryFn: getAllProduct
    
  })
  const [ currentPage, setCurrentPage ] = useState(0)

  const filteredData = data?.filter((el)=> el.status === "approved")
  const recordPage = 8
  const lastIndex = currentPage * recordPage
  const currentPageData = filteredData?.slice(lastIndex, lastIndex + recordPage)
  var nf = Intl.NumberFormat()
  return (
      <Container>
          <Wrapper>
        {/* <Downtitle>Mobiles</Downtitle> */}
        <Cardhold>
        {
        currentPageData?.map((props, index) => (
          <ItemsCard id={ props._id } name={ props.name } price={ nf.format(props?.price) } img={ props?.avatar[0].url} data={props}/>
        ))
        }
      </Cardhold>
        <Button to="/phone">
          <button>See All</button>
        </Button>
      </Wrapper>
    </Container>
  )
}

export default DetailProduct

const Button = styled.div`
  width: 97%;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    /* width: 9%; */
    background-color: #d975c0;
    color: white;
    font-size: 12px;
    padding: 8px 10px;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
  }
`;
const Cardhold = styled.div`
  margin-top: 10px;
  width: 100%;
  /* height: 360px; */
  display: flex;
  align-items: center;
  overflow-x: auto;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: space-between; */
  border: 1.9px solid #d975c0;
  padding: 0 10px;
  margin: 20px 0;
  border-radius: 2px;

  
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
