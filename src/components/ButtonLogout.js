import React from 'react';

import '../style/Buttons.css';

function ButtonLogout() {
  function logout() {
    localStorage.clear();
    window.location = '/';
  }

  return (
    <button
      data-testid="button-logout"
      onClick={logout}
      type="button"
      className="button-secondary button-logout"
    >
      SAIR
    </button>
  );
}

export default ButtonLogout;
