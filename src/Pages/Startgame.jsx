import React from 'react'
import TextInputFormContainer from '../Components/TextInputForm/TextInputFormContainer'
import { useNavigate } from 'react-router-dom'

const Startgame = () => {
  const navigate = useNavigate()

  function handleSubmit(value) {
    console.log(value)
    navigate('/play', { state: { wordSelected: value } })
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-green-50 to-green-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-6">🚀 Start Hangman Game</h1>
        <p className="mb-4 text-gray-600">Enter a word for the game and click start!</p>

        <TextInputFormContainer onSubmit={handleSubmit} />

        <p className="text-xs text-gray-400 mt-6 italic">
          Don’t let your friend see the screen when entering the word! 😁
        </p>
      </div>
    </div>
  )
}

export default Startgame
