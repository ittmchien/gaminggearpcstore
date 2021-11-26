import React, { Fragment } from "react";
import ErrorIcon from "@material-ui/icons/Error";
// import "../../../assets/notfound.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const NotFound = () => {
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      <div className="PageNotFound">
        <ErrorIcon />

        <Typography>Không tìm thấy trang</Typography>
        <Link to="/">Trở về trang chủ</Link>
      </div>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default NotFound;
