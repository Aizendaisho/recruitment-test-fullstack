import {ZodType, z} from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUser } from "../services/userLogin";
import { useNavigate } from "react-router-dom";
import { UserRegister } from "../interfaces";

function FormUser() {
    const schema: ZodType<UserRegister> = z.object({
        username: z.string().min(3),
        password: z.string().min(6).max(20),
    })
    const {handleSubmit, register, formState: {errors}, reset } = useForm<UserRegister>({resolver: zodResolver(schema)})
    const submitSi =async (data: UserRegister) => {
        const user = await createUser(data)
        reset()
        navigate("/")
    }
    const navigate = useNavigate()

    const navegateLogin = () => {
        navigate('/')
      }
  
  return (
    <div className="flex flex-col items-center justify-start h-screen gap-4">
      <h1 className="text-center text-4xl font-bold py-4">Registrarse</h1>
      <form  onSubmit={handleSubmit(submitSi)} >
        <div className="grid border-2 p-10  shadow-lg rounded-md gap-4"> 
                        
        <div className="flex flex-col items-center gap-4">
            {/* <label className="text-lg" >Username:</label> */}
            <input placeholder="Username" type="text" className="input" {...register("username")} />
            {errors.username && (
            <span className="text-red-600 inline-block">{errors.username.message}</span>
          )}
            </div>
            <div className="flex flex-col items-center gap-4">
                {/* <label  className="text-lg" >Password:</label> */}
                <input placeholder="Password" type="password"  className="input" {...register("password")}  />
                {errors.password && (
            <span className="text-red-600 inline-block">{errors.password.message}</span>
          )}
            </div>
        <input type="submit" value="Guardar" className="btn btn-primary" />
        </div>
      </form>
      <p>Ya estas registrado?? <span className='text-blue-500 cursor-pointer hover:text-blue-800' onClick={navegateLogin}>Loguearse</span></p>
    </div>
  )
}

export default FormUser