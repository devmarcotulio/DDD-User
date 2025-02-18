import { UserRepository } from "../repository/UserRepository";

export class DeleteUserUseCase {
  constructor(private userRepository: UserRepository) { }

  execute(id: string) {
    const userIndex = this.userRepository.findIndexById(id);
    this.userRepository.delete(userIndex);
  }
}