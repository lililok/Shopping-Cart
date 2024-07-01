import React from 'react';
import { Link } from "react-router-dom";
import storeData from "../fetch.jsx";
import Card from "./Card.jsx";

function Banner() {
    const { top2Data } = storeData();

    return (
        <>
        <div className="flex flex-col items-center p-6">
            <div className='flex items-center bg-gray-800 p-6'>
                <img src="src/assets/firstBanner.jpg" alt="banner" className='object-contain h-60 w-70'/>
                <div className="flex flex-col items-center p-6">
                    <h3 className='text-white text-xl mb-4'>Top Offer</h3>
                    <div className="flex space-x-4">
                    {top2Data.map((item) => (
                        <Card key={item.id} product={item} />
                    ))}
                    </div>
                </div>
                <img src="src/assets/secondBanner.jpg" alt="banner" className='object-contain h-60 w-70'/>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10"><Link to="shop">See all offers</Link></button>
        </div>
        </>
    )
}

/*num of items in cart*/

export default Banner