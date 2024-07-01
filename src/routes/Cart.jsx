import React, { useState } from 'react';
import CartList from "../parts/CartList.jsx";
import Checkout from "../parts/Checkout.jsx";

function Cart() {
    return (
      <>
      <CartList />
      <Checkout />
      </>
    )
  }
  
  export default Cart