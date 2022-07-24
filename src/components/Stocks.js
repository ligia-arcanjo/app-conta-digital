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
    <div className="table-card">
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
                <td>{stock.company}</td>
                <td>{stock.amount}</td>
                <td>{`R$ ${stock.price}`}</td>
                <td>
                  <Link
                    className="link-button link-buy"
                    to={`/compra/${stock.id}`}
                  >
                    COMPRAR
                  </Link>
                </td>
              </tr>
            )) : null
          }
        </tbody>
      </table>
    </div>
  );
}

export default Stocks;
