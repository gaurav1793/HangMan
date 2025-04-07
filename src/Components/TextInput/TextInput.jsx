import React from 'react'

const TextInput = ({label,value , onChange , type}) => {
  return (
    <input
        className="px-4 py-2 border border-gray-500 rounded-md w-full"
        type={type}
        onChange={onChange}
        value={value}
        placeholder={label}
    />
  )
}

export default TextInput