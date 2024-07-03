import React, { useState, useEffect } from 'react';
import Card from "./Card.jsx";
import storeData from "../fetch.jsx";
import { getItemQuantity, removeFromCart as removeItem, addToCart as addItem } from '../utils';

function Cards() {
  const { allData } = storeData();
  const [cart, setCart] = useState(() => {
    const cartLocalStorage = localStorage.getItem('cart');
    return cartLocalStorage ? JSON.parse(cartLocalStorage) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    const event = new Event('storage');
    window.dispatchEvent(event);
}, [cart]);

  const removeFromCart = (item) => {
    setCart(prevCart => removeItem(prevCart, item));
  };

  const addToCart = (item) => {
    setCart(prevCart => addItem(prevCart, item));
  };

  return (
    <div className="grid grid-flow-row gap-3 text-neutral-600 p-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
      {allData.map((item) => (
        <div key={item.id} className="flex flex-col items-center gap-3">
          <Card product={item} />
          {getItemQuantity(cart, item.id) > 0 ? (
            <div className="shadow-md p-3 rounded-lg border border-gray-100 flex items-center">
              <button onClick={() => removeFromCart(item)} className="mr-3">-</button>
              <span>{getItemQuantity(cart, item.id)}</span>
              <button onClick={() => addToCart(item)} className="ml-3">+</button>
            </div>
          ) : (
            <button onClick={() => addToCart(item)} className="shadow-md p-3 rounded-lg border border-gray-100">Add to cart</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Cards;
