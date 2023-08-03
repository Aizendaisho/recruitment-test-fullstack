import { authenMiddleware } from '../middlewares/auth.users';
import {Router} from 'express';
import { userLoginController,createUserController,getUsersController } from '../controllers/user.controllers';

const userRoutes = Router();

userRoutes.get('/users',getUsersController );
userRoutes.post('/users',createUserController );
userRoutes.post('/users/login',userLoginController );

export default userRoutes;