import mongoose from "mongoose";
import { Product } from '../interfaces';
import { productDbConection } from "../db/conection";

const productSchema = new mongoose.Schema<Product>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: {
        type: {
          url: String,
          public_id: String,
        },
      },
    })

const ProductModel = productDbConection.model<Product>('ProductTest', productSchema)

export default ProductModel;