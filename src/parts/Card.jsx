import React from 'react';

function Card({ title, price, image }) {
    return (
        <>
        <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <img src={image} alt={title} className="object-cover"/>
            <h3 className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">{title}</h3>
            <h2 className="leading-5 text-gray-500 dark:text-gray-400">${price}</h2>
            <button>Add to cart</button>
        </div>
        </>
    )
}

export default Card