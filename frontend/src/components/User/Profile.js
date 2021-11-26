import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
// import "../../assets/profile.css";
import Header from "../layout/Header/Header";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);
  return (
    <Fragment>
      <header>
            <Header />
          </header>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${user.name} -- Thông tin tài khoản`} />
          
          <div className="profileContainer">
            <div>
              <h1>Thông tin tài khoản</h1>
              <img src={user.avatar.url} alt={user.name} />
              <Link to="/me/update">Sửa thông tin tài khoản</Link>
            </div>
            <div>
              <div>
                <h4>Tên</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Ngày tạo</h4>
                <p>{String(user.createdAt).substr(0, 10)}</p>
              </div>

              <div>
                <Link to="/orders">Đơn hàng của tôi</Link>
                <Link to="/password/update">Đổi mật khẩu</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
