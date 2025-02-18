import { Request, Response } from 'express';
import { GetUserUseCase } from '../../domain/usecases/GetUserUseCase';

export class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) { }

  handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const user = this.getUserUseCase.execute(id);
      if (!user) return res.status(404).json({ message: `Usuário ${id} não encontrado.`});
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}