import React from 'react';
import { Link } from "react-router-dom";

function Banner() {
    return (
        <>
        <div className="flex flex-col items-center">
            <div className='flex items-center bg-gray-800'>
                <img src="src/assets/firstBanner.jpg" alt="" className='object-contain h-60 w-70'/>
                <h3>Top offer</h3>
                <div className="cards">
                    <div className="card"></div>
                    <div className="card"></div>
                </div>
                <img src="src/assets/secondBanner.jpg" alt="" className='object-contain h-60 w-70'/>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><Link to="shop">See all offers</Link></button>
        </div>
        </>
    )
}

export default Banner