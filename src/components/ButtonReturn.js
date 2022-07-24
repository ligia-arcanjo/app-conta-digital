import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Buttons.css';

function ButtonReturn() {
  const navigate = useNavigate();

  const returnPreviousPage = () => navigate(-1);

  return (
    <button
      className="button-secondary"
      onClick={returnPreviousPage}
      type="button"
    >
      Voltar
    </button>
  );
}

export default ButtonReturn;
