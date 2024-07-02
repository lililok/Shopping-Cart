import React, { useState } from 'react';
import Card from "./Card.jsx";


function Checkout() {
  const [cart, setCart] = useState(() => {
    const cartLocalStorage = localStorage.getItem('cart');
    return cartLocalStorage ? JSON.parse(cartLocalStorage) : [];
  });

    return (
        <>
          <h3>Checkout</h3>
        </>
    )
}

/* sum of all prices and reset on confirm button*/

export default Checkout