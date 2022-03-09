import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { stocksListReducer, stockDetailsReducer } from './stocks/reducers/stockReducers';

const rootReducer = combineReducers({ stocks: stocksListReducer, details: stockDetailsReducer });
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
