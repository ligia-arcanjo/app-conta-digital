import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ButtonReturn from '../components/ButtonReturn';
import Header from '../components/Header';
import { getUserStockById } from '../services/fetchStocks';

function Trade() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [stock, setStock] = useState();
  const [inputBuyQuantity, setInputBuyQuantity] = useState();
  const [inputSaleQuantity, setInputSaleQuantity] = useState();
  const [valueIsValid, setValueIsValid] = useState(true);

  useEffect(() => {
    const getStock = async () => {
      const stocks = await getUserStockById(id);
      setStock(stocks);
    };

    getStock();
  }, []);

  function confirmTransaction() {
    if (inputBuyQuantity < 0) {
      return setValueIsValid(false);
    }

    if (inputSaleQuantity < 0 || inputSaleQuantity > stock[0].amount) {
      return setValueIsValid(false);
    }

    return navigate('/logout');
  }

  return (
    <>
      <Header />

      <h1>Negociar minhas ações</h1>
      <table>
        <tbody>
          <tr>
            <th>Ação</th>
            <th>Quantidade na sua carteira</th>
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
          onChange={({ target: { value } }) => setInputBuyQuantity(value)}
        />
      </div>

      <div>
        <button type="button">Vender</button>
        <input
          type="number"
          placeholder="quantidade"
          onChange={({ target: { value } }) => setInputSaleQuantity(value)}
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

export default Trade;
