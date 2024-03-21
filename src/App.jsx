import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from "./components/Header.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/Cart.jsx";
import Order from "./components/Order.jsx";

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  return (
      <Router>
          <div className="card">
              <Header title="Payment Page"></Header>
              <Routes>
                  <Route path="/" element={<Cart setTotal={setTotal} />} />
                  <Route path="/order-completed" element={<Order />} />
              </Routes>
          </div>
          <p className="read-the-docs">

          </p>
      </Router>
  )
}

export default App
