import { Request, Response } from 'express';
import { CreateUserUseCase } from "../../domain/usecases/CreateUserUseCase";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  handle(req: Request, res: Response) {
    try {
      const { name, email, cpf } = req.body;
      this.createUserUseCase.execute(name, email, cpf);
      return res.status(201).end();
    } catch (err) {
      if (err instanceof Error) return res.status(400).json({ message: err.message });
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}