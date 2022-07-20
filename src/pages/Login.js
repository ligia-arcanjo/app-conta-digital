import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  function login() {
    navigate('acoes');
  }

  return (
    <form>
      <input placeholder="E-mail" />
      <input placeholder="Senha" />

      <button onClick={login} type="button">Entrar</button>
    </form>
  );
}

export default Login;
