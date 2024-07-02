import React, { useState, useEffect } from 'react';
import Card from "./Card.jsx";
import storeData from "../fetch.jsx";

function Cards() {
  const { allData } = storeData();
  const [cart, setCart] = useState(() => {
    const cartLocalStorage = localStorage.getItem('cart');
    return cartLocalStorage ? JSON.parse(cartLocalStorage) : [];
  });

  const addToCart = (item) => {
    setCart(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <div className="grid grid-flow-row justify-items-center gap-8 text-neutral-600 pd-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {allData.map((item) => (
          <div key={item.id}>
            <Card product={item} />
            <button onClick={() => addToCart(item)}>Add to cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards