import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserStocks } from '../services/fetchStocks';

function UserStocks() {
  const [userStockList, setUserStockList] = useState();

  useEffect(() => {
    const getStockList = async () => {
      const stocks = await getUserStocks();
      setUserStockList(stocks);
    };

    getStockList();
  }, []);

  return (
    <div className="table-card">
      <h3>Minhas ações</h3>

      <table>
        <tbody>
          <tr>
            <th>Ação</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Negociar</th>
          </tr>
          {
            userStockList ? userStockList.map((stock) => (
              <tr key={stock.id}>
                <td>{stock.company}</td>
                <td>{stock.amount}</td>
                <td>{`R$ ${stock.price}`}</td>
                <td>
                  <Link
                    className="link-button link-buy"
                    to={`/compra-e-venda/${stock.id}`}
                  >
                    COMPRAR
                  </Link>

                  <Link
                    className="link-button link-sell"
                    to={`/compra-e-venda/${stock.id}`}
                  >
                    VENDER
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

export default UserStocks;
