import React from "react";
import "../styles/card.css";
import { useNavigate } from 'react-router-dom';
import {
  IoIosArrowRoundForward,
  IoIosArrowRoundDown,
  IoIosArrowRoundUp,
} from "react-icons/io";


const StockCard = ({ stock }) => {
  const navigate = useNavigate();
  return (
    
    <div className="stock-card"  onClick={() => navigate(`/details/${stock.ticker}`)}>
      <div className="company-name">
        <h3 className="title-name"> {stock.companyName} </h3>
        <IoIosArrowRoundForward className="rounded" />
      </div>
      <span className="ticker"> {stock.ticker} </span> 
      <span> ${stock.price} </span>
      <span> < IoIosArrowRoundUp className="green-arrow"/>{stock.changes} </span>
       <span>< IoIosArrowRoundDown className="red-arrow"/> {stock.changesPercentage} </span>
    </div>
  );
};

export default StockCard;
