

## Índice

- [Índice](#índice)
- [Descrição do Projeto](#-descrição-do-projeto)
- [Resquisitos da aplicação](#-requisitos-da-aplicação)
- [Estrutura](#-estrutura)
- [Instalação](#-instalação)

## 💾 Descrição do projeto

Este projeto consiste em uma aplicação back-end onde o usuário poderá gerenciar e integrar os seus dispositivos smart.

## 🌐 Requisitos da aplicação

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)

## 🏗️ Estrutura

```bash
connect-lab/
 ┣ src
 ┃ ┣ config
 ┃ ┃ ┗ ormconfig.ts
 ┃ ┣ controllers
 ┃ ┃ ┣ authentication.controller.ts
 ┃ ┃ ┣ devices.controller.ts
 ┃ ┃ ┗ users.controller.ts
 ┃ ┣ dto
 ┃ ┃ ┣ chage-password.dto.ts
 ┃ ┃ ┣ create-device.dto.ts
 ┃ ┃ ┣ create-user.dto.ts
 ┃ ┃ ┣ link-device.dto.ts
 ┃ ┃ ┗ login.dto.ts
 ┃ ┣ entities
 ┃ ┃ ┣ device-info.entity.ts
 ┃ ┃ ┣ device.entity.ts
 ┃ ┃ ┣ user-address.entity.ts
 ┃ ┃ ┣ user-devices.entity.ts
 ┃ ┃ ┗ user.entity.ts
 ┃ ┣ migrations
 ┃ ┃ ┣ 1673569649288-CreateUserTable.ts
 ┃ ┃ ┗ 1673588893301-CreateDevicesTable.ts
 ┃ ┣ module
 ┃ ┃ ┣ auth-login.module.ts
 ┃ ┃ ┣ devices.module.ts
 ┃ ┃ ┗ users.module.ts
 ┃ ┣ services
 ┃ ┃ ┣ authentication.service.ts
 ┃ ┃ ┣ devices.service.ts
 ┃ ┃ ┗ users.service.ts
 ┃ ┣ strategies
 ┃ ┃ ┗ jwt.strategy.ts
 ┃ ┣ app.controller.spec.ts
 ┃ ┣ app.controller.ts
 ┃ ┣ app.module.ts
 ┃ ┣ app.service.ts
 ┃ ┗ main.ts
 ┣ test
 ┃ ┣ app.e2e-spec.ts
 ┃ ┗ jest-e2e.json
 ┣ .eslintrc.js
 ┣ .example.env
 ┣ .gitignore
 ┣ .prettierrc
 ┣ nest-cli.json
 ┣ package-lock.json
 ┣ package.json
 ┣ README.md
 ┣ tsconfig.build.json
 ┗ tsconfig.json

```


## 💻 Instalação

A aplicação possui dois componentes, o FrontEnd desenvolvido em [Vue.js](https://vuejs.org/) e o BackEnd desenvolvido em [Node.js](https://nodejs.org/en/).

Para que tudo funcione, é necessário instalar primeiramente o BackEnd, pois assim o FrontEnd terá dados para consumir e serem devidamente exibidos.

#### Instalação do BackEnd

- Acesse a pasta `./teste-tecnico-cf/backend`;
- Instalar a aplicação utilizando o comando `npm install`;
- O processo não deve retornar erros. `Warns` *(Avisos)* não impedem seu funcionamento;
- Rodar a aplicação com `npm start`;
-  Esse aplicativo requer, **excepcionalmente**, um arquivo `.env`, que deve ser inserido na raiz do projeto (`./teste-tecnico-cf/backend`); 
    - Neste arquivo deve-se ser inserido as seguintes variáveis de uma banco de dados SQL:
        -  DB_HOST='nome do Host'
        -  DB_USER='user de acesso ao banco'
        -  DB_PASSWORD='insira o password de acesso ao banco'
        -  DB_NAME=cashforce_v3 //exemplo - nome do schema
        -  DB_PORT=3030 // porta padrão. caso alterada, alterar também no módulo de frontend, no caminho `./teste-tecnico-cf/frontend/src/store/actions.js`

#### Instalação do FrontEnd

- Acesse a pasta `./teste-tecnico-cf/frontend`;
- Instalar a aplicação utilizando o comando `npm install`;
- O processo não deve retornar erros. `Warns` *(Avisos)* não impedem seu funcionamento;
- Rodar a aplicação com `npm run dev`;
- Por padrão, essa aplicação funciona a partir da porta `5173`;

