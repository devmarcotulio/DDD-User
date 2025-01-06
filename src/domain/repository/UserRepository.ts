import { User } from "../entities/User";

export interface UserRepository {
  save(user: User): void;
  findAll(): User[];
  findById(id: string): User | undefined;
  findByEmail(email: string): User | undefined;
  findByCpf(cpf: string): User | undefined;
}