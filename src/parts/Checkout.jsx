import React, { useState, useEffect } from 'react';
import Card from "./Card.jsx";
import { getItemQuantity, removeFromCart as removeItem, addToCart as addItem } from '../utils';

function Checkout() {
  const [cart, setCart] = useState(() => {
    const cartLocalStorage = localStorage.getItem('cart');
    return cartLocalStorage ? JSON.parse(cartLocalStorage) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    const event = new Event('storage');
    window.dispatchEvent(event);
  }, [cart]);

  const totalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleConfirm = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const removeFromCart = (item) => {
    setCart(prevItems => removeItem(prevItems, item));
  };

  const addToCart = (item) => {
    setCart(prevItems => addItem(prevItems, item));
  };

  return (
    <>
      <h3 className='text-xl mb-4'>Checkout</h3>
      <div className="flex flex-col">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-start flex-row gap-5 shadow-md p-3">
            <Card product={item} />
            <div className="shadow-md p-3">
              <button onClick={() => removeFromCart(item)} className="mr-3">-</button>
              <span>{getItemQuantity(cart, item.id)}</span>
              <button onClick={() => addToCart(item)} className="ml-3">+</button>
            </div>
            <div>Subtotal: ${(item.price * item.quantity).toFixed(2)}</div>
          </div>
        ))}
      </div>
      <div className='text-xl mt-4'>Total: ${totalPrice().toFixed(2)}</div>
      <button onClick={handleConfirm} className="px-8 py-4 text-lg bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full mt-10">Purchase</button>
    </>
  );
}

export default Checkout;
