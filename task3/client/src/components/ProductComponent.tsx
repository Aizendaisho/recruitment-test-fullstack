import React from 'react'
import { Product } from '../interfaces'
interface Props {
    product: Product
}

function ProductComponent( {product}: Props) {
  return (
    <div>
        <img src={product.image && product.image?.url} width={100} height={100} alt="" className=' h-48 w-full object-fill object-center' />
        <h3 className='text-lg font-bold text-center'>{product.name}</h3>
        <p className='text-base  text-center'>{product.price}</p>
        <p className='text-base  text-center'>{product.description}</p>
    </div>
  )
}

export default ProductComponent