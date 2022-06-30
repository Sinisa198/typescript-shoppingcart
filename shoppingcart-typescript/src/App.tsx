import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Cart } from "./components/cart/Cart";
import { HomePage } from "./components/home/HomePage";
import CartProvider from "./store/CartProvider";
import Checkout from "./components/Checkout";
import Favorite from "./components/favorite/Favorite";
import FavoriteProvider from "./store/FavoriteProvider";

const App = () => {
  return (
    <div>
      <CartProvider>
        <FavoriteProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/favorite" element={<Favorite />} />
          </Routes>
        </FavoriteProvider>
      </CartProvider>
    </div>
  );
};

export default App;
