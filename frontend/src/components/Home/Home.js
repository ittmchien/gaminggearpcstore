import React from "react";
import Product from "./Product";

const product = {
  name: "Vi du",
  images: [
    {
      url: "https://media-cdn.laodong.vn/storage/newsportal/2021/11/15/974164/Lisa.jpg?w=888&h=592&crop=auto&scale=both",
    },
  ],
  price: "3000",
  _id: "abc",
};

const Home = () => {
  return (
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="section-title">
              <h3 class="title">New Products</h3>
              <div class="section-nav">
                <ul class="section-tab-nav tab-nav">
                  <li class="active">
                    <a data-toggle="tab" href="#tab1">
                      Laptops
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab1">
                      Smartphones
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab1">
                      Cameras
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#tab1">
                      Accessories
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-md-12">
            <div class="row">
              <div class="products-tabs">
                <div id="tab1" class="tab-pane active">
                  <div class="products-slick" data-nav="#slick-nav-1">
                    <Product product={product} />
                  </div>
                  <div id="slick-nav-1" class="products-slick-nav"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
