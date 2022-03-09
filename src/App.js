import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllStocks } from "./redux/stocks/thunks/stockApi";
import Home from "./components/pages/Home";
import Details from "./components/pages/Details";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllStocks());
  });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};

export default App;
