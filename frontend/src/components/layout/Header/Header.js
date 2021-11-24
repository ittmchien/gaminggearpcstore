import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoBlack from "../../../assets/img/logo-black.png";
import LogoWhite from "../../../assets/img/logo-white.png";

const Header = () => {
  const [scrollnavbar, setscrollnavbar] = useState(
    "navbar navbar-expand-lg fixed-top py-3"
  );
  const [logo, setlogo] = useState(LogoBlack);
  window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;

    console.log(scroll);
    if (scroll > 8) {
      setscrollnavbar("navbar active navbar-expand-lg fixed-top py-3");
      setlogo(LogoWhite);
    } else {
      setscrollnavbar("navbar navbar-expand-lg fixed-top py-3");
      setlogo(LogoBlack);
    }
  });
  return (
    <header>
      <div>
        <nav className={scrollnavbar}>
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
                <li className="nav-item">
                  <Link
                    to="/search"
                    className="nav-link text-uppercase font-weight-bold"
                  >
                    Tìm Kiếm Sản Phẩm
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/login"
                    className="nav-link text-uppercase font-weight-bold"
                  >
                    Đăng Nhập
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
