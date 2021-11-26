import React, { Fragment } from "react";
import CheckoutSteps from "../Cart/CheckoutSteps";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
// import "../../assets/confirmorder.css";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

const ConfirmOrder = ({ history }) => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  const shippingCharges = subtotal > 1000 ? 0 : 200;

  const totalPrice = subtotal + shippingCharges;

  const address = `${shippingInfo.address}, ${shippingInfo.state}, ${shippingInfo.country}`;

  const proceedToPayment = () => {
    const data = {
      subtotal,
      shippingCharges,
      totalPrice,
    };

    sessionStorage.setItem("orderInfo", JSON.stringify(data));

    history.push("/process/payment");
  };

  return (
    <Fragment>
      <MetaData title="Kiểm tra đơn hàng" />
      <header>
        <Header />
      </header>
      <div style={{ marginTop: "5vmax" }}>
        <CheckoutSteps activeStep={1} />
      </div>

      <div className="confirmOrderPage">
        <div>
          <div className="confirmshippingArea">
            <Typography>Thông tin giao hàng</Typography>
            <div className="confirmshippingAreaBox">
              <div>
                <p>Tên:</p>
                <span>{user.name}</span>
              </div>
              <div>
                <p>Số điện thoại:</p>
                <span>{shippingInfo.phoneNo}</span>
              </div>
              <div>
                <p>Địa chỉ:</p>
                <span>{address}</span>
              </div>
            </div>
          </div>
          <div className="confirmCartItems">
            <Typography>Giỏ hàng:</Typography>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
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
        <div>
          <div className="orderSummary">
            <Typography>Thông tin đơn hàng</Typography>
            <div>
              <div>
                <p>Tổng giá:</p>
                <span>${subtotal}</span>
              </div>
              <div>
                <p>Phí giao hàng:</p>
                <span>${shippingCharges}</span>
              </div>
            </div>

            <div className="orderSummaryTotal">
              <p>
                <b>Tổng tiền:</b>
              </p>
              <span>${totalPrice}</span>
            </div>

            <button onClick={proceedToPayment}>Thanh toán</button>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default ConfirmOrder;
