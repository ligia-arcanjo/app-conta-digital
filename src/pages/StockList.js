import React from 'react';
import { Link } from 'react-router-dom';

function StockList() {
  return (
    <>
      <span>User</span>

      <div id="minhas-acoes">
        <h3>Minhas ações</h3>
        <table>
          <tr>
            <th>Ação</th>
            <th>Quantidade</th>
            <th>Valor</th>
            <th>Negociar</th>
          </tr>
          <tr>
            <th>AZUL4</th>
            <th>100</th>
            <th>350,00</th>
            <th>
              <Link to="/compra-e-venda">Comprar</Link>
              <Link to="/compra-e-venda">Vender</Link>
            </th>
          </tr>
          <tr>
            <th>PETR4</th>
            <th>100</th>
            <th>350,00</th>
            <th>
              <Link to="/compra-e-venda">Comprar</Link>
              <Link to="/compra-e-venda">Vender</Link>
            </th>
          </tr>
          <tr>
            <th>VALE4</th>
            <th>100</th>
            <th>350,00</th>
            <th>
              <Link to="/compra-e-venda">Comprar</Link>
              <Link to="/compra-e-venda">Vender</Link>
            </th>
          </tr>
        </table>
      </div>

      <button type="button">Acessar conta</button>
    </>
  );
}

export default StockList;
