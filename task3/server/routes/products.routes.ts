import { Router } from "express";
import { getAllProductsController, addProductController } from "../controllers/products.controllers";
import { authenMiddleware } from "../middlewares/auth.users";

const productsRoutes = Router();

productsRoutes.get("/productsAll",authenMiddleware,getAllProductsController );
productsRoutes.post("/products", addProductController );

export default productsRoutes;