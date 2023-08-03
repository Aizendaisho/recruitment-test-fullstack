import ProductModel from "../models/products.model";
import { Product } from "../interfaces";

const getAllProductsServices = async (): Promise<Product[]> => {
    const products = await ProductModel.find();
  return products;
}

const addProductServices = async (product: Product): Promise<Product> => {
    const newProduct = await ProductModel.create(product);
  return newProduct;
}

export { getAllProductsServices, addProductServices };