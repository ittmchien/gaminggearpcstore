import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";



const Product = ({ product }) => {
  const options = {
    edit: false,
    color: "#E4E7ED",
    activeColor: "#D10024",
    value: product.ratings,
    isHalf: true,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} />
        <span>({product.numOfReviews} Reviews)</span>
      </div>
      <span>{`${product.price} VNĐ`}</span>
    </Link>
  );
};

export default Product;
