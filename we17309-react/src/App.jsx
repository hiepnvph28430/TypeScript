import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then(response => response.json())
      .then(data => {
        setProduct(data);

      })
  }, [])
  function remove(id) {
    const confirm = window.confirm("Bạn có muốn xóa không")
    if (confirm) {
      const newProducts = product.filter((item) => item.id != id)
      setProduct(newProducts)
      fetch("http://localhost:3000/products/" + id, {
        method: "DELETE",
      })
      alert("Xóa thành công")
    }


  }
  return (
    <div className="App">
      {product.map((item) => {
        return <div key={item.id}>
          <h3>{item.name}</h3>
          <button onClick={() => remove(item.id)}>Remove</button>
        </div>
      })}
    </div>
  )
}

export default App
