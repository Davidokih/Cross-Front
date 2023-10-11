import React from "react";
import styled from "styled-components";
import Dashcard from "./Dashcard";
import Uniheader from "./Uniheader";
import { useQuery } from "@tanstack/react-query";
import { getAllProduct, sellerProducts } from "../Api/ProductApi";
import { orders } from "../Api/OrderApi";
import { useEffect } from "react";
import {RiWalletLine} from "react-icons/ri"
import { MdStorefront } from "react-icons/md"
import { RxSketchLogo, RxAvatar } from "react-icons/rx"

const Dashboard = () => {

  const check = JSON.parse(localStorage.getItem("user"))
  const id = check._id
  const { data } = useQuery({
    queryKey: [ "products" ],
    queryFn: ()=>sellerProducts(id)
  })
  const {data: orderData} = useQuery({
    queryKey: ["orders"],
    queryFn: orders
  })
  const filteredData = orderData?.filter((el) => {
    const filteredProducts = el?.products?.filter((e) => e.sellerID === id)
    // console.log(filteredProducts)
    return filteredProducts.length > 0;
  })
  const pending = data?.filter((el) => el.status === "pending").length
  const approved = data?.filter((el) => el.status === "approved").length
  const cancled = data?.filter((el) => el.status === "cancled").length
  const liveProducts = data?.filter((el) => el.quantity > 0).length
  const returned = filteredData?.filter((el) => el.delivery_status === "returned").length
  // console.log(pending)

  const today = new Date().toLocaleDateString();
  // const checkData = filteredData?.findindex((el) => {
  //   const filtereed = el.products.findindex((el) => el.sellerID === id)
  //   return filtereed
  // })
  
  const totalSales = filteredData?.reduce((total, order) => {
    return total + order?.products.reduce((productTotal, product) => {
      return productTotal + (product.price * product.quantity)
    }, 0)
  }, 0);
  // console.log(filteredData)
  const newCheck = () => {
    let totalPrice = 0;

    if (filteredData == undefined) {
     console.log(filteredData)
    } else {
      for (const data of filteredData) {
        for (const product of data.products) {
          totalPrice += product.price * product.qty;
        }
      }
    }
    return totalPrice
  }
  const numberOfSales =newCheck()

  // console.log(numberOfSales)
  useEffect(() => {
    newCheck()
  },[])

  var nf = Intl.NumberFormat()
  return (
    <Container>
      <Uniheader />
      <Wrap>
        <Dashcard pr={<RiWalletLine />} da="Mar 16" ti="Today" bg="#3d3dee" sales1={ nf.format(numberOfSales) } name="Totals Sales"/>
        <Dashcard pr={<MdStorefront /> } da="Mar 16" ti="Today" bg="#3d3dee" sales={ pending }
        name="Pending Products"/>
        <Dashcard pr={ <MdStorefront /> } da="Mar 16" ti="Today" bg="#3d3dee" sales={ liveProducts } name="Live Products"/>
        <Dashcard pr={ <MdStorefront /> } da="Mar 16" ti="Today" bg="#3d3dee" sales={ pending }
        name="Pending Products"/>
        <Dashcard
          pr={<MdStorefront /> } da="Mar 16" ti="Today" bg="#3d3dee" sales={ approved } name="Approved Products"
        />
        <Dashcard
         pr={<MdStorefront /> } da="Mar 16" ti="Today" bg="#3d3dee" sales={ cancled } name="Cancled Products"
        />
        <Dashcard
         pr={<MdStorefront /> } da="Mar 16" ti="Today" bg="#3d3dee" sales={ filteredData?.length} name="Orders"
        />
        <Dashcard
         pr={<MdStorefront /> } da="Mar 16" ti="Today" bg="#3d3dee" sales={ returned} name="Returned Products"
        />
      </Wrap>
    </Container>
  );
};

export default Dashboard;
// const Container = styled.div``
// const Container = styled.div``
const Wrap = styled.div`
  width: 87%;
  border-top: 1.8px solid grey;
  /* padding: 30px; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #f7f8f9;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
