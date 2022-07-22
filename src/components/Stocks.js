import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllStocks } from '../services/fetchStocks';

function Stocks() {
  const [stockList, setStockList] = useState();

  useEffect(() => {
    const getStockList = async () => {
      const stocks = await getAllStocks();
      setStockList(stocks);
    };

    getStockList();
  }, []);

  return (
    <>
      <h3>Ações disponíveis para compra</h3>

      <table>
        <tbody>
          <tr>
            <th>Ação</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Negociar</th>
          </tr>

          {
            stockList ? stockList.map((stock) => (
              <tr key={stock.id}>
                <th>{stock.company}</th>
                <th>{stock.amount}</th>
                <th>{`R$ ${stock.price}`}</th>
                <th>
                  <Link to="/compra-e-venda">Comprar</Link>
                </th>
              </tr>
            )) : null
          }
        </tbody>
      </table>
    </>
  );
}

export default Stocks;
