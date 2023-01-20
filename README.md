
<p align="center"><a href="https://imgur.com/vqDdexu"><img src="https://i.imgur.com/vqDdexu.png" title="source: imgur.com" /></a></p>


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


- Acesse a pasta `./connect-lab`;
- Instalar a aplicação utilizando o comando `npm install`;
- O processo não deve retornar erros. `Warns` *(Avisos)* não impedem seu funcionamento;
- Rodar a aplicação com `npm run start:dev`;
- Esse aplicativo requer, **excepcionalmente**, um arquivo `.env`, que deve ser inserido na raiz do projeto (`./connect-lab`); 
- Existe um aquivo de exemplo na raiz do projeto nomeado de `.example.env`, que deve ser levado como base para a criação do arquivo .env utilizado na aplicação;
