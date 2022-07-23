import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserStocks } from '../services/fetchStocks';

function UserStocks() {
  const [userStockList, setUserStockList] = useState();

  useEffect(() => {
    const getStockList = async () => {
      const accessInfo = JSON.parse(localStorage.getItem('accessInfo'));
      const stocks = await getUserStocks(accessInfo.token);
      setUserStockList(stocks);
    };

    getStockList();
  }, []);

  return (
    <>
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
                <th>{stock.company}</th>
                <th>{stock.amount}</th>
                <th>{`R$ ${stock.price}`}</th>
                <th>
                  <Link to={`/compra-e-venda/${stock.id}`}>Comprar</Link>
                  <Link to={`/compra-e-venda/${stock.id}`}>Vender</Link>
                </th>
              </tr>
            )) : null
          }
        </tbody>
      </table>
    </>
  );
}

export default UserStocks;
