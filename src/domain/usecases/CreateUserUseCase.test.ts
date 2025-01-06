import { InMemoryDatabase } from "../../infrastructure/database/InMemoryDatabase";
import { UserRepository } from "../repository/UserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

describe('Create User UseCase', () => {
  let userRepository: UserRepository;
  let createUserUseCase: CreateUserUseCase;

  beforeEach (() => {
    userRepository = new InMemoryDatabase();
    createUserUseCase = new CreateUserUseCase(userRepository);
  })

  it('Should be possible to create a user', () => {
    createUserUseCase.execute('John Doe', 'johndoe@email.com', '98765432100');
    const user = userRepository.findByEmail('johndoe@email.com');
    expect(user).toBeDefined();
    expect(user?.id).toBeDefined();
    expect(user?.name).toBe('John Doe');
    expect(user?.email).toBe('johndoe@email.com');
    expect(user?.cpf).toBe('98765432100');
  })

  it('Should not be possible to create a user with an email that already exists', () => {
    createUserUseCase.execute('John Doe', 'johndoe@email.com', '12345678909');
    expect(() => createUserUseCase.execute('John Doe', 'johndoe@email.com', '12345678909')).toThrowError('Email already exists.');
  })

  it('Should not be possible to create a user with an CPF that already exists', () => {
    createUserUseCase.execute('John Doe', 'johndoe@email.com', '12345678909');
    expect(() => createUserUseCase.execute('Jane Dou', 'janedou@email.com', '12345678909')).toThrowError('CPF already exists.');
  })
})