import { User } from "../entities/User";
import { UserRepository } from "../repository/UserRepository";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) { }

  execute(name: string, email: string, cpf: string) {
    const emailExists = this.userRepository.findByEmail(email);
    if (emailExists) throw new Error('Email already exists.');
    const cpfExists = this.userRepository.findByCpf(cpf);
    if (cpfExists) throw new Error('CPF already exists.');
    const user = User.create(name, email, cpf);
    this.userRepository.save(user);
  }
}