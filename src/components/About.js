import React from 'react';

function About() {
    return (
        <div className="bg-gray-200">
            <div className="bg-yellow-400 rounded-lg p-3 my-2">
                <p className="text-white font-bold text-center text-2xl">About Me</p>
            </div>
            <div className="flex flex-wrap items-center m-2 rounded-lg shadow-lg bg-white justify-evenly md:justify-center">
                <div className="md:w-1/2">
                    <img className="h-full w-full md:h-1/2 md:w-1/2" src="./assets/about.jpg" alt="img"></img>
                </div>
                <div className="w-full md:w-1/2 p-4">
                    <p className="text-black font-3xl text-center">
                        Hi there! My name is <span className='font-bold'>Eswaran S</span> and I am passionate about becoming a Java developer. I love diving into the world of coding and creating efficient, scalable solutions to complex problems.
                        My journey into programming began with my fascination for technology and its potential to transform the world. I started learning Java because of its versatility and widespread use in various industries, from enterprise applications to Android app development.
                        As I continue to hone my skills, I am excited to explore different aspects of Java development, including backend development with frameworks like Spring, building web applications with Java EE, and mastering object-oriented programming principles.
                        Outside of coding, you can find me exploring the latest tech trends, reading programming books, or enjoying outdoor activities. I am always eager to learn and grow, and I believe that continuous improvement is the key to success in the ever-evolving field of software development.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
