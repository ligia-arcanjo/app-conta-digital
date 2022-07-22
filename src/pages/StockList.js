import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Stocks from '../components/Stocks';
import UserStocks from '../components/UserStocks';

function StockList() {
  const navigate = useNavigate();

  const accessAccount = () => navigate('/conta');

  return (
    <>
      <Header />
      <UserStocks />
      <Stocks />

      <button onClick={accessAccount} type="button">Acessar conta</button>
    </>
  );
}

export default StockList;
