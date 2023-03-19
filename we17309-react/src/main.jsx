import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
// import './index.css'

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
  <BrowserRouter>
    <App />
  </BrowserRouter>

)
