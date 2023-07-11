import React from 'react'
import { useSelector } from 'react-redux'
import SudokuErrorTable from './SudokuErrorTable'
import SudokuTableList from './SudokuTableList'

const SudokuTable = () => {

    const { initialBoard, solvedStatus } = useSelector((state) => state.sudoku.sudokuState)

    return (
        <>
            <div className='sudokuTable'>
            <table>
                <tbody>
                    {solvedStatus ? initialBoard.map((rowVal, rowI) => (
                        <tr key={rowI}>
                            <SudokuErrorTable rowI={rowI} rowVal={rowVal} />
                        </tr>
                    )) : initialBoard && initialBoard.map((rowVal, rowI) => (
                        <tr key={rowI}>
                            <SudokuTableList rowI={rowI} rowVal={rowVal} />
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
        </>
        

    )
}

export default SudokuTable
