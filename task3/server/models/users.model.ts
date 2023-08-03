import mongoose from "mongoose";
import { User } from '../interfaces';
import { userDbConection } from "../db/conection";

const userSchema = new mongoose.Schema<User>({
    username: {
        type: String,
        required: true,
        unique: true},
        
    password: {
        type: String,
        required: true,
        unique: true}
        })

        const UserModel = userDbConection.model<User>('UserTest', userSchema);

        export default UserModel;