import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <h3><Link to="/" className='link'>Home</Link></h3>
      <h3><Link to="/sudoku" className='link'>Sudoku</Link></h3>
      <h3><Link to="/about" className='link'>About</Link></h3>
    </div>
  )
}

export default Header
