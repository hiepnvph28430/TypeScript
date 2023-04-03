import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../types/product';
interface IProps {
    onAdd: (product: IProduct) => void
}
interface IFormInput {
    id: number,
    name: string,
    price: number
}

const AddProduct = (props: IProps) => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm<IFormInput>();
    const onHandleSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
        props.onAdd(data)
        navigate("/admin/products")
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register("name")} />
                <input type="number" {...register("price")} />

                <button type='submit'>Add New Product</button>
            </form>
        </div>
    )
}

export default AddProduct