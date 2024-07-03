import React, { useState, useEffect } from 'react';
import Card from "./Card.jsx";
import storeData from "../fetch.jsx";

function Cards() {
  const { allData } = storeData();
  const [cart, setCart] = useState(() => {
    const cartLocalStorage = localStorage.getItem('cart');
    return cartLocalStorage ? JSON.parse(cartLocalStorage) : [];
  });
  const [isCart, setIsCart] = useState(false);

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

  const removeFromCart = (item) => {
    setCart(prevItems => {
      return prevItems.reduce((acc, cartItem) => {
        if (cartItem.id === item.id) {
          if (cartItem.quantity > 1) {
            acc.push({ ...cartItem, quantity: cartItem.quantity - 1 });
          }
        } else {
          acc.push(cartItem);
        }
        return acc;
      }, []);
    });
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    const event = new Event('storage');
    window.dispatchEvent(event);
}, [cart]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const getItemQuantity = (itemId) => {
    const item = cart.find(cartItem => cartItem.id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="grid grid-flow-row justify-items-center gap-8 text-neutral-600 p-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {allData.map((item) => (
        <div key={item.id}>
          <Card product={item} />
          {getItemQuantity(item.id) > 0 ? (
            <div>
              <button onClick={() => removeFromCart(item)}>-</button>
              <span>{getItemQuantity(item.id)}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>
          ) : (
            <button onClick={() => addToCart(item)}>Add to cart</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Cards