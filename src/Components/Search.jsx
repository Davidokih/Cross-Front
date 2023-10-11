import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { BiSearch,BiArrowBack } from "react-icons/bi";
import styled from 'styled-components';
import { getAllProduct } from './Api/ProductApi';
import { NavLink } from 'react-router-dom';

const Search = ({setshow_search}) => {

  const { data } = useQuery({
    queryKey: [ "products" ],
    queryFn: getAllProduct
    
  })
  const [ currentPage, setCurrentPage ] = useState(0)

  const filteredData = data?.filter((el)=> el.status === "approved")
  const recordPage = 20
  const lastIndex = currentPage * recordPage
  const currentPageData = filteredData?.slice(lastIndex, lastIndex + recordPage)
  const [ query, setQuery ] = useState()
  // console.log(query)
  const keys = ["name", "brand","category"]

    
  const search = (e) => {
    const result = e?.filter((item) =>
   keys.some((key) => {
      const value = item[key];
      return typeof value === "string" && value.toLowerCase().includes(query?.toLowerCase());
    })
  );
  return query ? (result?.length ? result : null) : null
  }
  const searchData = search(currentPageData)
  // console.log(searchData)
  return (
    <Container>
      <Hold>
        <span onClick={()=> setshow_search(false)}><BiArrowBack size="30px" color="white"/></span>
       <SearchHold>
          <input
              placeholder="Search by name or brand"
              value={ query }
              onChange={e=> setQuery(e.target.value)}
          />
          <button onClick={ () => {
             search(currentPageData)
            }}>
            <BiSearch />
            </button>
      </SearchHold>
    </Hold>
      <div>
      {
          searchData?.map((props, index) => (
            <Div key={props._id} onClick={ () => {
              setshow_search(false)
            }}>
              <Navs to={ `/${props.name}` } onClick={ () => {
                setQuery("")
              }}>{props.name }</Navs>
          </Div>
        ))
      }
      </div>
    </Container>
  )
}

export default Search;

const Navs = styled(NavLink)`
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  color: black;
  /* border-bottom: 1px solid lightgray; */
  padding: 10px 5px;

  :hover{
    color: #d975c0;
    background-color: lightgray;
  }
`
const Hold = styled.div`
  display: flex;
`
const Container = styled.div`

  @media (max-width: 768px){
    width: 100%;
    display: flex;
    flex-direction: column;

    span{
      height: 60px;
      /* background-color: gold; */
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5px 15px 10px 5px;
      cursor: pointer;
    }
  }
`
const Div = styled.div`
  width: 400px;
  max-height: 300px;
  background-color: white;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100px;
  border: 1px solid #d975c0;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  overflow-y: auto;

  @media (max-width: 768px){
    position: relative;
    top: 20px;
    width: 100%;
    border: 0;
    border-radius: 0px;
  }
`
const SearchHold = styled.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  background-color: white;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
    background-color: transparent;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;
    cursor: pointer;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
    margin-right: 10px;
    input{
      width: 95%;
    }
  }
`;