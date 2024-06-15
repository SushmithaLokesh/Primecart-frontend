import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { useState } from 'react';
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart';


function App() {

  const [cartItems, setCartItems] = useState([])

  return (
    <div className="App">
      <Router>
        <div>
          <ToastContainer theme="dark" position='top-center'></ToastContainer>
          <Header cartItems={cartItems}></Header>
          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/search" element={<Home></Home>} />
            <Route path="/product/:id" element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems}></ProductDetail>} />
            <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}></Cart>} />
          </Routes>
        </div>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
