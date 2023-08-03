import mongoose, { Connection } from "mongoose";

const dbFuntionConnection = (url: string) => {
  const conectionName: Connection = mongoose.createConnection(url);

  conectionName.once("open", () => {
    console.log(`Conectado a la base de datos: ${conectionName.name}`);
  });
  return conectionName;
};

export default dbFuntionConnection;