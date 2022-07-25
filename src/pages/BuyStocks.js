import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonReturn from '../components/ButtonReturn';
import Header from '../components/Header';
import { getStockById } from '../services/fetchStocks';

import '../style/BuyStocks.css';

function BuyStocks() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [stock, setStock] = useState();
  const [inputValue, setInputValue] = useState(1);

  useEffect(() => {
    const getStock = async () => {
      const stockById = await getStockById(id);
      setStock(stockById);
    };

    getStock();
  }, []);

  function valueIsValid() {
    if (inputValue && stock) {
      return inputValue > 0 && inputValue <= stock[0].amount;
    }

    return false;
  }

  function confirmTransaction() {
    if (valueIsValid()) {
      return navigate('/completed');
    }

    return false;
  }

  return (
    <>
      <Header />

      <div className="buystocks-card">
        <h1>Comprar ações</h1>
        <table>
          <tbody>
            <tr>
              <th>Ação</th>
              <th>Quantidade disponível</th>
              <th>Valor</th>
            </tr>
            {
            stock ? stock.map((s) => (
              <tr key={s.id}>
                <th>{s.company}</th>
                <th>{s.amount}</th>
                <th>{`R$ ${s.price}`}</th>
              </tr>
            )) : null
          }
          </tbody>
        </table>

        <div>
          <input
            type="number"
            placeholder="quantidade"
            min="1"
            onChange={({ target: { value } }) => setInputValue(value)}
            value={inputValue}
          />
        </div>

        <div>
          { !valueIsValid() && <p className="span-alert">Quantidade de ações indisponível.</p>}
        </div>

        <div className="button-row">
          <ButtonReturn />
          <button
            className={`button-secondary${valueIsValid() ? '' : ' disabled'}`}
            onClick={confirmTransaction}
            type="button"
          >
            Confirmar
          </button>
        </div>
      </div>
    </>
  );
}

export default BuyStocks;
