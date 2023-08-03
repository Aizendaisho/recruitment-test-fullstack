import { productInstance } from "../utils/axiosEstance";

const AddProduct = async (product: any) => {
    
    try {
        const form = new FormData();
        for (let key in product as any) {
          form.append(key, product[key]);
        }
        const res = await productInstance.post("/products", form, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(res.data);
        return res.data;
      } catch (error) {
        console.log(error);
      }
}
export default AddProduct