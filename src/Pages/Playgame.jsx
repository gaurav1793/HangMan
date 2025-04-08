import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import MaskedText from '../Components/MaskedText/MaskedText'
import LetterButton from '../Components/LetterButtons/LetterButton'
import HangMan from '../Components/HangMan/HangMan'

const Playgame = () => {
    const { state } = useLocation();
    const [step, setStep] = useState(0);
    const [win , setWin]=useState(false);
    const [guessedLetter, setGuessedLetter] = useState([])

    function help(){
        console.log('hi from help');
        let x=0;
        for(let i=0 ; i<guessedLetter.length ; i++){
            if(guessedLetter[i]!='_'){
                x++;
            }
        }
        console.log("x = ",x);
        if(x===state?.wordSelected.length){
            setWin(true);
        }
    }
    function onLetterClick(e) {
        const val = e.target.value
        if (state.wordSelected.toUpperCase().includes(val)) {
            console.log('correct');
        } else {
            setStep(step + 1)
        }
        setGuessedLetter([...guessedLetter, val]);
        
        console.log("hi",guessedLetter);
        help();
    }
    
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center px-4 py-8 ">
            <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">🎮 Hangman Game</h1>

            <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-6">{state?.wordHint}</h2>

            <div className="text-4xl md:text-6xl font-mono tracking-widest mb-8">
                <MaskedText text={state?.wordSelected} usedLetters={guessedLetter} />
            </div>
            {
                win && (<div>
                    <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">Winner</h1>
                </div>)
            }
            {step == 10 ? (<div className="text-5xl md:text-7xl font-extrabold tracking-wider text-red-600 mb-8 animate-pulse drop-shadow-lg text-center">
                🛑 GAME OVER 🛑
            </div>) : (
                <div className={`flex flex-col md:flex-row gap-8 w-full max-w-5xl items-start justify-center `}>
                    <div className="flex-1 bg-white p-4 rounded-lg shadow-md border border-gray-300">
                        <LetterButton
                            text={state?.wordSelected}
                            guessedLetters={guessedLetter}
                            onLetterClick={onLetterClick}
                        />
                    </div>

                    <div className="w-full md:w-[235px] bg-white p-4 rounded-lg shadow-md border border-gray-300">
                        <HangMan step={step} />
                    </div>
                </div>
            )}


            <div className="mt-10">
                <Link
                    to="/"
                    className="inline-block bg-green-600 text-white text-lg px-6 py-3 rounded-lg shadow hover:bg-green-700 transition-all duration-200"
                >
                    🔁 Restart Game
                </Link>
            </div>
        </div>
    )
}

export default Playgame
