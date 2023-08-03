import React from 'react'
import Carrusel from '../components/Carrusel'
import ProductsForm from '../components/ProductsForm'
import { useUserStore } from "../context/userContext";
import LoginComponent from '../components/Login';
function HomePage() {
    const user = useUserStore((state) => state.user);
    if(!user){
        return <LoginComponent />
    }

  return (
    <>
    <ProductsForm />
    <Carrusel />
    </>
  )
}

export default HomePage