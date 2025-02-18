import { UserRepository } from "../repository/UserRepository";
import { GetUserUseCase } from "./GetUserUseCase";

describe('Get User UseCase', () => {
  let mockRepository: jest.Mocked<UserRepository>;
  let getUserUseCase: GetUserUseCase;

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

    getUserUseCase = new GetUserUseCase(mockRepository);
  })

  it('Should be able to get one user with id', () => {
    const mockUsers = { 
      id: '1', 
      name: 'Jane Doe', 
      email: 'janedoe@email.com', 
      cpf: '12345678900' 
    }

    mockRepository.findById.mockReturnValueOnce(mockUsers);
    const users = getUserUseCase.execute(mockUsers.id);
    expect(mockRepository.findById).toHaveBeenCalled();
    expect(users).toEqual(mockUsers);
  })
})