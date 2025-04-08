import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../Components/Button/Button';

const Home = () => {
    const [val , setVal]= useState('');
    async function downloadData() {
        const response = await fetch('http://localhost:3000/words');
        const data =  await response.json();

        console.log(data);
        const idx = Math.floor(Math.random()*data.length);
        
        setVal(data[idx].wordValue);
    }
    useEffect(() => {
        downloadData();
    }, [])
    return (
        <div className=' min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-50 to-green-100 px-4'>
            <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
                <h1 className="text-4xl font-bold text-green-700 mb-6">🚀 Start Hangman Game</h1>

                <div className='m-2'>
                    <Link to={'/play'} state={{wordSelected:val}}><Button text={'single Player'} styleType={'primary'} /></Link>

                </div>
                <br />
                <div className='m-2'>
                    <Link to={'/start'}><Button text={"Multi player"} styleType={'secondary'} /></Link>
                </div>
            </div>

        </div>
    )
}

export default Home