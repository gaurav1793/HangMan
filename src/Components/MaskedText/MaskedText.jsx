import React from 'react'
import maskedUtility from './MaskedTextUtility'
const MaskedText = ({ text, usedLetters }) => {
    const letters =maskedUtility(text,usedLetters);
    console.log(letters);
  return (
    <>
        {letters.map((letter,idx)=>{
           return <span key={idx} className='mx-1'>
                {letter}
            </span>
        })}
    </>
  )
}

export default MaskedText