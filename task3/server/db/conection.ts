import dbFuntionConnection from "../utils/dbFnConect";
import { DATABASE_NAME_P,DATABASE_NAME_U } from '../config/config';

export const productDbConection = dbFuntionConnection(DATABASE_NAME_P);
export const userDbConection = dbFuntionConnection(DATABASE_NAME_U);