import React from 'react'
import { useParams } from 'react-router-dom'
import { IProduct } from '../types/product'

type Props = {
    products: IProduct[]
}

const ProductDetailPage = (props: Props) => {
    const { id } = useParams();
    const currentProduct = props.products.find(item => item.id == Number(id))
    return (
        <div>
            <h1>ProductDetailPage</h1>
            <h3>{currentProduct?.name}</h3>
            <p>{currentProduct?.price}</p>
        </div>
    )
}

export default ProductDetailPage