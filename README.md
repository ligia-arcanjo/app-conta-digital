# Desafio XP Inc Frontend

## Sumário

1. [Sobre este Projeto](#sobre-este-projeto)
    - [O que foi desenvolvido](#o-que-foi-desenvolvido)
    - [Demonstração da Aplicação](#demonstração-da-aplicação)
    - [Tecnologias utilizadas](#tecnologias-utilizadas)
    - [Estrutura do repositório](#estrutura-do-repositório)
2. [Execução da aplicação](#execução-da-aplicação)
    - [Pré-requisitos](#pré-requisitos)
    - [Instalação das dependências e execução](#instalação-das-dependências-e-execução)
3. [Testes](#testes)
    - [Execução dos testes](#execução-dos-testes)
    - [Cobertura de testes](#cobertura-de-testes)

## Sobre este projeto

O projeto tem como objetivo simular um aplicativo de conta digital, que também possui algumas funcionalidades de investimentos.

### O que foi desenvolvido

Foi desenvolvido o Frontend da aplicação.

1) Tela de login

    Desenvolvida uma tela com campos de e-mail e senha visíveis para o usuário inserir as informções. São realizadas verificações sobre os dados (e-mail válido e senha de no mínimo 6 caracteres) e o botão "Entrar" fica visível para que o usuário faça o login.
    No momento do login (clique no botão) foi simulada uma requisição para API, que retorna um token de acesso. O e-mail do usuário, token e data e hora do acesso são salvas no storage enquanto o usuário permanece logado.
    Quando o login é realizado, o usuário é redirecionado para a página que lista as ações (/acoes).

2) Tela de listagem das ações em carteira e disponíveis para compra

    A tela de ações possui duas seções: "Minhas ações" e "Ações disponíveis para compra". Estes elementos foram componentizados durante o desenvolvimento do código.
    Esta tela também simula uma requisição para API, através de uma função que acessa os dados em um mock. Então, as ações são renderizadas na tela e ficam disponíveis para compra/venda do usuário.
    Quando o usuário clica em "Comprar" ou "Vender", ele é redirecionado para a respectiva tela para que possa finalizar a transação.

4) Tela para compra de ações

5) Tela para venda de ações

6) Tela para acesso a conta digital

7) Tela para depósito

8) Tela para transferência

9) Tela de logout

### Demonstração da Aplicação

### Tecnologias utilizadas

#### React

O projeto foi desenvolvido utilizando React a partir do create-react-app. Esse framework possibita a reutilização e componentização de códigos, o quer facilita escalabilidade do código.
O projeto foi desenvolvido com componentes funcionais, utilizando a versão 18.2 do React.

##### React Hooks

As Hooks são funções que possibilitam a utilização de componentes funcionais no desenvolvimento com React, o que torna os componentes menos complexos de serem entendidos. Neste projeto elas foram utilizadas para gerenciar estado, para simular ciclo de vida de componentes e para navegação entre rotas.

##### React Testing Library

Foram feitos testes utilizando a biblioteca React Testing Library. A biblioteca tem como princípio assemelhar os testes a maneira com que a aplicação é utilizada pelo usuário. Então, simulados o comportamento de quem usa e testamos se a página responde como o esperado.

### Estrutura do repositório

## Execução da aplicação

### Pré-requisitos

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
