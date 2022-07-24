import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import validateLogin from '../services/validateLogin';
import generateDate from '../utils/generateDate';

import '../style/Buttons.css';

function ButtonLogin({ isDisabled, userEmail }) {
  const navigate = useNavigate();

  function saveLoginStorage(token) {
    const accessInfo = {
      userEmail,
      token,
      dateAccess: generateDate().formatDate,
      hourAccess: generateDate().formatHours,
    };

    localStorage.setItem('accessInfo', JSON.stringify(accessInfo));
  }

  async function login() {
    if (isDisabled) {
      return false;
    }

    const validate = await validateLogin();

    if (validate.status === 200) {
      saveLoginStorage(validate.token);
      return navigate('/acoes');
    }

    throw new Error('Invalid email or password');
  }

  return (
    <button
      data-testid="button-login"
      onClick={login}
      type="button"
      className={`button button-login ${isDisabled ? 'disabled' : ''}`}
    >
      ENTRAR
    </button>
  );
}

ButtonLogin.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  userEmail: PropTypes.string.isRequired,
};

export default ButtonLogin;
