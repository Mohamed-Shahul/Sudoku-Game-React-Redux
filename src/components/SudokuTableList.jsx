import React from 'react'
import { useDispatch } from 'react-redux'
import { handleCell } from '../sudokuSlice'

const SudokuTableList = ({rowI,rowVal}) => {

    const dispatch=useDispatch()
    return (
        <>
            {
                rowVal.map((cellVal, colI) => (
                    <td key={`${rowI}-${colI}`}
                        className={cellVal !== null ? (typeof cellVal === 'string' ? '' : 'nonEmpty') : ''}
                        onClick={(e) => { dispatch(handleCell({ e, cellVal, rowI, colI })) }} tabIndex={0}>
                        {cellVal}
                    </td>
                ))
            }

        </>
    )
}

export default SudokuTableList
