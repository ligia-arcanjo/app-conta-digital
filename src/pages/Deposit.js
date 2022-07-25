import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonReturn from '../components/ButtonReturn';
import Header from '../components/Header';

import '../style/Deposit.css';

function Deposit() {
  const navigate = useNavigate();
  const [depositValue, setDepositValue] = useState();
  const validAmount = () => Boolean(depositValue) && depositValue > 0;
  const confirmTransaction = () => {
    if (!validAmount()) {
      return false;
    }

    const accountBalance = Number(localStorage.getItem('accountBalance'));
    const newBalance = accountBalance + Number(depositValue);

    localStorage.setItem('accountBalance', newBalance);

    return navigate('/completed');
  };

  return (
    <>
      <Header hideAccountBtn />

      <div className="deposit-card">
        <h3>Depósito</h3>
        <label htmlFor="value">
          Informe o valor desejado:
          <input
            id="value"
            type="number"
            onChange={({ target: { value } }) => setDepositValue(value)}
            placeholder="0000.00"
          />
        </label>

        <div className="button-row">
          <ButtonReturn />
          <button
            className={`button-secondary${validAmount() ? '' : ' disabled'}`}
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

export default Deposit;
