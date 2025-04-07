import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import MaskedText from '../Components/MaskedText/MaskedText';


const Playgame = () => {
    const {state}=useLocation();
    console.log(state.wordSelected);
  return (
    <div>
        <h1>Play Game </h1>
        <MaskedText text={state.wordSelected} usedLetters={['h','m']}/>
        <Link to={'/start'}  className='text-blue-400'>Start Game Link</Link>
    </div>
  )
}

export default Playgame