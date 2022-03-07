import React from "react";

import { useSelector } from "react-redux";
import StockCard from "./StockCard";

const StockList = () => {
  const stocks = useSelector(( state ) => state.stocks);
  console.log(stocks)
  return (
    <section className="book-list">
      {stocks.map((stock) => (
        <StockCard key={stock.ticker} stock={stock}/>
      ))}
    </section>
  );
};

export default StockList;
