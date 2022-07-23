import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonReturn from '../components/ButtonReturn';

function Deposit() {
  const navigate = useNavigate();
  const [depositValue, setDepositValue] = useState();
  const confirmTransaction = () => navigate('/logout');

  return (
    <>
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

      {
        depositValue > 0 && <button onClick={confirmTransaction} type="button">Confirmar</button>
      }

      <ButtonReturn />
    </>
  );
}

export default Deposit;
