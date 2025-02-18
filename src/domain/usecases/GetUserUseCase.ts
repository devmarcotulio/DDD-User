import { UserRepository } from "../repository/UserRepository";

export class GetUserUseCase {
  constructor(private userRepository: UserRepository) { }

  execute(id: string) {
    const user = this.userRepository.findById(id);
    return user;
  }
}