import { configureStore } from "@reduxjs/toolkit";
import sudokuSlice from "./sudokuSlice";

export const store=configureStore({
    reducer:{
        sudoku:sudokuSlice
    }
})