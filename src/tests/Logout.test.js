import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './utils';
import Completed from '../pages/Completed';

describe('Testa a página Logout', () => {
  beforeEach(() => {
    renderWithRouter(<Completed />);
  });

  test('verifica se ao renderizar a página é renderizada corretamente', () => {
    const titlePage = screen.getByText(/Transação realizada com sucesso!/i);
    const buttonBack = screen.getByRole('button', { name: /Voltar/i });
    const buttonLogout = screen.getByRole('button', { name: /Sair/i });

    expect(titlePage && buttonBack && buttonLogout).toBeInTheDocument();
  });

  test('verifica se ao clicar no botão "Sair" o logout é feito corretamente', () => {
    const buttonLogout = screen.getByRole('button', { name: /Sair/i });
    userEvent.click(buttonLogout);
  });
});
