import React from 'react'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'

const TextInputForm = ({handleFormSubmit, handleTextInputChange, value, inputType, setInputType}) => {
    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <TextInput
                        label="Enter a word or phrase"
                        type={inputType}
                        onChange={handleTextInputChange}
                        value={value}

                    />
                </div>
                <div>
                    <Button
                        styleType='warning'
                        text={(inputType=='password'?'show':'hide')}
                        onClickHandler={()=>setInputType(inputType==='text'?'password':'text')}
                    />
                </div>
                <div>
                    <Button
                        text='ok'
                        styleType='success'
                        buttonType='submit'
                    />
                </div>
            </form>

        </>
    )
}

export default TextInputForm