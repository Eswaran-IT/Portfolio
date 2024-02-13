import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="bg-white">
            <div className="flex md:m-2 justify-around rounded-lg p-2 bg-blue-600 text-white ">
                <div className="font-bold p-2 md:text-3xl text-2xl">
                    <Link to="/" className="hover:underline">Portfolio</Link>
                </div>
                <div className="p-1 m-2 cursor-pointer md:hidden" onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d={showMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </div>
                <div className={`flex md:flex hidden md:block`}>
                    <Link to="/" className="font-semibold bg-blue-600 rounded-md m-2 p-3">Home</Link>
                    <Link to="/skills" className="font-semibold bg-blue-600 rounded-md m-2 p-3">Skills</Link>
                    <Link to="/about" className="font-semibold bg-blue-600 rounded-md m-2 p-3">About</Link>
                    <Link to="/contact" className="font-semibold bg-blue-600 rounded-md m-2 p-3">Contact</Link>
                </div>
            </div>
            <div className={`flex flex-col ${(showMenu ? 'block' : 'hidden')} md:hidden justify-center bg-white shadow-lg`}>
                <Link to="/" className="hover:bg-white hover:text-black hover:outline border-2 hover:border-2 font-semibold text-center text-white bg-blue-600 rounded-md m-2 p-3">Home</Link>
                <Link to="/skills" className="hover:bg-white hover:text-black hover:outline border-2 hover:border-2 font-semibold text-center text-white bg-blue-600 rounded-md m-2 p-3">Skills</Link>
                <Link to="/about" className="hover:bg-white hover:text-black hover:outline border-2 hover:border-2 font-semibold text-center text-white bg-blue-600 rounded-md m-2 p-3">About</Link>
                <Link to="/contact" className="hover:bg-white hover:text-black hover:outline border-2 hover:border-2 font-semibold text-center text-white bg-blue-600 rounded-md m-2 p-3">Contact</Link>
            </div>
        </div>
    );
}

export default Header;
