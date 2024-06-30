import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="flex items-center bg-teal-500 p-6 justify-between">
            <div className="flex items-center flex-shrink-0 text-white">
                <span className="font-semibold text-xl tracking-tight">
                    <Link to="/">Couture Corner</Link>
                </span>
            </div>
            <div>
                <Link to="shop" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Shop</Link>
                <Link to="cart" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Cart</Link>
            </div>
            </nav>
        </>
    )
}

export default Navbar