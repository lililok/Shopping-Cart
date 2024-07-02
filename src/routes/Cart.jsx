import React, { useState, useEffect } from 'react';
import CartList from "../parts/CartList.jsx";
import Checkout from "../parts/Checkout.jsx";

function Cart() {
  const [cart, setCart] = useState(() => {
    const cartLocalStorage = localStorage.getItem('cart');
    return cartLocalStorage ? JSON.parse(cartLocalStorage) : [];
  });

  useEffect(() => {
    const cartLocalStorage = localStorage.getItem('cart');
    if (cartLocalStorage) {
      setCart(JSON.parse(cartLocalStorage));
    }
  }, []);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}
  
  export default Cart