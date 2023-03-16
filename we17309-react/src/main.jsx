import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
const a = 10;
const b = 20;
function sum(a, b) {
  return a + b
}
function Sum({ a, b }) {
  return <div>{+a + +b}</div>
}
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // <div>
  //   <h1>Hello world</h1>
  //   <ul>
  //     <li>{a + b}</li>
  //     <li>{sum(10, 20)}</li>
  //   </ul>
  //   <Sum a="10" b="20" />
  // </div>

  <App />
)
