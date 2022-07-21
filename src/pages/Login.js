import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import generateDate from '../utils/generateDate';

function Login() {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  useEffect(() => {
    const emailRegex = /\S+@\S+\.com/;
    const MIN_PWD_LENGTH = 6;

    if (emailRegex.test(emailInput) && passwordInput.length >= MIN_PWD_LENGTH) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [emailInput, passwordInput]);

  function login() {
    const accessInfo = {
      userEmail: emailInput,
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

      <button hidden={isDisabled} onClick={login} type="button">Entrar</button>
    </form>
  );
}

export default Login;
