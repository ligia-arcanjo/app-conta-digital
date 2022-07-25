# Desafio XP Inc Frontend

## Sumário

- [Desafio XP Inc Frontend](#desafio-xp-inc-frontend)
  - [Sumário](#sumário)
  - [Sobre este projeto](#sobre-este-projeto)
    - [O que foi desenvolvido](#o-que-foi-desenvolvido)
    - [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [Execução da aplicação](#execução-da-aplicação)
    - [Pré-requisitos](#pré-requisitos)
    - [Instalação das dependências e execução](#instalação-das-dependências-e-execução)
  - [Testes](#testes)
    - [Execução dos testes](#execução-dos-testes)
    - [Autoria](#autoria)

## Sobre este projeto

O projeto tem como objetivo simular um aplicativo de conta digital, que também possui algumas funcionalidades de investimentos.

### O que foi desenvolvido

Foi desenvolvido o Frontend da aplicação.

1) Tela de login

    Desenvolvida uma tela com campos de e-mail e senha visíveis para o usuário inserir as informções. São realizadas verificações sobre os dados (e-mail válido e senha de no mínimo 6 caracteres) e o botão "Entrar" fica habilitado para que o usuário faça o login.
    No momento do login (clique no botão) foi simulada uma requisição para API, que retorna um token de acesso. O e-mail do usuário, token e data e hora do acesso são salvas no storage enquanto o usuário permanece logado.
    Quando o login é realizado, o usuário é redirecionado para a página que lista as ações (/acoes).

    * Dados para acessar a aplicação:
    campo e-mail: user@exemplo.com
    campo senha: 123456

2) Tela de listagem das ações em carteira e disponíveis para compra

    A tela de ações possui duas seções: "Minhas ações" e "Ações disponíveis para compra". Estes elementos foram componentizados durante o desenvolvimento do código.
    Esta tela também simula uma requisição para API, através de uma função que acessa os dados em um mock. Então, as ações são renderizadas na tela e ficam disponíveis para compra/venda do usuário.
    Quando o usuário clica em "Comprar" ou "Vender", ele é redirecionado para a respectiva tela para que possa finalizar a transação.
    Nesta tela, o usuário também consegue visualizar um cabeçalho com um botão para acesso a conta digital, um botão para fazer o logout da aplicação e seu e-mail fica visível.

3) Tela para compra de ações
   O usuário é redirecionado através de uma rota dinâmica para a tela que mostra a ação disponível para compra. Nela é possível digitar a quantidade de ações que se deseja comprar e o valor é verificado de acordo com a quantidade disponível que está rederizada na tela. Caso o usuário tente comprar menos de uma ação ou mais do que a quantidade disponível, é renderizado um aviso na tela.
   Nesta tela também fica visível ao usuário o cabeçalho com suas funcionalidades.

4) Tela para venda de ações
   Quando o usuário clica em comprar ou vender suas ações, ele é redirecionado para esta tela, onde visualiza inputs para inserir a quantidade que seja compra ou vender de cada ação.

5) Tela para acesso a conta digital
   Quando o usuário está acessando a tela de ações ou de compra/venda de ações, pode navegar até a conta digital através do botão disponível no cabeçalho da aplicação.
   Assim que é direcionado para conta, é renderizado em tela o saldo que o cliente possui e as opções para depósito ou transferência.
   O valor do saldo é recebido do componente através de uma requisição que acessa um mock com as informações da conta do usuário. No momento do acesso, este valor é salvo no localStorage para ser manipulado caso haja alguma movimentação em conta.

6) Tela para depósito
   A partir da tela da conta digital, quando é clicado no botão "Depositar", o usuário é redirecionado para esta tela onde deve informar o valor que deseja depositar e confirmar a ação, caso o valor não seja válido, será renderizado em tela um aviso e o botão de "Confirmar" não será habilitado. Se o valor estiver correto, o cliente é redirecionado para a tela de transação concluída.

7) Tela para transferência
   A partir da conta digital, o cliente também pode clicar na opção "Transferir" e será redirecionado para esta tela, onde há um input para digitar o valor que se deseja transferir. Se o valor não for válido, será renderizado em tela um aviso e o botão de "Confirmar" não será habilitado. Quando o valor está correto, o usuário é redirecionado para a página se transação concluída.

8)  Tela transação concluída
    Quando o cliente consegue realizar qualquer operação, é redirecionado para esta página, onde aparecerá uma mensagem de "Transação realizada com sucesso" e a opção de retornar para página anterior. Além das opções disponíveis no cabeçalho para acesso a conta e fazer logout.

### Tecnologias utilizadas

React v18
React router v6
React Testing Library v13
Testing Library Jest-Dom v5
CSS

### Estrutura do repositório

## Execução da aplicação

### Pré-requisitos

Node.js versão 16
npm versão 8

Conforme especificado no ./package.json

### Instalação das dependências e execução

Para rodar a aplicação localmente, faça o clone do repositório e entre na pasta:

```
git clone https://github.com/ligia-arcanjo/desafio-xp-inc.git
cd desafio-xp-inc
```

Instale as dependências com o comando:

```
npm install
```

E execute a aplicação com o comando:

```
npm start
```

## Testes

### Execução dos testes

Para executar os testes, rode o comando:

```
npm test
```

### Autoria

Ligia Arcanjo Gonçalves

<a href="https://www.linkedin.com/in/ligiaarcanjo/">LinkedIn</a>
