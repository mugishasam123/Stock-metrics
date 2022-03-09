import { render } from '@testing-library/react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import StockCard from '../components/StockCard';
import store from '../redux/store';
import StockList from '../components/StockList';

test('testing if stockcard is rendered', () => {
  const stock = {
    ticker: 'F',
    companyName: 'Ford',
    price: '32',
    changes: '0.23',
    changesPercentage: '0.003',
  };
  const history = createMemoryHistory();
  expect(
    render(
      <Router location={history.location} navigator={history}>
        <StockCard stock={stock} />
      </Router>,
    ),
  ).toMatchSnapshot();
});

test('if stockList renders correctly', () => {
  expect(
    render(
      <Provider store={store}>
        <StockList />
      </Provider>,
    ),
  ).toMatchSnapshot();
});
