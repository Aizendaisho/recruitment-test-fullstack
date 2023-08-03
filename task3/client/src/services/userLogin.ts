import { productInstance } from "../utils/axiosEstance";
import { User, UserRegister } from '../interfaces';
import { Login } from "../types";

export const loginUser = async (user: Login): Promise<User> => {
    const { data } = await productInstance.post('/users/login', user);
  return data;
}

export const createUser = async (user: UserRegister) => {
    const { data } = await productInstance.post('/users', user);
    return data;
}