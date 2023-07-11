import React, { useEffect } from 'react'
import sudoku from "sudoku";
import { OpenSuccessAlert, closeNewGameAlert, closeReserAlert, getSudokuData, newGameAlert, resetSudokuAlert } from '../sudokuSlice';
import { useDispatch, useSelector } from 'react-redux';
import SudokuTable from './SudokuTable';
import Buttons from './Buttons';
import Header from './Header';
import EditGameButton from './EditGameButton';
import NewGameAlert from './alertComponents/NewGameAlert';
import ResetAlert from './alertComponents/ResetAlert';
import SuccessAlert from './alertComponents/SuccessAlert';


const Sudoku = () => {


let getData=()=>{
    // Create a Sudoku Puzzle's
  const initialBoard = sudoku.makepuzzle();
  const solvedBoard = sudoku.solvepuzzle(initialBoard)
   
// Add a Sudoku puzzle value+1
    let puzzle = initialBoard.map((cell) =>cell !== null ? cell + 1 : null)
    let solvedPuzzle = solvedBoard.map((cell) => cell + 1)

// Create a 2D Array for list out The Sudoku Table
let puzzle2D = []
for (let row = 0; row < 9; row++) {
  const newRow = []
  for (let col = 0; col < 9; col++) {
    let i = row * 9 + col
    newRow.push(puzzle[i])
  }
  puzzle2D.push(newRow)
}
let solvedPuzzle2D = []
 for (let row = 0; row < 9; row++) {
    const newRow = solvedPuzzle.slice(row * 9, (row + 1) * 9);
    solvedPuzzle2D.push(newRow);
  }

const sudokuState={
    initialBoard:puzzle2D,
    solvedBoard:solvedPuzzle2D,
    solvedStatus:false,
    count:0,
    modalShow:false,
    resetAlert:false,
    successAlert:false
}
return sudokuState
}
const dispatch=useDispatch()

const { modalShow,resetAlert,successAlert } = useSelector((state) => state.sudoku.sudokuState)

useEffect(()=>{
    dispatch(getSudokuData(getData()))
},[dispatch])



    

  return (
    <>
    <Header/>
    <EditGameButton/>
    <div className='sudokuComp'>
      <SudokuTable/>
      <Buttons/>
    </div>

    <NewGameAlert 
        show={modalShow}
        onHide={() => dispatch(newGameAlert(getData()))}
        onHideCancel={()=>dispatch(closeNewGameAlert())}
      />

    <ResetAlert
        show={resetAlert}
        onHide={() =>{dispatch(resetSudokuAlert())}}
        onHideCancel={() => dispatch(closeReserAlert())}
      />

    <SuccessAlert
        show={successAlert}
        onHide={() => dispatch(OpenSuccessAlert())}
      />
    </>
   
  )
}

export default Sudoku
