import { Request, Response } from 'express';
import { DeleteUserUseCase } from '../../domain/usecases/DeleteUserUseCase';

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) { }

  handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      this.deleteUserUseCase.execute(id);
      return res.status(201).end();
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}