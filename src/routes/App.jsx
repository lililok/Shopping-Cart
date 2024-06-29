import { useState } from 'react'
import { Link } from "react-router-dom";

function App() {

  return (
    <>
      <nav>
        <Link to="/">Landing</Link>
        <Link to="shop">Shop page</Link>
        <Link to="cart">Cart page</Link>
      </nav>
    </>
  )
}

export default App
