import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { productInstance } from "../utils/axiosEstance";
import { Product } from "../interfaces";
import AddProduct from "../services/addProducts";
import { getTokenFromCookies } from "../utils/coockiesFn";

const getAllProductsNoRest = async () => {
    const { data } = await productInstance.get("/productsAll",
    {
      headers: {
        "Authorization": `Bearer ${getTokenFromCookies()}`,
      }})
    ;
    return data;
  }
  export const queryAllProducts = () => {
    const allProducts = useQuery(["productsAll",], getAllProductsNoRest, {
      initialData: () => {  
        const products: Product[] = []
       return products;
      },
    });
    return allProducts;
  }
  export const useMutateAddroducts = () => {
    const queryClient = useQueryClient();
    return useMutation(AddProduct, {
      onSuccess: () => {
        queryClient.invalidateQueries(["productsAll"]);
      },
    });
  };