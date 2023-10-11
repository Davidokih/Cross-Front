import React,{useState} from 'react'
import Uniheader from '../SigmUpAndSignIn/Uniheader'
import Productpage from '../SigmUpAndSignIn/Productpage'
import styled  from 'styled-components'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { sellerProducts } from '../Api/ProductApi'
import moment from 'moment'
import Data from "./Data"
import ReactPaginate from 'react-paginate'
import "../../App.css"
import Search from '../Search'
import { BiSearch } from "react-icons/bi";

const Products = () => {

  const user = JSON.parse(localStorage.getItem("user"));
  const queryCLient = useQueryClient()
  
  // Lama dev filter
  const userID = user._id
  const {data} = useQuery({
    queryKey: ["posts"],
    queryFn: () => sellerProducts(userID)
  })
  
  const [ currentPage, setCurrentPage ] = useState(0)
  const recordPage = 6
  const lastIndex = currentPage * recordPage
  const pageCount = Math.ceil(data?.length / recordPage)
  const currentPageData = data?.slice(lastIndex, lastIndex + recordPage)
  const changeCPage = ({selected}) => {
    setCurrentPage(selected)
  }
  console.log(data)

  const [ query, setQuery ] = useState("")
  // console.log(query)
  const keys = ["name", "brand","tag"]

  const search = (e) => {
    const result = e?.filter((item) =>
   keys.some((key) => {
      const value = item[key];
      return typeof value === "string" && value.toLowerCase().includes(query);
    })
  );
  return query ? (result?.length ? result : null) : e
  }
  const searchData = search(currentPageData)
  var nf = Intl.NumberFormat()
  return (
      <Container>
      <Uniheader />
      <Header>
            <Text>All Products</Text>
            <SerachHold>
          <input
              placeholder="Search by name or brand"
              value={ query }
              onChange={e=> setQuery(e.target.value)}
          />
            <button onClick={search}>
            <BiSearch />
            </button>
        </SerachHold>
          </Header>
      <Wrapper>
      <Buttom>
          
          <Head>
            <Th>
              <HoldHead>Product </HoldHead>
            </Th>
            <Th>
              <HoldHead>Tag </HoldHead>
            </Th>
            <Th>
              <HoldHead>Created</HoldHead>
            </Th>
            <Th>
              <HoldHead>Price</HoldHead>
            </Th>
            <Th>
              <HoldHead>Aval / Qty </HoldHead>
            </Th>
            <Th>
              <HoldHead>Active </HoldHead>
            </Th>

            <Th>
              <HoldHead>Action </HoldHead>{" "}
            </Th>
        </Head>
        {
            searchData?.map((props,index) => (
              <Productpage index={ index } key={ index } avatar={ props?.avatar[ 0 ].url } name={ props.name } tag={ props.tag_No } created={ moment(props.createdAt).format("D MMM YYYY") } quantity={ props.quantity } active={ props.active } price={ nf.format(props.price)} />
            ))
      }
        </Buttom>
      </Wrapper>
      <ReactPaginate
        // breakLabel="..."
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={ pageCount }
        onPageChange={ changeCPage }
        containerClassName={"pagination"}
        previousLinkClassName={"pagination_link"}
        nextLinkClassName={"pagination_link"}
        disabledClassName={ "pagination_link_disable" }
        activeClassName={"pagination_link_active"}
        // renderOnZeroPageCount={ null }
      />
    </Container>
  )
}

export default Products

const SerachHold = styled.div`
  width: 400px;
  height: 40px;
  border: 2px solid #d975c0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  input {
    /* height: 40px; */
    width: 350px;
    outline: none;
    border: 0;
    padding-left: 10px;
  }
  button {
    width: 70px;
    height: 40px;
    background-color: #d975c0;
    border: 0px;
    outline: none;

    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
  }

  @media (max-width: 660px) {
    width: 250px;
  }
`
const Wrapper = styled.div`
  width: 90%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;
const Container = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Header = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;
const Text = styled.div`
  border-bottom: 2px solid blue;
`;
// const Wrapper = styled.div``
const HoldHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: #0dbb0d; */
`;
const Th = styled.th`
  padding: 10px 15px;
  background-color: #f8f9fa;
  color: #1b2559;
  font-size: 18px;
  font-weight: 600;
  /* text-align: center; */
  border-left: 1.5px solid #d0d1d2;
  // border: 1px solid black;
`;
const Head = styled.tr`
  border-bottom: 1px solid lightgray;
  border-top: 5.5px solid #d975c0;
  border-right:1px solid lightgray;
`;
const Buttom = styled.table`
  width: 78rem;
  /* padding: 0px 20px; */
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  /* overflow-x: scroll; */
`;
