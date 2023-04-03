import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../../types/product';

interface IProps {
    products: IProduct[],
    onRemove: (id: number) => void
}

const ProductManagementPage = (props: IProps) => {
    const [data, setData] = useState<IProduct[]>([]);
    useEffect(() => {
        setData(props.products)
    }, [props])
    const removeProduct = (id: number) => {
        props.onRemove(id)
    }
    return (
        <div>

            <h1>Product Management Page</h1>
            {
                <div>
                    <button><Link to={'/admin/products/add'}>Add New</Link></button>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((product, index) => {
                                    return (
                                        <tr key={product.id}>
                                            <td>{index + 1}</td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>
                                                <button onClick={() => removeProduct(product.id)}>Remove</button>
                                                <button><Link to={`/admin/products/${product.id}/update`}>Update</Link></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            }

        </div >
    )
}

export default ProductManagementPage