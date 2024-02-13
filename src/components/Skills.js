import React from 'react';

function Skill() {
    return (
        <div className='bg-gray-200 p-2 flex flex-col justify-center rounded-md'>
            <div className="animate__bounceInRight flex flex-col justify-center items-center">
                <p className='text-center font-bold m-1 text-white bg-yellow-400 p-3 rounded-lg'>FrontEnd</p>
                <div className="flex w-1/2 justify-center bg-white shadow-lg rounded-md flex-wrap">
                    <img className="h-20 w-20 p-2 my-2 mx-4" src="./assets/html.png" alt='HTML'></img>
                    <img className="h-20 w-20 p-2 my-2 mx-4" src="./assets/css-3.png" alt='CSS'></img>
                    <img className="h-20 w-20 p-2 my-2 mx-4" src="./assets/js.png" alt='JavaScript'></img>
                    <img className="h-20 w-20 p-2 my-2 mx-4" src="./assets/react.png" alt='React'></img>
                </div>
            </div>
            <div className="mt-4 flex  flex-col justify-center items-center">
                <p className='text-center font-bold text-white bg-yellow-400 m-1 p-3 rounded-lg'>BackEnd</p>
                <div className="flex w-1/2 justify-center bg-white shadow-lg rounded-md flex-wrap">
                    <img className="h-20 w-20 p-2 my-2 mx-4" src="./assets/spring.png" alt="Spring"></img>
                    <img className="h-20 w-20 p-2 my-2 mx-4" src="./assets/springBoot.jpg" alt="Spring Boot"></img>
                    <img className="h-20 w-20 p-2 my-2 mx-4" src="./assets/java.png" alt="Java"></img>
                </div>
            </div>
            <div className="mt-4 flex flex-col justify-center items-center">
                <p className='text-center font-bold text-white m-1 bg-yellow-400 p-3 rounded-lg'>Database</p>
                <div className="flex w-1/2 bg-white shadow-lg rounded-md justify-center flex-wrap">
                    <img className="h-20 w-20 p-2 my-2 mx-4" src="./assets/mysql.png" alt="MySQL"></img>
                    <img className="h-20 w-30 p-2 my-2 mx-4" src="./assets/mongodb.jpg" alt="MongoDB"></img>
                </div>
            </div>
            <div className="mt-4 flex flex-col justify-center items-center">
                <p className='text-center font-bold text-white bg-yellow-400 m-1 p-3 rounded-lg'>Version Control</p>
                <div className="flex w-1/2 bg-white shadow-lg rounded-md justify-center flex-wrap">
                    <img className='h-30 w-40 p-3 my-2 mx-4' src='./assets/gitgithub.jpg' alt='Version Control'></img>
                </div>
            </div>
            <div className="mt-4 flex flex-col justify-center items-center">
                <p className='text-center font-bold text-white m-1 bg-yellow-400 p-3 rounded-lg'>Build Tools</p>
                <div className="flex w-1/2 bg-white shadow-lg rounded-md justify-center flex-wrap">
                    <img className='h-20 w-30 p-3 my-2 mx-4' src='./assets/maven.jpg' alt='Build Tools'></img>
                </div>
            </div>
            </div>
     
    );
}

export default Skill;
