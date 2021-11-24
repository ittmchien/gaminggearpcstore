import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "../../assets/dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
import MetaData from "../layout/MetaData";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  const lineState = {
    labels: ["Thu nhập ban đầu", "Thu nhập hiện tại"],
    datasets: [
      {
        label: "Tổng thu nhập",
        backgroundColor: ["#EE2019"],
        hoverBackgroundColor: ["#000"],
        data: [0, totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels: ["Sản phẩm hết hàng", "Sản phẩm còn hàng"],
    datasets: [
      {
        backgroundColor: ["#EE2019", "blue"],
        hoverBackgroundColor: ["orange", "purple"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };

  return (
    <div className="dashboard">
      <MetaData title="Thống kê - Admin" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1">Thống kê</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              Tổng thu nhập <br /> ${totalAmount}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Sản phẩm</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Đơn hàng</p>
              <p>{orders && orders.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Người dùng</p>
              <p>{users && users.length}</p>
            </Link>
          </div>
        </div>

        <div className="lineChart">
          <Line data={lineState} />
        </div>

         <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;