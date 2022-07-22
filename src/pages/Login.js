import React, { useEffect, useState } from 'react';
import ButtonLogin from '../components/ButtonLogin';

function Login() {
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

      <ButtonLogin isDisabled={isDisabled} userEmail={emailInput} />
    </form>
  );
}

export default Login;
