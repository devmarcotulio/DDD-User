import { UserRepository } from "../repository/UserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

describe('Create User UseCase', () => {
  let mockRepository: jest.Mocked<UserRepository>;
  let createUserUseCase: CreateUserUseCase;

  beforeEach(() => {
    mockRepository = {
      save: jest.fn(),
      findAll: jest.fn(),
      findById: jest.fn(),
      findByEmail: jest.fn(),
      findByCpf: jest.fn(),
      findIndexById: jest.fn(),
      delete: jest.fn()
    };

    createUserUseCase = new CreateUserUseCase(mockRepository);
  })

  it('Should be possible to create a user', () => {
    mockRepository.findByEmail.mockReturnValueOnce(undefined);
    mockRepository.findByCpf.mockReturnValueOnce(undefined);
    createUserUseCase.execute('John Doe', 'johndoe@email.com', '98765432100');
    expect(mockRepository.findByEmail).toHaveBeenCalled();
    expect(mockRepository.findByCpf).toHaveBeenCalled();
    expect(mockRepository.save).toHaveBeenCalled();
  })

  it('Should not be possible to create a user with an email that already exists', () => {
    mockRepository.findByEmail.mockReturnValue({
      id: '1',
      name: 'Jane Doe',
      email: 'janedoe@email.com',
      cpf: '98765432100'
    })
    expect(() => createUserUseCase.execute('Jane Doe', 'janedoe@email.com', '12345678909')).toThrowError('Email already exists.');
  })

  it('Should not be possible to create a user with an CPF that already exists', () => {
    mockRepository.findByCpf.mockReturnValue({
      id: '1',
      name: 'Jane Doe',
      email: 'janedoe@email.com',
      cpf: '98765432100'
    })
    expect(() => createUserUseCase.execute('Mike Doe', 'mikedoe@email.com', '98765432100')).toThrowError('CPF already exists.');
  })
})