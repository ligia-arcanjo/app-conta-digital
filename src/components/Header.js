import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../utils/userData';

import '../style/Header.css';
import ButtonLogout from './ButtonLogout';

function Header({ hideAccountBtn }) {
  const navigate = useNavigate();
  const accessAccount = () => navigate('/conta');

  return (
    <header className="header">
      <button
        onClick={accessAccount}
        hidden={hideAccountBtn}
        type="button"
        className="button-secondary button-account"
      >
        ACESSAR CONTA
      </button>

      <span>{getUserData().userEmail}</span>
      <ButtonLogout />
    </header>
  );
}

Header.propTypes = {
  hideAccountBtn: PropTypes.bool,
};

Header.defaultProps = {
  hideAccountBtn: false,
};

export default Header;
