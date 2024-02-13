import React from 'react';

function Main() {
    return (
        <div className="m-2 p-4 bg-white shadow-lg flex flex-col">
            {/* Connect with me section */}
            <div className="bg-yellow-400 flex shadow-lg p-1 rounded-md justify-center items-center">
                <p className="font-semibold p-1 text-gray-800">Connect with me :</p>
                <a className="img" href="#"><img className="w-7 h-7 mx-3 transition duration-300 transform hover:scale-110" src="./assets/github.png" alt="GitHub Logo" /></a>
                <a className="img" href="#"><img className="w-7 h-7 mx-3 transition duration-300 transform hover:scale-110" src="./assets/whatsapp.png" alt="WhatsApp Logo" /></a>
                <a className="img" href="#"><img className="w-7 h-7 mx-3 transition duration-300 transform hover:scale-110" src="./assets/linkedin.png" alt="LinkedIn Logo" /></a>
            </div>
            {/* Main content */}
            <div className='md:flex max-h-full justify-center items-center'>
                {/* Image section */}
                <div className='md:w-1/2'>
                    <img src="./assets/main.png" alt="img" className=" min-w-60 h-70" />
                </div>
                {/* Text section */}
                <div className='md:w-1/2 p-4 flex justify-center items-center text-center'>
                    <div className='p-2'>
                        <p className="my-2 font-semibold text-red-600 text-2xl md:text-5xl">
                            Hi, I'm <br /><span className='font-bold text-3xl md:text-6xl bg-cyan-400'>Eswaran S</span>
                        </p>
                        <p className='my-2 text-sm md:text-lg text-2xl md:text-3xl italic text-gray-700'>
                            "I aspire to master the entire technology stack, from front-end to back-end, crafting seamless digital experiences from start to finish."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
