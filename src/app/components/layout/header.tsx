'use client';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faCartShopping, faRightLeft, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div className="w-full bg-white px-5 py-6 border-b border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[auto_2fr_1fr] items-center gap-4 ">


                <div className="flex self-center justify-self-center w-full justify-center items-center gap-4 ">
                    <img src="\Images\ecommerce-logo.avif" alt="Logo" className="w-15 h-15 rounded-full border-red-800 border-2 object-contain" />
                    <div>
                        <h1 className="text-xl font-bold">Ecommerce</h1>
                        <span className="text-sm text-gray-500">Store</span>
                    </div>
                </div>


                <div className="flex  bg-gray-100 rounded-md overflow-hidden border border-gray-300 ">
                    <select className="px-3 py-2 bg-white text-sm border-r border-gray-300 outline-none">
                        <option>Mobile</option>
                        <option>Accessories</option>
                        <option>Lcds</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="flex-1 px-4 py-2 bg-gray-100 outline-none text-sm"
                    />
                    <button className="px-4 py-2 text-gray-600">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>





                <div className="flex  w-full self-center justify-self-center  justify-around gap-1 text-sm">
                    <div className="self-end justify-self-end text-right hidden lg:block">
                        <p className="text-lg font-semibold">8 800 332 65-66</p>
                        <p className="text-gray-500 text-xs">Support 24/7</p>
                    </div>



                    <div className="flex items-center gap-4">

                        <div className="relative">
                            <FontAwesomeIcon icon={faRightLeft} className="text-xl" />
                            <span className="absolute -top-2 -right-2 bg-yellow-400 text-[10px] rounded-full px-1">0</span>
                        </div>


                        <div className="relative">
                            <FontAwesomeIcon icon={faHeart} className="text-xl" />
                            <span className="absolute -top-2 -right-2 bg-yellow-400 text-[10px] rounded-full px-1">0</span>
                        </div>


                        <div className="relative flex items-center">
                            <FontAwesomeIcon icon={faCartShopping} className="text-xl" />
                            <span className="absolute -top-2 -right-2 bg-yellow-400 text-[10px] rounded-full px-1">0</span>
                        </div>


                        <div className="hidden md:block text-right">
                            <p className="text-xs text-gray-500">Your Cart</p>
                            <p className="font-bold">$0.00</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;
