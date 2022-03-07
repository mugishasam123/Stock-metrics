import * as actions from '../actions/stockActions'

const APIKEY = '0977828996c3641c473b928b98aa4061';



export const fetchAllStocks = () => async(dispatch) => {
    const res = await fetch(`https://financialmodelingprep.com/api/v3/actives?limit=100&apikey=${APIKEY}`);
    const stocksData = await res.json();

    dispatch(actions.getAllStocks(stocksData));

}



export const fetchStockDetails = (payload) => async(dispatch) => {
    const res = await fetch(`https://financialmodelingprep.com/api/v3/income-statement/${payload}?limit=120&apikey=${APIKEY}`);
    const details = await res.json();
    dispatch(actions.getStockDetails(details))
}