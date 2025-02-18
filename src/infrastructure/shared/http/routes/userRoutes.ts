import { Router } from "express";
import { createUserController, deleteUserController, getUserController, listUsersController } from "../../../../application/factories/UserFactory";
import { Joi, Segments, celebrate } from "celebrate";

const userRoutes = Router();

userRoutes.post('/create', 
  celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    cpf: Joi.string().length(11).pattern(/^\d+$/).required()
      .messages({
      "string.pattern.base": "CPF must contain only numbers"
      })
    },
  }),
  (req, res) => {
  createUserController.handle(req, res);
});

userRoutes.get('/findAll', (req, res) => {
  listUsersController.handle(req, res)
})

userRoutes.get('/findById/:id', (req, res) => {
  getUserController.handle(req, res)
})

userRoutes.delete('/delete/:id', (req, res) => {
  deleteUserController.handle(req, res)
})

export { userRoutes };