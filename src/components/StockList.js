import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import StockCard from './StockCard';
import Search from './Search';
import '../styles/stocklist.css';
import searchFunc from '../utils/stockHelper';

const StockList = () => {
  const stocks = useSelector((state) => state.stocks);
  const [value, setValue] = useState('');

  const handleSearch = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <section className="stocks">
        <Search handleSearch={handleSearch} data={value} />
        <div className="stock-list">
          {stocks
            .filter((stock) => searchFunc(stock, value))
            .map((stock) => (
              <StockCard key={stock.ticker} stock={stock} />
            ))}
        </div>
      </section>
    </>
  );
};

export default StockList;
