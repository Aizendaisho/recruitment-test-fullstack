import { ChangeEvent, useState } from "react";
import { ZodType, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema } from "../types";
import { useMutateAddroducts } from "../hooks/useProducts";
import { useUserStore } from "../context/userContext";
import { clearTokenFromCookies } from "../utils/coockiesFn";

function ProductsForm() {
  const clearUser = useUserStore((state) => state.clearUser);
  const [image, setImage] = useState<File | null>(null);
  const [imageError, setImageError] = useState<boolean>(false);
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    setImageError(false);
    const selectedFile = event.target.files && event.target.files[0];
    setImage(selectedFile);
  };

  const schema: ZodType<productSchema> = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    description: z.string().min(1, "La descripción es obligatoria"),
    price: z.number().min(1, "El precio es obligatorio").positive(),
    image: z.any(),
  });
  const { mutate: addproducMutate, isLoading: buttonDisable } =
    useMutateAddroducts();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<productSchema>({ resolver: zodResolver(schema) });

  const onSubmit = (data: productSchema) => {
    if (image) {
      setImageError(false);
      data.image = image;
    } else {
      setImageError(true);
      throw new Error("No hay imagen");
    }
    addproducMutate(data);
    reset();
  };
  const logOff = () => {
    clearUser();
    clearTokenFromCookies();
  };

  return (
    <div className=" flex flex-col items-center justify-start gap-2 pb-6">
      <button onClick={logOff} className="btn btn-warning text-white my-4">
        logout
      </button>
      <form
        action=""
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" flex flex-col gap-1 items-start justify-start">
          <label
            htmlFor="name"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre:{" "}
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            placeholder="Nombre del producto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
          {errors.name && (
            <span className="text-red-600">{errors.name.message}</span>
          )}
        </div>

        <div className=" flex flex-col gap-1 items-start justify-start">
          <label
            htmlFor="description"
            className="block text-gray-700 uppercase font-bold"
          >
            Descripción:{" "}
          </label>
          <input
            {...register("description")}
            type="text"
            id="description"
            placeholder="Descripción del producto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
          {errors.description && (
            <span className="text-red-600">{errors.description.message}</span>
          )}
        </div>

        <div className=" flex flex-col gap-1 items-start justify-start">
          <label
            htmlFor="price"
            className="block text-gray-700 uppercase font-bold"
          >
            Precio:{" "}
          </label>
          <input
            {...register("price", { valueAsNumber: true })}
            type="number"
            id="price"
            placeholder="Precio del producto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
          {errors.price && (
            <span className="text-red-600">{errors.price.message}</span>
          )}
        </div>

        <div className=" flex flex-col gap-1 items-start justify-start">
          <label
            htmlFor="image"
            className="block text-gray-700 uppercase font-bold"
          >
            Imagen:{" "}
          </label>
          <input
            {...register("image")}
            type="file"
            id="image"
            onChange={handleImageChange}
            placeholder="Imagen del producto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
          {imageError && (
            <span className="text-red-600">{"por favor agregar imagen"}</span>
          )}
        </div>
        <button
          disabled={buttonDisable}
          className="bg-blue-500 text-white p-2 rounded-md text-xl hover:bg-blue-700 transition-all duration-500"
        >
          Agregar
        </button>
      </form>
    </div>
  );
}

export default ProductsForm;
