import React from 'react';

function Header() {
  function getUser() {
    const accessInfo = JSON.parse(localStorage.getItem('accessInfo'));

    return accessInfo.userEmail;
  }

  return (
    <header>
      <span>{getUser()}</span>
    </header>
  );
}

export default Header;
