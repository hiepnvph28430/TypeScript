import { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom"
import { getAllProduct, deleteProduct } from './api/product'
import reactLogo from './assets/react.svg'
import HomePage from './pages/HomePage'
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

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
