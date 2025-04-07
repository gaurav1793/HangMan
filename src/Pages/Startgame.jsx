import React from 'react'
import TextInputFormContainer from '../Components/TextInputForm/TextInputFormContainer'
import { useNavigate } from 'react-router-dom'

const Startgame = () => {
    const navigate = useNavigate();
    function handleSubmit(value){
        console.log(value);
        console.log("ji");
        navigate('/play',{state:{wordSelected:value}});
    }
  return (
    <div>
        <h1>start game</h1>
        <TextInputFormContainer onSubmit={handleSubmit}/>
    </div>
  )
}

export default Startgame