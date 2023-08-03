import { Request, Response } from "express";
import { addProductServices, getAllProductsServices } from "../services/products.services";
import { Product, UploadedImage } from "../interfaces";
import { imageUploader } from "../libs/cloudinary";
import fsExtra, { emptyDirSync } from "fs-extra";

const getAllProductsController = async (req: Request, res: Response) => {
    const products = await getAllProductsServices();
    res.status(200).json(products);
}

const addProductController = async (req: Request, res: Response) => {
    try {
        const { name, price, description} = req.body;
        let image;
        if (req.files?.image) {
          const subirImagen = req.files.image! as unknown as UploadedImage;
          const resultado = await imageUploader(subirImagen.tempFilePath);
          await fsExtra.remove(subirImagen.tempFilePath);

          image = {
            url: resultado.secure_url,
            public_id: resultado.public_id,
          };
        }
        const product = (await addProductServices({
          name,
          price,
          image,
          description,
        })) as Product;
        res.status(201).send(`Se creo el producto: ${product.name}`);
      } catch (error) {
        res.status(400).send(error);
      }
}

export { getAllProductsController, addProductController };