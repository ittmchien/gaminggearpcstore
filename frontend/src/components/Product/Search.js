import React, { useState, Fragment } from "react";
import MetaData from "../layout/MetaData";
// import "../../assets/search.css";
import Header from "../layout/Header/Header";
import {
  FormSearch,
  InputSearch,
  InputSubmitSearch,
} from "../boxContainer/common";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const history = useHistory();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/products/${keyword}`);
    } else {
      history.push("/products");
    }
  };

  return (
    <Fragment>
      {/* <MetaData title="Tìm kiếm sản phẩm -- Gaming Gear" />
      <header>
        <Header />
      </header> */}
      <FormSearch onSubmit={searchSubmitHandler}>
        <InputSearch
          type="text"
          placeholder="Tìm kiếm sản phẩm"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <InputSubmitSearch type="submit" value="Tìm kiếm" />
      </FormSearch>
    </Fragment>
  );
};

export default Search;
