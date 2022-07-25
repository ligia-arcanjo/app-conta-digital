import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonReturn from '../components/ButtonReturn';
import Header from '../components/Header';
import getAccountByUser from '../services/getAccountByUser';

import '../style/Transfer.css';

function Transfer() {
  const navigate = useNavigate();
  const [transferValue, setTransferValue] = useState();
  const [accountBalance, setAccountBalance] = useState();
  const [valueIsValid, setValueIsValid] = useState(true);
  const localAccBalance = Number(localStorage.getItem('accountBalance'));
  const validAmount = () => Boolean(transferValue) && transferValue <= accountBalance;

  useEffect(() => {
    const getAccount = async () => {
      const accountData = await getAccountByUser();

      setAccountBalance(accountData.accountBalance);
      localStorage.setItem('accountBalance', accountData.accountBalance);
    };

    if (localAccBalance) {
      setAccountBalance(localAccBalance);
    } else {
      getAccount();
    }
  });

  function confirmTransaction() {
    const newAccBalance = localAccBalance - transferValue;

    if (!validAmount()) {
      return setValueIsValid(false);
    }

    localStorage.setItem('accountBalance', newAccBalance);

    return navigate('/completed');
  }

  return (
    <>
      <Header hideAccountBtn />
      <div className="transfer-card">
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

        {!valueIsValid && <span className="span-alert">Você não possui saldo para esta transferência!</span>}

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

export default Transfer;
