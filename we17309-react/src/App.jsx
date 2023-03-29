import { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom"
import { getAllProduct, deleteProduct, addProduct, updateProduct } from './api/product'
import AddProductPage from './pages/admin/AddProduct'
import Dashboard from './pages/admin/Dashboard'
import ProductManagementPage from './pages/admin/ProductManagement'
import UpdateProductPage from './pages/admin/UpdateProduct'
import HomePage from './pages/HomePage'
import AdminLayout from './pages/layouts/AdminLayout'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
// import './App.css'

function App() {
  const [products, setProduct] = useState([])
  useEffect(() => {
    // fetch("http://localhost:3000/products")
    //   .then(response => response.json())
    //   .then(data => {
    //     setProduct(data);
    //   })
    getAllProduct().then(({ data }) => setProduct(data))
  }, [])
  const onHandleRemove = (id) => {
    const confirm = window.confirm("Bạn có chắc muốn xóa không")
    if (confirm) {
      // fetch("http://localhost:3000/products/" + id, {
      //   method: 'DELETE'
      // })
      deleteProduct(id).then(() => setProduct(products.filter(product => product.id !== id)))
    }
  }
  const onHandleAdd = (product) => {
    addProduct(product).then(() => setProduct([...products, product]))
  }
  const onHandleUpdate = (product) => {
    updateProduct(product).then(() => setProduct(products.map(item => item.id === product.id ? product : item)))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path='products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
        </Route>
      </Routes>
      <Routes>
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='products'>
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
          </Route>
        </Route>
      </Routes>
      {/* <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/admin' element={<Dashboard />} />
        <Route path='/admin/products' element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
        <Route path='/admin/products/add' element={<AddProductPage onAdd={onHandleAdd} />} />
        <Route path='/admin/products/:id/update' element={<UpdateProductPage products={products} onUpdate={onHandleUpdate} />} />
      </Routes> */}
    </div>
  )
}

export default App
