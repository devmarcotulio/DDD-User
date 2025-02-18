import { CreateUserController } from "../controllers/CreateUserController";
import { ListUsersController } from "../controllers/ListUsersController";
import { CreateUserUseCase } from "../../domain/usecases/CreateUserUseCase";
import { ListUsersUseCase } from "../../domain/usecases/ListUsersUseCase";
import { InMemoryDatabase } from "../../infrastructure/database/InMemoryDatabase";
import { GetUserUseCase } from "../../domain/usecases/GetUserUseCase";
import { GetUserController } from "../controllers/GetUserController";
import { DeleteUserUseCase } from "../../domain/usecases/DeleteUserUseCase";
import { DeleteUserController } from "../controllers/DeleteUserController";

const userRepository = new InMemoryDatabase();

const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

const listUsersUseCase = new ListUsersUseCase(userRepository);
const listUsersController = new ListUsersController(listUsersUseCase);

const getUserUseCase = new GetUserUseCase(userRepository);
const getUserController = new GetUserController(getUserUseCase);

const deleteUserUseCase = new DeleteUserUseCase(userRepository);
const deleteUserController = new DeleteUserController(deleteUserUseCase);

export { createUserController, listUsersController, getUserController, deleteUserController };