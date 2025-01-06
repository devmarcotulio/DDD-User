import { User } from "./User"

describe('User Entity', () => {
  it('Should be possible to create a user', () => {
    const user = User.create('John Doe', 'johndoe@email.com', '12345678909');
    const user1 = User.create('John Doe', 'johndoe@email.com', '98765432100');
    expect(user).toBeDefined();
    expect(user.id).toBeDefined();
    expect(user.name).toBe('John Doe');
    expect(user.email).toBe('johndoe@email.com');
    expect(user.cpf).toBe('12345678909');
    expect(user.id).not.toBe(user1.id);
  })

  it('Should not be able to create a new user with invalid type check CPF', () => {
    expect(() => User.create('John Doe', 'johndoe@email.com', '12345678911')).toThrow(new Error('Invalid CPF.'));
  })

  it('Should not be able to create a new user with invalid CPF because equals digit', () => {
    expect(() => User.create('John Doe', 'johndoe@email.com', '11111111111')).toThrow(new Error('Invalid CPF.'));
  })
})