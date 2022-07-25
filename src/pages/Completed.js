import React from 'react';
import { hasUserData } from '../utils/userData';
import ButtonReturn from '../components/ButtonReturn';
import Header from '../components/Header';

import '../style/Completed.css';

function Completed() {
  function logout() {
    localStorage.clear();
    window.location = '/';
  }

  if (hasUserData()) {
    return (
      <>
        <Header />
        <div className="completed-card">
          <h3>Transação realizada com sucesso!</h3>

          <ButtonReturn />
        </div>
      </>
    );
  }

  return logout();
}

export default Completed;
