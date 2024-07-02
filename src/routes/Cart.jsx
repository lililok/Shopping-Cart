import React, { useState, useEffect } from 'react';
import CartList from "../parts/CartList.jsx";
import Checkout from "../parts/Checkout.jsx";

function Cart() {
  return (
    <>
      <h2>Your Cart</h2>
      <CartList/>
      <Checkout/>
    </>
  );
}
  
  export default Cart