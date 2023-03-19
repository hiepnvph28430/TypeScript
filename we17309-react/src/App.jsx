import { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom"
import reactLogo from './assets/react.svg'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
// import './App.css'

function App() {
  const [products, setProduct] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(data => {
        setProduct(data);

      })
  }, [])
  //
  // function add() {
  //   document.querySelector("form").addEventListener("submit", async (e) => {
  //     e.preventDefault();
  //     const product = {
  //       name: document.querySelector("#product_name").value,
  //     }
  //     await fetch("http://localhost:3000/products", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(product)
  //     })
  //     alert("Thêm thành công")
  //     router.navigate("localhost:5173")
  //   })
  // }
  return (
    <div className="App">
      {/* <form action="">
        <div>
          <label for="" class="form-label">Tên sản phẩm</label>
          <input type="text" id="product_name" />
        </div>
        <button onClick={() => add()}>Add</button>
      </form>
      {product.map((item) => {
        return <div key={item.id}>
          <h3>{item.name}</h3>
          <button onClick={() => remove(item.id)}>Remove</button>


        </div>
      })} */}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage products={products} />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
      </Routes>
    </div>
  )
}

export default App
