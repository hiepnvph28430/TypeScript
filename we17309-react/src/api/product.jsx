import instance from "./instance";

const getAllProduct = () => {
    return instance.get('/products');
}
const getProduct = (id) => {
    return instance.get('/products/' + id);
}
const deleteProduct = (id) => {
    return instance.delete(`/products/` + id);
}
const addProduct = (product) => {
    return instance.post("/products", product)
}
const updateProduct = (product) => {
    return instance.patch("/products/" + product.id, product)
}
export { getAllProduct, getProduct, deleteProduct, addProduct, updateProduct }