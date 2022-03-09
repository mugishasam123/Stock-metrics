import React from "react";

import { useSelector } from "react-redux";
import StockCard from "./StockCard";
import Search from './Search'
import "../styles/stocklist.css";

const StockList = () => {
  const stocks = useSelector((state) => state.stocks);

  return (
    <>
    <section  className="stocks">
    <Search/>
    <div className="stock-list">
      {stocks.map((stock) => (
        <StockCard key={stock.ticker} stock={stock} />
      ))}
    </div>
    </section>
    </>
    
  );
};

export default StockList;
