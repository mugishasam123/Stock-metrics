import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllStocks } from "./redux/stocks/thunks/stockApi";
import Home from "./components/pages/Home";
import CardDetails from "./components/pages/CardDetails";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllStocks());
  });
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/details/" element={<CardDetails />} />
    </Routes>
  );
};

export default App;
