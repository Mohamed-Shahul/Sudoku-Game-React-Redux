import { createSlice } from "@reduxjs/toolkit";

const initialState={
    sudokuState:{},
    selectedSudoku:{}
}

const sudokuSlice=createSlice({
    name:'sudokuSlice',
    initialState,
    reducers:{
        getSudokuData:(state,action)=>{
            state.sudokuState=action.payload            
        },
        handleCell:(state,action)=>{
            state.selectedSudoku=action.payload
        },
        handleButton:(state,action)=>{
            const initialBoard= state.sudokuState.initialBoard
            const text=action.payload.target.innerText
            const selectedText=state.selectedSudoku.cellVal
            const colI=state.selectedSudoku.colI
            const rowI=state.selectedSudoku.rowI
            if(state.selectedSudoku.colI){
            initialBoard[rowI][colI]= initialBoard[rowI][colI]===null?text:selectedText
            }
        },
        handleSolve:(state,action)=>{
            const initialBoard= state.sudokuState.initialBoard.flat().map(val => val === null ? '.' : val).join('');
            const solvedBoard= state.sudokuState.solvedBoard.flat().map(val=>val).join('')
           
            if(initialBoard===solvedBoard){
                state.sudokuState.successAlert=true
            }
            else{
                state.sudokuState.solvedStatus=true
                state.sudokuState.count=3
            }
        },
        setCount:(state,action)=>{
            state.sudokuState.count-=1
            if(state.sudokuState.count===0){
            state.sudokuState.solvedStatus=false
            }
        },
        resetSudoku:(state,action)=>{
            state.sudokuState.resetAlert=true
        },
        resetSudokuAlert:(state,action)=>{
            let newSudoku=state.sudokuState.initialBoard.map((rowVal)=>(
                rowVal.map((cell)=>(
                    typeof cell === 'string' ? null: cell
                ))
            ))
            state.sudokuState.initialBoard=newSudoku
            state.sudokuState.resetAlert=false
        },
        closeReserAlert:(state,action)=>{
            state.sudokuState.resetAlert=false
        },
        startNewGame:(state,action)=>{
            state.sudokuState.modalShow=true           
        },
        newGameAlert:(state,action)=>{
            state.sudokuState=action.payload 
        },
        closeNewGameAlert:(state,action)=>{
            state.sudokuState.modalShow=false
        },
        OpenSuccessAlert:(state,action)=>{
           
                state.sudokuState.successAlert=false
        }
    }
})

export default sudokuSlice.reducer;

export const{OpenSuccessAlert,closeReserAlert,resetSudokuAlert,closeNewGameAlert,newGameAlert,startNewGame,getSudokuData,resetSudoku,handleButton,handleCell,handleSolve,setCount}=sudokuSlice.actions