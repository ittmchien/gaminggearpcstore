import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const options = {
  edit: false,
  color: "#E4E7ED",
  activeColor: "#D10024",
  size: window.innerWidth < 600 ? 20 : 25,
  value: 2.5,
  isHalf: true,
};

const Product = ({ product }) => {
  return (
      
    <div class="product">
      <Link className="productCard" to={product._id}>
        <div class="product-img">
          <img src={product.images[0].url} alt={product.name} />
          <div class="product-label">
            <span class="sale">-30%</span>
            <span class="new">NEW</span>
          </div>
        </div>
      </Link>
      <div class="product-body">
        <p class="product-category">Category</p>
        <h3 class="product-name">
          <a href="#">{product.name}</a>
        </h3>
        <h4 class="product-price">
          {product.price}
          {/* $980.00 <del class="product-old-price">$990.00</del> */}
        </h4>
        <ReactStars {...options} />
        {/* <div class="product-rating">
          
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
        </div> */}
        {/* <div class="product-btns">
          <button class="add-to-wishlist">
            <i class="fa fa-heart-o"></i>
            <span class="tooltipp">add to wishlist</span>
          </button>
          <button class="add-to-compare">
            <i class="fa fa-exchange"></i>
            <span class="tooltipp">add to compare</span>
          </button>
          <button class="quick-view">
            <i class="fa fa-eye"></i>
            <span class="tooltipp">quick view</span>
          </button>
        </div> */}
      </div>
      <div class="add-to-cart">
        <button class="add-to-cart-btn">
          <i class="fa fa-shopping-cart"></i> add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
