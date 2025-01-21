import { Request, Response } from 'express';
import { ListUsersUseCase } from "../../domain/usecases/ListUsersUseCase";

export class ListUsersController {
  constructor(private listUserUseCase: ListUsersUseCase) { }

  handle(req: Request, res: Response) {
    try {
      const users = this.listUserUseCase.execute();
      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}