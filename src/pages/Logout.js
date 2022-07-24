import React from 'react';
import { useNavigate } from 'react-router-dom';
import { hasUserData } from '../utils/userData';

function Logout() {
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    window.location = '/';
  }

  if (hasUserData()) {
    return (
      <>
        <h3>Transação realizada com sucesso!</h3>

        <button type="button" onClick={() => navigate('/acoes')}>Voltar</button>

        <button onClick={logout} type="button">Sair</button>
      </>
    );
  }

  return logout();
}

export default Logout;
