import React from 'react'
const Alphabet = 'QWERTYUIOPASDFGHJKLZXCVBNM';

const LetterButton = ({text , guessedLetters , onLetterClick}) => {
    const originalLetters = new Set(text.toUpperCase().split(''));
    guessedLetters=guessedLetters.map(ele=>ele.toUpperCase());
    const guessedLettersSet= new Set(guessedLetters);
    const Alphabets = Alphabet.split('')

    function buttonStyle(ele){
        if(guessedLettersSet.has(ele)){
            return `${originalLetters.has(ele)? 'bg-green-500':'bg-red-500'}`
        }
        else{
            return 'bg-blue-500';
        }
    }
    const buttons = Alphabets.map((ele,idx)=>{
        return (<button
                key={`button-${idx}`}
                value={ele}
                onClick={onLetterClick}
                disabled={guessedLettersSet.has(ele)}
                className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(ele)}`}
        >
            {ele}
        </button>)
    })

  return (
    <>
    {buttons}
    </>
  )
}

export default LetterButton