import React from 'react'
import { useUserStore } from '../context/userContext';
import { ZodType, z } from 'zod';
import { Login } from '../types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginUser } from '../services/userLogin';
import { clearTokenFromCookies, setTokenInCookies } from '../utils/coockiesFn';
import { useNavigate } from 'react-router-dom';


function LoginComponent() {
    const navegate = useNavigate()
    const user = useUserStore((state) => state.user);
    const setUser = useUserStore((state) => state.setUser);
    const clearUser = useUserStore((state) => state.clearUser);
    const schema: ZodType<Login> = z.object({
      username: z.string().min(3),
      password: z.string().min(3),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Login>({ resolver: zodResolver(schema) });
      const onSubmit = async (data: Login) => {
        clearTokenFromCookies();
        const datos = await loginUser(data);
        setTokenInCookies(datos.token);
        setUser(datos);
        
      };
      const navegateRegister = () => {
        navegate('/register')
      }

  return (
    <div className=" flex flex-col items-center justify-start h-screen gap-2">
      <h1 className="text-4xl font-bold py-4 ">login page</h1>

      <form className="py-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid border-2 p-10  shadow-lg rounded-md ">
          <input
            className="input placeholder-gray-400 rounded-md py-2 my-4"
            type="text"
            placeholder="Username"
            {...register("username")}
          />
          {errors.username && (
            <span className="text-red-600">{errors.username.message}</span>
          )}
          <input
            className="input placeholder-gray-400 rounded-md py-2 my-4"
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <span className="text-red-600">{errors.password.message}</span>
          )}
          <button type="submit" className="btn btn-secondary w-full">
            Login
          </button>
        </div>
      </form>
        <p>No estas registrado? <span className='text-blue-500 cursor-pointer hover:text-blue-800' onClick={navegateRegister}>Registrate aqui</span></p>
    </div>
  )
}

export default LoginComponent