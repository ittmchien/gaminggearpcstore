import React, { Fragment, useEffect } from "react";
import "../../assets/orderdetails.css";
import { useSelector, useDispatch } from "react-redux";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { getOrderDetails, clearErrors } from "../../actions/orderAction";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

const OrderDetails = ({ match }) => {
  const { order, error, loading } = useSelector((state) => state.orderDetails);

  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getOrderDetails(match.params.id));
  }, [dispatch, alert, error, match.params.id]);
  return (
    <Fragment>
      <header>
        <Header />
      </header>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Chi tiết đơn hàng" />
          <div className="orderDetailsPage">
            <div className="orderDetailsContainer">
              <Typography component="h1">
                Đơn hàng #{order && order._id}
              </Typography>
              <Typography>Thông tin giao hàng</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p>Tên:</p>
                  <span>{order.user && order.user.name}</span>
                </div>
                <div>
                  <p>Số điện thoại:</p>
                  <span>
                    {order.shippingInfo && order.shippingInfo.phoneNo}
                  </span>
                </div>
                <div>
                  <p>Địa chỉ:</p>
                  <span>
                    {order.shippingInfo &&
                      `${order.shippingInfo.address},  ${order.shippingInfo.state},  ${order.shippingInfo.country}`}
                  </span>
                </div>
              </div>
              <Typography>Thanh toán</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.paymentInfo &&
                      order.paymentInfo.status === "succeeded"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.paymentInfo &&
                    order.paymentInfo.status === "succeeded"
                      ? "Đã thanh toán"
                      : "Chưa thanh toán"}
                  </p>
                </div>

                <div>
                  <p>Tổng tiền:</p>
                  <span>${order.totalPrice && order.totalPrice}</span>
                </div>
              </div>

              <Typography>Trạng thái đơn hàng</Typography>
              <div className="orderDetailsContainerBox">
                <div>
                  <p
                    className={
                      order.orderStatus && order.orderStatus === "Delivered"
                        ? "greenColor"
                        : "redColor"
                    }
                  >
                    {order.orderStatus && order.orderStatus === "Delivered"
                      ? "Đã giao hàng"
                      : "Đang giao hàng"}
                  </p>
                </div>
              </div>
            </div>

            <div className="orderDetailsCartItems">
              <Typography>Sản phẩm</Typography>
              <div className="orderDetailsCartItemsContainer">
                {order.orderItems &&
                  order.orderItems.map((item) => (
                    <div key={item.product}>
                      <img src={item.image} alt="Product" />
                      <Link to={`/product/${item.product}`}>
                        {item.name}
                      </Link>{" "}
                      <span>
                        {item.quantity} X ${item.price} ={" "}
                        <b>${item.price * item.quantity}</b>
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Fragment>
      )}
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default OrderDetails;
