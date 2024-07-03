export const getItemQuantity = (cart, itemId) => {
    const item = cart.find(cartItem => cartItem.id === itemId);
    return item ? item.quantity : 0;
  };
  
  export const removeFromCart = (cart, item) => {
    return cart.reduce((acc, cartItem) => {
      if (cartItem.id === item.id) {
        if (cartItem.quantity > 1) {
          acc.push({ ...cartItem, quantity: cartItem.quantity - 1 });
        }
      } else {
        acc.push(cartItem);
      }
      return acc;
    }, []);
  };
  
  export const addToCart = (cart, item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      return cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
    } else {
      return [...cart, { ...item, quantity: 1 }];
    }
  };
  