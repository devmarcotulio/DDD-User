import { UserRepository } from "../repository/UserRepository";
import { ListUsersUseCase } from "./ListUsersUseCase";

describe('List Users UseCase', () => {
  let mockRepository: jest.Mocked<UserRepository>;
  let listUsersUseCase: ListUsersUseCase;

  beforeEach(() => {
    mockRepository = {
      save: jest.fn(),
      findAll: jest.fn(),
      findById: jest.fn(),
      findByEmail: jest.fn(),
      findByCpf: jest.fn()
    };

    listUsersUseCase = new ListUsersUseCase(mockRepository);
  })

  it('Should be able to list all users', () => {
    const mockUsers = [
      { id: '1', name: 'Jane Doe', email: 'janedoe@email.com', cpf: '12345678900' },
      { id: '2', name: 'John Doe', email: 'johndoe@email.com', cpf: '98765432100' }
    ]
    mockRepository.findAll.mockReturnValue(mockUsers);
    const users = listUsersUseCase.execute();
    expect(mockRepository.findAll).toHaveBeenCalled();
    expect(users).toEqual(mockUsers);
  })

  it('Should not be possible to create a user with an email that already exists', () => {
    mockRepository.findAll.mockReturnValue([]);
    const users = listUsersUseCase.execute();
    expect(mockRepository.findAll).toHaveBeenCalled();
    expect(users).toEqual([]);
  })
})