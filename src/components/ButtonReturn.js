import React from 'react';
import { useNavigate } from 'react-router-dom';

function ButtonReturn() {
  const navigate = useNavigate();

  const returnPreviousPage = () => navigate(-1);

  return (<button onClick={returnPreviousPage} type="button">Voltar</button>);
}

export default ButtonReturn;
