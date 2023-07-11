import React from 'react'
import { Link } from 'react-router-dom'

const StartGame = () => {
  return (
    <div className='startGame'>
        <h1>Sudoku Game</h1>
      <Link to="/sudoku" className='link'><button>Start Game</button></Link>
      <Link to="/about" className='link'><button>About</button></Link>
    </div>
  )
}

export default StartGame
