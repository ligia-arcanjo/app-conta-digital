import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import generateDate from '../utils/generateDate';

function Login() {
  const navigate = useNavigate();
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  function login() {
    const accessInfo = {
      userName: emailInput,
      dateAccess: generateDate().formatDate,
      hourAccess: generateDate().formatHours,
    };

    localStorage.setItem('accessInfo', JSON.stringify(accessInfo));
    navigate('acoes');
  }

  return (
    <form>
      <label htmlFor="email">
        E-mail:
        <input
          id="email"
          placeholder="Digite um e-mail válido"
          type="email"
          value={emailInput}
          onChange={({ target: { value } }) => setEmailInput(value)}
        />
      </label>

      <label htmlFor="password">
        Senha:
        <input
          id="password"
          placeholder="Mínimo de 6 caracteres"
          type="password"
          value={passwordInput}
          onChange={({ target: { value } }) => setPasswordInput(value)}
        />
      </label>

      <button onClick={login} type="button">Entrar</button>
    </form>
  );
}

export default Login;
