import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utils';
import App from '../App';

describe('Testa a página Login', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });

  test('verifica se é renderizado na tela os inputs de e-mail e senha e o botão "Entrar', () => {
    const inputEmail = screen.getByTestId('input-email');
    const inputPassword = screen.getByTestId('input-password');

    expect(inputEmail && inputPassword).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
    expect(inputPassword.type).toBe('password');
  });

  test.only('verifica se é possível digitar e-mail e senha e ao apertar botão "Entrar" faz login', () => {
    const inputEmail = screen.getByTestId('input-email');
    const inputPassword = screen.getByTestId('input-password');

    userEvent.type(inputEmail, 'pessoa@exemplo.com');
    userEvent.type(inputPassword, '123456');

    const buttonLogin = screen.getByTestId('button-login');
    userEvent.click(buttonLogin);
  });
});
