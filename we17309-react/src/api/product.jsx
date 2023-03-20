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
export { getAllProduct, getProduct, deleteProduct }