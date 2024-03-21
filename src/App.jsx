import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
              <Switch>
                  <Route path="/" exact>
                      <Cart setTotal={setTotal}></Cart>
                  </Route>
                  <Route path="/order-completed">
                      <Order></Order>
                  </Route>
              </Switch>
          </div>
          <p className="read-the-docs">
              Click on the Vite and React logos to learn more
          </p>
      </Router>
  )
}

export default App
