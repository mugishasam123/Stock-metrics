

export const GET_ALL_STOCKS = "stockmetrics/stocks/GET_ALL_STOCKS";
export const GET_ONE_STOCK = "stockmetrics/stocks/GET_ONE_STOCK";

export const getAllStocks = (payload) => ({
  type: GET_ALL_STOCKS,
  payload,
});

export const getStockDetails = (payload) => ({
    type:  GET_ONE_STOCK,
    payload,
  });
  