# DDD User Management Application

Esta aplicação é um exemplo de gerenciamento de usuários utilizando os princípios de **Domain-Driven Design (DDD)**. A aplicação é construída em TypeScript e utiliza uma arquitetura modular para separar responsabilidades entre camadas de domínio, aplicação e infraestrutura.

## Funcionalidades

- **Criar Usuário**: Criação de usuários com validação de CPF e e-mail.
- **Listar Usuários**: Listagem de todos os usuários cadastrados.
- **Buscar Usuário por ID**: Recuperação de informações de um usuário específico.
- **Deletar Usuário**: Exclusão de um usuário pelo ID.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução.
- **Express**: Framework para criação de APIs.
- **TypeScript**: Linguagem de programação.
- **Jest**: Framework de testes.
- **Celebrate/Joi**: Validação de dados.

## Como Executar

### Pré-requisitos

- Node.js (v20 ou superior)
- npm ou yarn

### Instalação

2. Instale as dependências:

  **npm install**

3. Executando o Servidor modo de desenvolvimento:

  **npm run dev**

4. Executando os Testes

  **npm test**

### Endpoints

**POST /users/create**
  Cria um novo usuário.

  {
    "name": "John Doe",
    "email": "johndoe@email.com",
    "cpf": "12345678909"
  }

**GET /users/findAll**
  Lista todos os usuários.

**GET /users/findById/:id**
  Busca um usuário pelo ID.

**DELETE /users/delete/:id**
  Deleta um usuário pelo ID.

### Testes
 
A aplicação possui testes unitários para as entidades e casos de uso. Os testes estão localizados na pasta src/domain/usecases e src/domain/entities.