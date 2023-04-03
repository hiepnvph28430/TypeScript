import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { addProduct, getAllProducts, removeProduct, updateProduct } from './api/product'
import reactLogo from './assets/react.svg'
import AddProduct from './pages/admin/AddProduct'
import Dashboard from './pages/admin/Dashboard'
import ProductManagementPage from './pages/admin/ProductManagement'
import UpdateProduct from './pages/admin/UpdateProduct'
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetail'
import Products from './pages/Products'
import { IProduct } from './types/product'
import viteLogo from '/vite.svg'


function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    getAllProducts().then(({ data }) => setProducts(data))
  }, [])
  const onHandleRemove = (id: number) => {
    const confirm = window.confirm("Ban co muon xoa khong ?")
    if (confirm) {
      removeProduct(id).then(() => setProducts(products.filter(product => product.id !== id)))
    }
  }
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then(() => setProducts([...products, product]))
  }
  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => setProducts(products.map(item => item.id === product.id ? product : item)))
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products' >
            <Route index element={<Products products={products} onRemove={onHandleRemove} />} />
            <Route path=':id' element={<ProductDetailPage products={products} />} />
          </Route>
        </Route>

        <Route path='/admin' >
          <Route index element={<Dashboard />} />
          <Route path='products'>
            <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProduct onAdd={onHandleAdd} />} />
            <Route path=':id/update' element={<UpdateProduct onUpdate={onHandleUpdate} products={products} />} />
          </Route>
        </Route>
      </Routes>

    </div>
  )
}

export default App
