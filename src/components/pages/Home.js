import React from "react";
import "../../styles/home.css";
import Header from "../Header";
import Man from "../Man";

import StockList from "../StockList";
const Home = () => {
  return (
    <>
      <section className="homepage">
        <Header home />
        <Man />
        <StockList />
      </section>{" "}
    </>
  );
};

export default Home;
