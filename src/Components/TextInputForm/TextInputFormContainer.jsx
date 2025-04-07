import React, { useState } from 'react'
import TextInputForm from './TextInputForm'

const TextInputFormContainer = ({onSubmit}) => {
    const [inputType ,setInputType]= useState('password');
    const [value, setValue] = useState('');

    function handleTextInputChange(e){
        console.log(e.target.value);
        setValue(e.target.value);
    }

    function handleFormSubmit(e){
        e.preventDefault();
        console.log(value); 
        console.log("hi");
        onSubmit?.(value);
    }
  return (
    <TextInputForm
        value={value}
        handleFormSubmit={handleFormSubmit}
        handleTextInputChange={handleTextInputChange}
        inputType={inputType}
        setInputType={setInputType}
    />
  )
}

export default TextInputFormContainer