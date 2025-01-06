import { UserRepository } from "../repository/UserRepository";

export class ListUsersUseCase {
  constructor(private userRepository: UserRepository) {
    
  }

  execute() {
    const users = this.userRepository.findAll();
    return users;
  }
}