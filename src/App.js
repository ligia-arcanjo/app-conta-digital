import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import StockList from './pages/StockList';
import Trade from './pages/Trade';
import Account from './pages/Account';
import Deposit from './pages/Deposit';
import Transfer from './pages/Transfer';
import Logout from './pages/Logout';
import BuyStocks from './pages/BuyStocks';
import './style/App.css';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Login />} />
      <Route path="/acoes" element={<StockList />} />
      <Route path="/compra-e-venda/:id" element={<Trade />} />
      <Route path="/compra/:id" element={<BuyStocks />} />
      <Route path="/conta" element={<Account />} />
      <Route path="/deposito" element={<Deposit />} />
      <Route path="/transferencia" element={<Transfer />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}

export default App;
