import React from 'react';
import { Link } from "react-router-dom";
import storeData from "../fetch.jsx";
import Card from "./Card.jsx";
import firstBanner from '../assets/firstBanner.jpg';
import secondBanner from '../assets/secondBanner.jpg';

function Banner() {
    const { top2Data } = storeData();

    return (
        <>
        <div className="flex flex-col items-center p-6">
            <div className='flex items-center bg-gray-800 p-6'>
                <img src={firstBanner} alt="banner" className='object-contain max-w-screen-sm'/>
                <div className="flex flex-col items-center m-6">
                    <h3 className='text-white text-xl mb-4'>Top Offer</h3>
                    <div className="flex space-x-4">
                    {top2Data.map((item) => (
                        <Card key={item.id} product={item} />
                    ))}
                    </div>
                </div>
                <img src={secondBanner} alt="banner" className='object-contain max-w-screen-sm'/>
            </div>
            <button className="px-8 py-4 text-lg bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full mt-10"><Link to="shop">See all offers</Link></button>
        </div>
        </>
    )
}

export default Banner