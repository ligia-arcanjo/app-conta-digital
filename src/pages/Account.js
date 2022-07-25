import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonReturn from '../components/ButtonReturn';
import Header from '../components/Header';
import getAccountByUser from '../services/getAccountByUser';

import '../style/Account.css';

function Account() {
  const navigate = useNavigate();
  const [accountBalance, setAccountBalance] = useState();

  useEffect(() => {
    const localAccBalance = Number(localStorage.getItem('accountBalance'));
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

  return (
    <>
      <Header hideAccountBtn />

      <div className="account-card">
        <div className="account-balance">
          <span>{`Saldo em conta: R$ ${accountBalance}`}</span>
        </div>

        <div className="button-row">
          <button
            type="button"
            className="button-secondary"
            onClick={() => navigate('/deposito')}
          >
            Depositar
          </button>

          <button
            type="button"
            className="button-secondary"
            onClick={() => navigate('/transferencia')}
          >
            Transferir
          </button>

          <ButtonReturn />
        </div>
      </div>
    </>
  );
}

export default Account;
