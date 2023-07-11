import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { handleCell } from '../sudokuSlice'


const SudokuErrorTable = ({rowI,rowVal}) => {

    const { initialBoard,solvedBoard } = useSelector((state) => state.sudoku.sudokuState)
    const dispatch=useDispatch()
    return (
        <>
            {
                rowVal.map((cellVal, colI) => (
                    <td key={`${rowI}-${colI}`}
                        className={cellVal !== null ? (typeof cellVal === 'string' ?
                            Number(initialBoard[rowI][colI]) === solvedBoard[rowI][colI] ? '' : 'error'
                            : 'nonEmpty') : ''}
                        onClick={(e) => { dispatch(handleCell({ e, cellVal, rowI, colI })) }} tabIndex={0}>
                        {cellVal}
                    </td>
                ))
            }
        </>
    )
}

export default SudokuErrorTable
