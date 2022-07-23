import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonReturn from '../components/ButtonReturn';
import getAccountByUser from '../services/getAccountByUser';

function Transfer() {
  const navigate = useNavigate();
  const [transferValue, setTransferValue] = useState();
  const [accountBalance, setAccountBalance] = useState();
  const [valueIsCorrect, setValueIsCorrect] = useState(true);

  useEffect(() => {
    const getAccount = async () => {
      const accessInfo = JSON.parse(localStorage.getItem('accessInfo'));
      const accountData = await getAccountByUser(accessInfo.token);

      setAccountBalance(accountData.accountBalance);
    };

    getAccount();
  });

  function confirmTransaction() {
    if (transferValue >= accountBalance) {
      return setValueIsCorrect(false);
    }

    return navigate('/logout');
  }

  return (
    <>
      <h3>Transferência</h3>
      <label htmlFor="value-transfer">
        Informe o valor desejado:
        <input
          id="value-transfer"
          type="number"
          onChange={({ target: { value } }) => setTransferValue(value)}
          placeholder="0000.00"
        />
      </label>

      {!valueIsCorrect && <span>Você não possui saldo para esta transferência!</span>}

      {
        transferValue && <button onClick={confirmTransaction} type="button">Confirmar</button>
      }

      <ButtonReturn />
    </>
  );
}

export default Transfer;
