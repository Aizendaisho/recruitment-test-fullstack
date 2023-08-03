import { Response, Request } from "express";
import { getAllUsersServices,createUserService, getUserbyUsername } from "../services/user.services";
import { User } from "../interfaces";
import { passwordCompare } from "../utils/bcript";
import { authToken } from "../utils/jwt";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/config";
import UserModel from "../models/users.model";


const getUsersController = async (req: Request, res: Response) => {
    try {
      const users = await getAllUsersServices();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

  const createUserController = async (req: Request, res: Response) => {
    try {
      const user: User = req.body;
      const newUser = (await createUserService(user)) as User;
      if (!newUser) return res.status(500).send("Salio algo mal");
  
      res
        .status(200)
        .send(`se creo el usuario ${newUser.username} correctamente`);
    } catch (error) {
      res.status(500).json({ message: "Ha ocurrido un error" });
    }
  };

  const userLoginController = async (req: Request, res: Response) => {
    try {
      const user: User = req.body;
      const userFound = (await getUserbyUsername(user.username)) as User;
  
      if (!userFound) return res.status(400).send("usuario no encontrado");
      const password = await passwordCompare(user.password, userFound.password);
      if (!password) return res.status(400).send("contraseña incorrecta");
  
      const token = authToken(userFound);
      res
        .status(200)
        .send({ username: userFound.username, token });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

  export { getUsersController, createUserController, userLoginController };