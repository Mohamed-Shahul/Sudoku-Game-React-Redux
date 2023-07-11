import React from 'react'
import { useDispatch } from 'react-redux'
import { resetSudoku, startNewGame } from '../sudokuSlice'


const EditGameButton = () => {

    const dispatch=useDispatch()

  return (
    <div className='editGameDiv'>
      <button onClick={()=>{dispatch(resetSudoku())}} className='resetGameButt'>Reset</button>
      <button onClick={()=>{dispatch(startNewGame())}} className='startNewGameButt'>New Game</button>
    </div>
  )
}

export default EditGameButton
