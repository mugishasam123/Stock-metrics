import * as actions from '../actions/stockActions';

const InitialStockList = [];
const InitialStockDetails = [];

export const stocksListReducer = (state = InitialStockList, action) => {
  switch (action.type) {
    case actions.GET_ALL_STOCKS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export const stockDetailsReducer = (state = InitialStockDetails, action) => {
  switch (action.type) {
    case actions.GET_ONE_STOCK:
      return [...action.payload];
    default:
      return state;
  }
};
