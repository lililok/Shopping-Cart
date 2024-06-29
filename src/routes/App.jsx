import { useState } from 'react'
import { Link } from "react-router-dom";

function App() {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="cart">Cart page</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default App
