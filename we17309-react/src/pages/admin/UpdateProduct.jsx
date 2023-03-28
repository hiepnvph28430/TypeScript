import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const UpdateProductPage = (props) => {
    const navigate = useNavigate();
    const { id } = useParams() // lấy id từ url 
    const [product, setProduct] = useState({}); // khởi tạo state product
    const [inputValue, setInputValue] = useState({}); // tạo ra 1 biến inputValue để lưu giá trị input
    useEffect(() => { //lấy product từ props.products
        const currentProduct = props.products.find(product => product.id == id) //lấy product có id trùng với id từ url
        setProduct(currentProduct) //gán lại giá trị cho biến product
    }, [props])

    const onHandleChange = (e) => { //lấy giá trị từ input

        const { name, value } = e.target; // lấy giá trị name và value của input
        setInputValue({ ...inputValue, [name]: value }) //gán lại giá trị cho biến inputValue
    }
    const onHandleSubmit = (e) => { // hàm thực thi khi chạy submit
        e.preventDefault();
        const updateData = { ...product, ...inputValue } //lấy giá trị từ biến product và biến inputValue
        props.onUpdate(updateData) //gọi hàm onUpdate từ props truyền vào
        navigate("/admin/products")
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" defaultValue={product?.name} onChange={onHandleChange} name="name" />
                <input type="number" defaultValue={product?.price} onChange={onHandleChange} name="price" />
                <button type="submit">Update Product</button>
            </form>
        </div>
    )
}

export default UpdateProductPage
