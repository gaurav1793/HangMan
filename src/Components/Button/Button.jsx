import React from 'react'
import getButtonStyle from './getButtonStyle'

const Button = ({buttonType ="button" , text , styleType , onClickHandler}) => {
  return (
    <button
        type={buttonType}
        onClick={onClickHandler}
        className={`px-4 py-2 ${getButtonStyle(styleType)} text-white rounded-md transition-all`}
    >
        {text}
    </button>
  )
}

export default Button