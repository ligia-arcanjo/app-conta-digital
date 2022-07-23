import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonReturn from '../components/ButtonReturn';
import Header from '../components/Header';
import { getStockById } from '../services/fetchStocks';

function BuyStocks() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [stock, setStock] = useState();
  const [inputQuantity, setInputQuantity] = useState();
  const [valueIsValid, setValueIsValid] = useState(true);

  useEffect(() => {
    const getStock = async () => {
      const accessInfo = JSON.parse(localStorage.getItem('accessInfo'));
      const stockById = await getStockById(accessInfo.token, id);
      setStock(stockById);
    };

    getStock();
  }, []);

  function confirmTransaction() {
    if (inputQuantity < 0 || inputQuantity > stock[0].amount) {
      return setValueIsValid(false);
    }

    return navigate('/logout');
  }

  return (
    <>
      <Header />

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
        <button type="button">Comprar</button>
        <input
          type="number"
          placeholder="quantidade"
          onChange={({ target: { value } }) => setInputQuantity(value)}
        />
      </div>

      <div>
        { !valueIsValid && <p>A quantidade não á válida para esta transação</p>}
        <button onClick={confirmTransaction} type="button">Confirmar</button>
      </div>

      <div>
        <ButtonReturn />
        <button onClick={() => navigate('/conta')} type="button">Acessar conta</button>
      </div>
    </>
  );
}

export default BuyStocks;
