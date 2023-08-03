import jwt from 'jsonwebtoken';
import { SECRET_KEY,EXPIRES_IN } from '../config/config';
import { User } from '../interfaces';


const authToken = (user: User) => {
    const token = jwt.sign({...user}, SECRET_KEY,{expiresIn: EXPIRES_IN});
    return token;
}
export {authToken}