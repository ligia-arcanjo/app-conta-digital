import React from 'react';
import { getUserData } from '../utils/userData';

function Header() {
  return (
    <header>
      <span>{getUserData().userEmail}</span>
    </header>
  );
}

export default Header;
