# Design System Example

Este projeto consiste num monorepo que traz um versão básica de um projeto de Design System.

## Packages

Cada pasta em /packages é um pacote:

- **shared** - Pacote de recursos utilitários, como funções. Pode ter ainda hooks, tipagens...
- **tokens** - Pacote de tokens (contantes + valores) com propriedades em diferentes formatos para serem usados em projetos de qualquer linguagem.
- **web** - Pacote de componentes web destinados a aplicações React. Contém uma aplicação storybook para visualização e facilitar o desenvolvimento de componentes.

## Início rápido - @ds-example/web

Para iniciar o desenvolvimento de componentes React:

1. `cd <root-folder> && yarn` para instalar as dependências;
2. `cd <root-folder> && yarn storybook:web"` para iniciar o servidor storybook no modo watching;

Então, você será capaz de:

- Visualizar todos os componentes no browser no endereço http://localhost:6006 (o browser irá provavelmente abri-lo automaticamente);
- Mudanças em `<root-folder>/packages/web/src` ou em `<root-folder>/packages/shared` irão automaticamente ser refletidas no browser;

## Gerar build - @ds-example/tokens

Para gerar um build com os tokens atualizados, basta executar:

1. `cd <root-folder> && yarn` para instalar as dependências;
2. `cd <root-folder> && yarn build:tokens"` para realizar o build;

## Checar lint

Para gerar um build com os tokens atualizados, basta executar:

1. `cd <root-folder> && yarn` para instalar as dependências;
2. `cd <root-folder> && yarn lint"` para escanear todo o projeto;
