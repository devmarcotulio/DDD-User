import { CreateUserController } from "../controllers/CreateUserController";
import { ListUsersController } from "../controllers/ListUsersController";
import { CreateUserUseCase } from "../../domain/usecases/CreateUserUseCase";
import { ListUsersUseCase } from "../../domain/usecases/ListUsersUseCase";
import { InMemoryDatabase } from "../../infrastructure/database/InMemoryDatabase";

const userRepository = new InMemoryDatabase();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

const listUsersUseCase = new ListUsersUseCase(userRepository);
const listUsersController = new ListUsersController(listUsersUseCase);

export { createUserController, listUsersController };