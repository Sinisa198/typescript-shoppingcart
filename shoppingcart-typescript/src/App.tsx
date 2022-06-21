import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Cart } from './components/cart/Cart';
import { HomePage }  from './components/home/HomePage';
import './App.css';
import  CartProvider  from './store/CartProvider';
import Checkout from './components/Checkout';

export function App()  {
  return (
    <div>
      <CartProvider>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

