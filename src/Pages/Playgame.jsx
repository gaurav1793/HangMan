import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MaskedText from '../Components/MaskedText/MaskedText';
import LetterButton from '../Components/LetterButtons/LetterButton';
import HangMan from '../Components/HangMan/HangMan';


const Playgame = () => {
    const {state}=useLocation();
    const [step,setStep]=useState(0);
    const [guessedLetter , setGuessedLetter]=useState([]);

    function onLetterClick(e){
        const val=e.target.value;
        if(state.wordSelected.toUpperCase().includes(val)){
            console.log('correct');
        }else{
            setStep(step+1);
        }
        setGuessedLetter([...guessedLetter,val]);
        console.log(guessedLetter);
    }
  return (
    <div>
        <h1>Play Game </h1>
        <MaskedText text={state.wordSelected} usedLetters={guessedLetter}/>
        <div>
            <LetterButton 
                text={state.wordSelected}
                guessedLetters={guessedLetter}
                onLetterClick={onLetterClick}
            />
        </div>
        <HangMan step={step}/>
        <Link to={'/start'}  className='text-blue-400'>Start Game Link</Link>
    </div>
  )
}

export default Playgame