import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from 'react-icons/io';
import { fetchStockDetails } from '../redux/stocks/thunks/stockApi';
import '../styles/cardDetails.css';

const CardDetails = () => {
  const details = useSelector((state) => state.details);
  const stocks = useSelector((state) => state.stocks);
  const dispatch = useDispatch();
  const param = useParams();
  useEffect(() => {
    dispatch(fetchStockDetails(param.id));
  }, [dispatch, param]);
  const stock = stocks.find((stock) => stock.ticker === param.id);

  return (
    <section className="income-statement">
      <h3 className="year-title"> YEARLY BREAKDOWN </h3>

      <ul>
        {details.map((data) => (
          <li key={data.calendarYear}>
            <div>
              <span>{data.calendarYear}</span>

              <span>{`Filling Date:${data.fillingDate}`}</span>

              <span>{`Accepted Date:${data.acceptedDate}`}</span>
            </div>

            <div>
              <span>{stock.ticker}</span>

              <span>
                <IoIosArrowRoundUp className="green-arrow" />

                {stock.changes}
              </span>

              <span>
                <IoIosArrowRoundDown className="red-arrow" />

                {stock.changesPercentage}
              </span>
            </div>

            <div className="short-div">
              <span>{`Revenue:${data.revenue}`}</span>

              <span>{`Profit:${data.grossProfit}`}</span>

              <span>{`Expenses:${data.costAndExpenses}`}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CardDetails;
