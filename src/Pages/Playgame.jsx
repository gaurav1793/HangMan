import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const Playgame = () => {
    const {state}=useLocation();
    console.log(state.wordSelected);
  return (
    <div>
        <Link to={'/start'} >go to start link</Link>
    </div>
  )
}

export default Playgame