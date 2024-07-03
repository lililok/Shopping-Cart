import React, { useState, useEffect } from 'react';
import Checkout from "../parts/Checkout.jsx";

function Cart() {
  return (
    <>
    <div className='p-5'>
      <h1 className='text-2xl mb-4'>Your Cart</h1>
      <Checkout/>
    </div>
    </>
  );
}
  
  export default Cart