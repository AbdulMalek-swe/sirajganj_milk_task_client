"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <a href="#" className="text-white text-lg font-semibold">Logo</a>
                </div>
                <div className="hidden md:flex">
                    <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Home</Link>
                    <Link href="/category/travel" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Travel</Link>
                    <Link href="/category/technology" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Technology</Link>
                    <Link href="/category/lifestyle" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Lifestyle</Link>
                    <Link href="/auth/signin" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md">Login</Link>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="focus:outline-none focus:text-white hover:text-white"
                    >
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M3 18c0-.552.456-1 1.002-1h16.996c.552 0 1 .456 1 1s-.456 1-1 1H4.002A.997.997 0 0 1 3 18zM3 12c0-.552.456-1 1.002-1h16.996c.552 0 1 .456 1 1s-.456 1-1 1H4.002A.997.997 0 0 1 3 12zm0-5c0-.552.456-1 1.002-1h16.996c.552 0 1 .456 1 1s-.456 1-1 1H4.002A.997.997 0 0 1 3 7z"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden ${isOpen ? "" : "hidden"} absolute w-full bg-gray-800 z-50 top-16`}>
                <div className="container mx-auto">
                    
                    <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md block">Home</Link>
                    <Link href="/category/travel" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md block">Travel</Link>
                    <Link href="/category/technology" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md block">Technology</Link>
                    <Link href="/category/lifestyle" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md block">Lifestyle</Link>
                    <Link href="/auth/signin" className="text-white hover:bg-gray-700 px-3 py-2 rounded-md block">Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;