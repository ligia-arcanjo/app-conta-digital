import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import StockList from './pages/StockList';
import Trade from './pages/Trade';
import Account from './pages/Account';

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Login />} />
      <Route path="/acoes" element={<StockList />} />
      <Route path="/compra-e-venda" element={<Trade />} />
      <Route path="/conta" element={<Account />} />
    </Routes>
  );
}

export default App;
