import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './utils';

describe('Testa a página Login', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
  });

  test('verifica se é renderizado na tela os inputs de e-mail e senha e o botão "Entrar', () => {
    const inputEmail = screen.getByLabelText(/e-mail/i);
    const inputPassword = screen.getByLabelText(/senha/i);

    expect(inputEmail && inputPassword).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
    expect(inputPassword.type).toBe('password');
  });

  test('verifica se é possível digitar e-mail e senha e ao apertar botão "Entrar" faz login', () => {
    const inputEmail = screen.getByLabelText(/e-mail/i);
    const inputPassword = screen.getByLabelText(/senha/i);

    userEvent.type(inputEmail, 'pessoa@exemplo.com');
    userEvent.type(inputPassword, '123456');
    const buttonLogin = screen.getByRole('button');
    userEvent.click(buttonLogin);
  });
});
