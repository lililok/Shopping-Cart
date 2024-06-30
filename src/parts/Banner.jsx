import React from 'react';
import { Link } from "react-router-dom";

function Banner() {
    return (
        <>
        <div className="flex flex-col items-center p-6">
            <div className='flex items-center bg-gray-800 p-6'>
                <img src="src/assets/firstBanner.jpg" alt="" className='object-contain h-60 w-70'/>
                <div className="flex flex-col items-center p-6">
                    <h3 className='text-white text-xl mb-4'>Top Offer</h3>
                    <div className="flex space-x-4">
                        <div className="card bg-white p-4 rounded shadow">Card 1</div>
                        <div className="card bg-white p-4 rounded shadow">Card 2</div>
                    </div>
                </div>
                <img src="src/assets/secondBanner.jpg" alt="" className='object-contain h-60 w-70'/>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><Link to="shop">See all offers</Link></button>
        </div>
        </>
    )
}

export default Banner