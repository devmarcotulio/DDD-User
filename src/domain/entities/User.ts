export class User {
  constructor(readonly id: string, readonly name: string, readonly email: string, readonly cpf: string) {

   }
  
  static create(name: string, email: string, cpf: string) {
    const isValid = this.isValidCpf(cpf);
    if (!isValid) {
      throw new Error('Invalid CPF.')
    }
    const id = crypto.randomUUID();
    return new User(id, name, email, cpf);
  }

  private static isValidCpf(cpf: string): boolean {
    if (/^(\d)\1{10}$/.test(cpf)) return false;
    const calcCheckDigit = (digits: string, factor: number): number =>
      digits
        .split('')
        .reduce((sum, num, idx) => sum + parseInt(num) * (factor - idx), 0);

    const digit1 = (calcCheckDigit(cpf.slice(0, 9), 10) * 10) % 11 % 10;
    const digit2 = (calcCheckDigit(cpf.slice(0, 10), 11) * 10) % 11 % 10;

    return digit1 === parseInt(cpf[9]) && digit2 === parseInt(cpf[10]);
  }
}