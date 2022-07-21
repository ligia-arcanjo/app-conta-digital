import React from 'react';
import { Link } from 'react-router-dom';

function Trade() {
  return (
    <>
      <span>User</span>

      <h1>Comprar e Vender Ações</h1>
      <table>
        <tbody>
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
        </tbody>
      </table>

      <div>
        <button type="button">Comprar</button>
        <button type="button">Vender</button>
      </div>

      <div>
        <button type="button">Voltar</button>
        <button type="button">Confirmar</button>
      </div>

      <button type="button">Acessar conta</button>
    </>
  );
}

export default Trade;
