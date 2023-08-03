import UserModel from "../models/users.model";
import { User } from "../interfaces";
import { passwordHash } from "../utils/bcript";

const getAllUsersServices = async () => {
  return await UserModel.find();
};

const createUserService = async (user: User) => {
  try {
    const password = await passwordHash(user.password.toString());
    return await UserModel.create({ ...user, password });
  } catch (error) {
    console.log(error);
    throw new Error(`Error creating user: ${error}`);
    
  }
};

const getUserbyUsername = async (username: string) => {
    return await UserModel.findOne({ username });
  };

export {getAllUsersServices, createUserService, getUserbyUsername}