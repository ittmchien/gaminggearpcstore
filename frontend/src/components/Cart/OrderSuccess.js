import React, { Fragment } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
// import "../../assets/ordersuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import MetaData from "../layout/MetaData";

const OrderSuccess = () => {

  return (
    <Fragment>
      <MetaData title="Thanh toán thành công" />
      <header>
        <Header />
      </header>
      <div className="orderSuccess">
        <CheckCircleIcon />

        <Typography>Đơn hàng của bạn đang được xử lý và giao hàng</Typography>
        <Link to="/orders">Xem đơn hàng</Link>
      </div>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default OrderSuccess;
