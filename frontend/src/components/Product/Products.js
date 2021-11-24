import React, { Fragment, useEffect, useState } from "react";
import "../../assets/products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import {
  BoxProduct,
  BoxProductColumn,
  BoxProductRow,
  BoxProductSmall,
} from "../boxContainer/common";
import MetaData from "../layout/MetaData";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";

const categories = ["CPU", "GPU", "MAINBOARD", "RAM"];

const Products = ({ match }) => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();

  const keyword = match.params.keyword;
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 50000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, alert, error]);

  let count = filteredProductsCount;

  return (
    <Fragment>
      <header>
        <Header />
      </header>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Sản phẩm -- Gaming Gear" />

          <BoxProduct>
            <h2 className="productsHeading">Danh Mục Sản Phẩm</h2>
            <BoxProductSmall>
              <BoxProductColumn>
                <Typography>Giá</Typography>
                <Slider
                  value={price}
                  onChange={priceHandler}
                  valueLabelDisplay="auto"
                  aria-labelledby="range-slider"
                  min={0}
                  max={50000}
                />
                <Typography component="legend" align="center">
                  Loại sản phẩm
                </Typography>
                <ul className="categoryBox">
                  {categories.map((category) => (
                    <li
                      className="category-link"
                      key={category}
                      onClick={() => setCategory(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>

                <fieldset className="fieldSet">
                  <Typography component="legend" align="center">
                    Xếp theo đánh giá
                  </Typography>
                  <Slider
                    value={ratings}
                    onChange={(e, newRating) => {
                      setRatings(newRating);
                    }}
                    aria-labelledby="continuous-slider"
                    valueLabelDisplay="auto"
                    min={0}
                    max={5}
                  />
                </fieldset>
              </BoxProductColumn>
              <BoxProductRow>
                {products &&
                  products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </BoxProductRow>
            </BoxProductSmall>
          </BoxProduct>
          {resultPerPage < count && (
            <div className="pagination-Box">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText=">"
                prevPageText="<"
                firstPageText="<<"
                lastPageText=">>"
                itemClass="page-Item"
                linkClass="page-Link"
                activeClass="page-Item-Active"
                activeLinkClass="page-Link-Active"
              />
            </div>
          )}
        </Fragment>
      )}
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default Products;
