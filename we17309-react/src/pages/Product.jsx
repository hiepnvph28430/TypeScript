import React, { useEffect, useState } from 'react'

const ProductPage = (props) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(props.products)
    }, [props])
    const removeProduct = (id) => {
        const confirm = window.confirm("Bạn có chắc muốn xóa không")
        if (confirm) {
            fetch("http://localhost:3000/products/" + id, {
                method: 'DELETE'
            })
                .then(() => setData(data.filter(product => product.id !== id)))
        }

    }
    return (
        <div>
            <h1>Product Page</h1>
            {
                data.map((product) => {
                    return (<div key={product.id}>
                        <h3>{product.name}</h3>
                        <button onClick={() => removeProduct(product.id)} >Remove</button>
                    </div>)

                })
            }

        </div>
    )
}

export default ProductPage