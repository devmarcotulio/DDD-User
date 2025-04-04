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

### Instalação e execução

1. Instale as dependências com **npm install**

2. Execute o servidor em modo de desenvolvimento com **npm run dev**

### Endpoints

**POST /users/create**

  ```json
  {
    "name": "John Doe",
    "email": "johndoe@email.com",
    "cpf": "12345678909"
  }
  ```

**GET /users/findAll**

**GET /users/findById/:id**

**DELETE /users/delete/:id**

### Testes
- Execute os testes com  **npm test**
A aplicação possui testes unitários para as entidades e casos de uso. Os testes estão localizados na pasta src/domain/usecases e src/domain/entities.