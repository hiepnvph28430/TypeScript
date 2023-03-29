import React, { useEffect, useState } from 'react'
interface IProduct {
    id: number,
    name: string,
    price: number
}
interface IProps {
    products: IProduct[],
    onRemove: (id: number) => void
}
const Products = (props: IProps) => {
    /*
    {
            products: [
                {},{}
            ]
            onRemove: (id) => void
    }
    */
    const [data, setData] = useState<IProduct[]>([]);
    useEffect(() => {
        setData(props.products)
    }, [props])
    const removeProduct = (id: number) => {
        props.onRemove(id)
    }
    return (
        <div>
            <h1>Products Page</h1>
            {
                data.map(product => {
                    return (
                        <div key={product.id}>
                            <h3>{product.name}</h3>
                            <button onClick={() => removeProduct(product.id)}>Remove</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products