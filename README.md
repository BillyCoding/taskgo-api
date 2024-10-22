# TaskGo API

TaskGo API é uma plataforma de gerenciamento de tarefas onde os usuários podem se registrar, autenticar e gerenciar suas próprias tarefas. A API permite a criação, leitura, atualização e exclusão (CRUD) de tarefas, garantindo que cada usuário só tenha acesso às suas próprias informações. A autenticação é feita com JWT para garantir a segurança.

## Acesso à API

A API está hospedada no Vercel e pode ser acessada pelo seguinte link:

[TaskGo API - Vercel](https://taskgo-api.vercel.app/)

## Endpoints Principais

### Autenticação

- **POST** `/auth/register` — Registrar um novo usuário.
- **POST** `/auth/login` — Fazer login e receber o token JWT.

### Tarefas

- **POST** `/task` — Criar uma nova tarefa.
- **GET** `/task` — Obter todas as tarefas do usuário autenticado.
- **GET** `/task/:id` — Obter detalhes de uma tarefa específica.
- **PATCH** `/task/:id` — Atualizar uma tarefa existente.
- **DELETE** `/task/:id` — Excluir uma tarefa.

## Tecnologias Utilizadas

- **NestJS** — Framework backend para Node.js.
- **PostgreSQL** — Banco de dados relacional utilizado.
- **JWT** — Autenticação segura baseada em token.
- **Swagger** — Documentação interativa da API.
- **Vercel** — Hospedagem da API.

## Documentação da API

Para acessar a documentação interativa da API (Swagger), acesse o seguinte link:

[TaskGo API Docs](https://taskgo-api.vercel.app/api-docs) _(caso configurado)_

## Como Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/taskgo-api.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Crie um arquivo `.env` e configure as variáveis de ambiente necessárias (como banco de dados e JWT secret):
   ```env
   DATABASE_HOST=
   DATABASE_PORT=
   DATABASE_USERNAME=
   DATABASE_PASSWORD=
   DATABASE_NAME=
   JWT_SECRET=
   ```
4. Rode as migrações do banco de dados (se necessário):
   ```bash
   npm run migration:run
   ```
5. Inicie o servidor:
   ```bash
   npm run start:dev
   ```

A API estará disponível em `http://localhost:3000`.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
