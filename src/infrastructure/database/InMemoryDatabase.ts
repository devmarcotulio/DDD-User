import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repository/UserRepository";

export class InMemoryDatabase implements UserRepository {

  private users: User[] = [];

  save(user: User): void {
    this.users.push(user);
  }

  findAll(): User[] {
    return this.users;
  }

  findById(id: string): User | undefined {
    return this.users.find(element => element.id == id);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find(element => element.email == email);
  }

  findByCpf(cpf: string): User | undefined {
    return this.users.find(element => element.cpf == cpf);
  }

  findIndexById(id: string): number {
    return this.users.findIndex(user => user.id == id)
  }

  delete(index: number): void {
    this.users.splice(index, 1);
  }
}