import { Swiper, SwiperSlide } from "swiper/react";
import ProductComponent from "./ProductComponent";
import { queryAllProducts } from "../hooks/useProducts";
import { useUserStore } from "../context/userContext";

import { Navigation, Pagination, A11y } from "swiper/modules";
import { Product } from "../interfaces";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carrusel = () => {
  const user = useUserStore((state) => state.user);
  const { data, isLoading, isError } = queryAllProducts();
  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error...</p>;
  if (!user) return <p>No hay usuario</p>;

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={4}
      navigation
      pagination={{ clickable: true }}
    >
      {data.map((product: Product) => (
        <SwiperSlide key={product._id}>
          <ProductComponent product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrusel;
