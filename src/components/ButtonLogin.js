import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import validateLogin from '../services/validateLogin';
import generateDate from '../utils/generateDate';

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
    const validate = await validateLogin();

    if (validate.status === 200) {
      saveLoginStorage(validate.token);
      return navigate('/acoes');
    }

    throw new Error('Invalid email or password');
  }

  return (
    <button hidden={isDisabled} onClick={login} type="button">Entrar</button>
  );
}

ButtonLogin.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  userEmail: PropTypes.string.isRequired,
};

export default ButtonLogin;
