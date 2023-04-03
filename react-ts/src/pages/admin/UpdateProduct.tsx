import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'
import { IProduct } from '../../types/product'

interface IProps {
    products: IProduct[]
    onUpdate: (product: IProduct) => void
}
interface IFormInput {
    id: number,
    name: string,
    price: number
}

const UpdateProduct = (props: IProps) => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset } = useForm<IFormInput>();
    const { id } = useParams();
    useEffect(() => {
        const currentProduct = props.products.find(item => item.id == Number(id))
        reset(currentProduct)
    }, [props])
    const onHandleSubmit: SubmitHandler<IFormInput> = (data: IFormInput) => {
        props.onUpdate(data)
        navigate("/admin/products")
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register("name")} />
                <input type="number"  {...register("price")} />
                <button type='submit'>Update Product</button>
            </form>
        </div>
    )
}

export default UpdateProduct