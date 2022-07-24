import React, { useEffect, useState } from 'react';
import ButtonLogin from '../components/ButtonLogin';
import '../style/Login.css';

function Login() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  useEffect(() => {
    const emailRegex = /\S+@\S+\.com/;
    const MIN_PWD_LENGTH = 6;

    localStorage.clear();

    if (emailRegex.test(emailInput) && passwordInput.length >= MIN_PWD_LENGTH) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [emailInput, passwordInput]);

  return (
    <div className="card-login">
      <form className="form-login">
        <label htmlFor="email">
          E-mail:
          <input
            id="email"
            data-testid="input-email"
            placeholder="Digite um e-mail válido"
            type="email"
            value={emailInput}
            onChange={({ target: { value } }) => setEmailInput(value)}
            className="input-email"
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            id="password"
            data-testid="input-password"
            placeholder="Mínimo de 6 caracteres"
            type="password"
            value={passwordInput}
            onChange={({ target: { value } }) => setPasswordInput(value)}
          />
        </label>

        <ButtonLogin isDisabled={isDisabled} userEmail={emailInput} />
      </form>
    </div>
  );
}

export default Login;
