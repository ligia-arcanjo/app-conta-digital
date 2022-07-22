import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonReturn from '../components/ButtonReturn';
import Header from '../components/Header';
import getAccountByUser from '../services/getAccountByUser';

function Account() {
  const navigate = useNavigate();
  const [accountBalance, setAccountBalance] = useState();

  useEffect(() => {
    const getAccount = async () => {
      const accessInfo = JSON.parse(localStorage.getItem('accessInfo'));
      const accountData = await getAccountByUser(accessInfo.token);

      setAccountBalance(accountData.accountBalance);
    };

    getAccount();
  });

  return (
    <>
      <Header />

      <div>
        <span>Saldo em conta</span>
        <span>{`R$ ${accountBalance}`}</span>
      </div>

      <div>
        <button
          type="button"
          onClick={() => navigate('deposito')}
        >
          Depositar
        </button>

        <button
          accountBalance={accountBalance}
          type="button"
          onClick={() => navigate('transferencia')}
        >
          Transferir
        </button>

        <ButtonReturn />
      </div>
    </>
  );
}

export default Account;
