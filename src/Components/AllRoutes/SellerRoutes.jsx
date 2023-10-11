import React from "react";
import { useRoutes } from "react-router-dom";
import Dashboard from "../SigmUpAndSignIn/Dashboard";
import Products from "../Products/Products";
import Private from "../Private";
import LiveProduct from "../Products/LiveProduct";
import SoldProduct from "../Products/SoldProduct";
import RejectedProduct from "../Products/RejectedProduct";
import AllOrders from "../OrderPages/AllOrders";
import PendingOrders from "../OrderPages/PendingOrders";
import ReadyToShip from "../OrderPages/ReadyToShip";
import Shipped from "../OrderPages/Shipped";
import Uploads from "../Uploads/Uploads";
import Uploadimg from "../Uploads/Uploadimg";
import Variation from "../Uploads/Variation";
import Uploadsuccess from "../Review/Uploadsuccess";
import Delivered from "../OrderPages/Delivered";
import Cancelled from "../OrderPages/Cancelled";
import Failed from "../OrderPages/Failed";
import Returned from "../OrderPages/Returned";
import UploadCloths from "../Uploads/UploadCloths";
import UploadElectronics from "../Uploads/uploadElectronics";
import UploadFood from "../Uploads/UploadFood";
import Transactions from "../OrderPages/Transactions";
import Settings from "../Settings/Settings"

const AllRoutes = () => {
  let element = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: (
            <Private>
              <Dashboard />
            </Private>
          ),
        },
        {
          path: "all-product",
          element: (
            <Private>
              <Products />
            </Private>
          ),
        },
        {
          path: "live-product",
          element: (
            <Private>
              <LiveProduct />
            </Private>
          ),
        },
        {
          path: "sold-product",
          element: (
            <Private>
              <SoldProduct />
            </Private>
          ),
        },
        {
          path: "rejected-product",
          element: (
            <Private>
              <RejectedProduct />
            </Private>
          ),
        },
        {
          path: "all-orders",
          element: (
            <Private>
              <AllOrders />
            </Private>
          ),
        },
        {
          path: "pending-orders",
          element: (
            <Private>
              <PendingOrders />
            </Private>
          ),
        },
        {
          path: "ready-to-ship",
          element: (
            <Private>
              <ReadyToShip />
            </Private>
          ),
        },
        {
          path: "transactions",
          element: (
            <Private>
              <Transactions />
            </Private>
          ),
        },
        {
          path: "shipped",
          element: (
            <Private>
              <Shipped />
            </Private>
          ),
        },
        {
          path: "uploads",
          element: (
            <Private>
              <Uploads />
            </Private>
          ),
        },
        {
          path: "uploading",
          element: (
            <Private>
              <Uploadimg />
            </Private>
          ),
        },
        {
          path: "upload-cloths",
          element: (
            <Private>
              <UploadCloths />
            </Private>
          ),
        },
        {
          path: "upload-electronics",
          element: (
            <Private>
              <UploadElectronics />
            </Private>
          ),
        },
        {
          path: "upload-foods",
          element: (
            <Private>
              <UploadFood />
            </Private>
          ),
        },
        {
          path: "variation",
          element: (
            <Private>
              <Variation />
            </Private>
          ),
        },
        {
          path: "success",
          element: (
            <Private>
              <Uploadsuccess />
            </Private>
          ),
        },
        {
          path: "delivered-orders",
          element: (
            <Private>
              <Delivered />
            </Private>
          ),
        },
        {
          path: "cancelled-orders",
          element: (
            <Private>
              <Cancelled />
            </Private>
          ),
        },
        {
          path: "failed-orders",
          element: (
            <Private>
              <Failed />
            </Private>
          ),
        },
        {
          path: "returned-orders",
          element: (
            <Private>
              <Returned />
            </Private>
          ),
        },
        {
          path: "settings",
          element: (
            <Private>
              <Settings />
            </Private>
          ),
        },
      ],
    },
  ]);

  return element;
};

export default AllRoutes;
