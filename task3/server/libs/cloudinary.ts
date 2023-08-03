import "dotenv/config";
import { v2 } from "cloudinary";

v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
const imageUploader = async (filePath: string) => {
  return await v2.uploader.upload(filePath, {
    folder: "Productos",
  });
};

export { imageUploader };
