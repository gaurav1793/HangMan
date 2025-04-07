import React from 'react'
import getButtonStyle from './getButtonStyle'

const Button = ({buttonType ="button" , text , styleType , onClickHandler}) => {
  return (
    <button
        type={buttonType}
        onClick={onClickHandler}
        className={` ${getButtonStyle(styleType)} text-white text-lg px-6 py-2 w-[100px] rounded-lg transition-all`}
    >
        {text}
    </button>
  )
}

export default Button