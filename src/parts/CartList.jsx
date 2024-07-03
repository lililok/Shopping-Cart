import React, { useState, useEffect } from 'react';
import Card from "./Card.jsx";

function CartList() {
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
    <div className="flex items-center">
      {cart.length === 0 && <p>empty</p>}
      <ul className="flex items-center">
        {cart.map((item) => (
          <li key={item.id}>
            <Card product={item} />
            <button>+</button>
            <button>-</button>
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*render, add, delete*/

export default CartList