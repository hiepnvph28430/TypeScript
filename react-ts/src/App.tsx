import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { getAllProducts, removeProduct } from './api/product'
import reactLogo from './assets/react.svg'
import HomePage from './pages/HomePage'
import Products from './pages/Products'
import viteLogo from '/vite.svg'
interface IProduct {
  id: number,
  name: string,
  price: number
}

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
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products' element={<Products products={products} onRemove={onHandleRemove} />} />
        </Route>
      </Routes>

    </div>
  )
}

export default App
