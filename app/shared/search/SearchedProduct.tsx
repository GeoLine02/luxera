import { Product } from '@/app/types/homepage'
import Image from 'next/image'
import React from 'react'

interface SearchedProductProps{
    product: Product
}

export default function SearchedProduct({product}:SearchedProductProps) {
  return (
        <div
            key={product.id}
            className="border border-dirty-pink rounded-lg p-4 bg-white hover:shadow-lg transition"
          >
            {product && product.images && <Image src={product?.images[0].image_name} alt={product?.title || ""} className="w-full h-40 object-cover rounded-md" />}
            <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
            <p className="text-dirty-pink font-bold">${product.price}</p>
        </div>
  )
}
