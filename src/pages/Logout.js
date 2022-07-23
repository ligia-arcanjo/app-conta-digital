import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    return navigate('/');
  }

  return (
    <>
      <h3>Transação realizada com sucesso!</h3>

      <button type="button" onClick={() => navigate('/acoes')}>Voltar</button>

      <button onClick={logout} type="button">Sair</button>
    </>
  );
}

export default Logout;
