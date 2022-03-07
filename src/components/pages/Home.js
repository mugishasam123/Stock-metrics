import React from "react";
import Header from "../Header";
import Man from "../Man";
import Search from "../Search";
import StockList from "../StockList";
const Home = () => {
  return (
    <>
      <Header home />
      <Man />
      <Search/>
      <StockList/>
    </>
  );
};

export default Home;
