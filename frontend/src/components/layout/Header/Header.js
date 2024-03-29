import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoBlack from "../../../assets/img/logo-black.png";
import LogoWhite from "../../../assets/img/logo-white.png";
import UserOptions from "../Header/UserOptions";
import { useSelector } from "react-redux";
import Search from "../../Product/Search";

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [scrollNavbar, setScrollNavbar] = useState(
    "navbar navbar-expand-lg fixed-top py-3"
  );
  const [logo, setLogo] = useState(LogoBlack);
  window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;

    console.log(scroll);
    if (scroll > 8) {
      setScrollNavbar("navbar active navbar-expand-lg fixed-top py-3");
      setLogo(LogoWhite);
    } else {
      setScrollNavbar("navbar navbar-expand-lg fixed-top py-3");
      setLogo(LogoBlack);
    }
  });
  return (
    <header>
      <div>
        <nav className={scrollNavbar}>
          <div className="container">
            <Link
              to="/"
              className="navbar-brand text-uppercase font-weight-bold"
            >
              <img
                src={logo}
                alt="logo"
                style={{ width: "100%", height: "40px" }}
              />
            </Link>
            <button
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              className="navbar-toggler navbar-toggler-right"
            >
              <i className="fa fa-bars"></i>
            </button>

            <div
              id="navbarSupportedContent"
              className="collapse navbar-collapse"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link
                    to="/"
                    className="nav-link text-uppercase font-weight-bold"
                  >
                    Trang Chủ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/products"
                    className="nav-link text-uppercase font-weight-bold"
                  >
                    Sản Phẩm
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="#"
                    className="nav-link text-uppercase font-weight-bold"
                  ></Link>
                </li>

                {isAuthenticated && <UserOptions user={user} />}
              </ul>
              <Search />
              <ul className="navbar-nav ml-auto">
                {!isAuthenticated && (
                  <li className="nav-item">
                    <Link
                      to="/login"
                      className="nav-link text-uppercase font-weight-bold"
                    >
                      Đăng Nhập
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
