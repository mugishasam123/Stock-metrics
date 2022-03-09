import * as actions from '../redux/stocks/actions/stockActions';

test('it will return undefined if no payload passed', () => {
  const request = actions.getAllStocks();
  const result = { type: 'stockmetrics/stocks/GET_ALL_STOCKS', undefined };
  expect(request).toEqual(result);
});
test('it will return undefined if there is no payload', () => {
  const request = actions.getStockDetails();
  const result = { type: 'stockmetrics/stocks/GET_ONE_STOCK', undefined };
  expect(request).toEqual(result);
});
