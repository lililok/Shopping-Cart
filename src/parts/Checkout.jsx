import React, { useState, useEffect } from 'react';
import Card from "./Card.jsx";


function Checkout() {
  const [cart, setCart] = useState(() => {
    const cartLocalStorage = localStorage.getItem('cart');
    return cartLocalStorage ? JSON.parse(cartLocalStorage) : [];
  });


  const totalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleConfirm = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    const event = new Event('storage');
    window.dispatchEvent(event);
}, [cart]);


  return (
    <>
      <h3>Checkout</h3>
      <div>Total: ${totalPrice().toFixed(2)}</div>
      <div className="flex items-center">
      {cart.map((item) => (
        <div key={item.id}>
          <Card product={item} />
          <div>Quantity: {item.quantity}</div>
          <div>Subtotal: ${(item.price * item.quantity).toFixed(2)}</div>
        </div>
      ))}
      </div>
      <button onClick={handleConfirm}>Confirm</button>
    </>
  );
}

/* sum of all prices and reset on confirm button*/

export default Checkout