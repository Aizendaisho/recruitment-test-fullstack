import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import productsRoutes from "../routes/products.routes";
import userRoutes from "../routes/user.routes";
import "dotenv/config";

const app = express();
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./upload",
  })
);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(productsRoutes);
app.use(userRoutes);

export default app;
