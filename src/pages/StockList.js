import React from 'react';
import Header from '../components/Header';
import Stocks from '../components/Stocks';
import UserStocks from '../components/UserStocks';

import '../style/Stocklist.css';

function StockList() {
  return (
    <>
      <Header />

      <div className="stocklist">
        <UserStocks />
        <Stocks />
      </div>
    </>
  );
}

export default StockList;
