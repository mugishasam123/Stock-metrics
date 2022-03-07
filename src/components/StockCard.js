import React from "react";

const StockCard = ({ stock }) => {
  
    return (
      <div className="stock-card">
        <div>
          <h3>{stock.companyName}</h3>
        </div>
        <span>{stock.ticker}</span>
        <span>{stock.price}</span>
        <span>{stock.changes}</span>
        <span>{stock.changesPercentage}</span>
        </div>
    );
};

export default StockCard;