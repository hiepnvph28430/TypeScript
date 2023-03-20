import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getProduct } from '../api/product'


const ProductDetailPage = () => {
    const { id } = useParams()
    const [product, setData] = useState({})

    useEffect(() => {
        // fetch("http://localhost:3000/products/" + id)
        //     .then(response => response.json())
        //     .then(data => {
        //         setData(data);

        //     })
        getProduct(id).then(({ data }) => setData(data))
    }, [])

    return (
        <div>
            <h1>ProductDetailPage</h1>
            <h2>{product.name}</h2>
        </div>
    )
}

export default ProductDetailPage