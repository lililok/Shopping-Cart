import React, { useState, useEffect } from 'react';

function Card({product}) {
    return (
        <>
        <div className="relative m-2 p-2 w-full max-w-xs flex justify-between flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <img src={product.image} alt={product.title} className="object-cover"/>
            <h3 className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">{product.title}</h3>
            <h2 className="leading-5 text-gray-500 dark:text-gray-400">${product.price}</h2>
        </div>
        </>
    )
}

export default Card