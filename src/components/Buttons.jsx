import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { handleButton, handleSolve,setCount } from '../sudokuSlice'


const Buttons = () => {

    const dispatch=useDispatch()
    const {  count} = useSelector((state) => state.sudoku.sudokuState)

   useEffect(()=>{
    if(count>0){
        const timer=setInterval(()=>{
            dispatch(setCount())
        },1000)
    
        return ()=> clearInterval(timer)
    }

   },[count,dispatch])
    


  return (
    <div className='buttonBox'>
      <button onClick={(e)=>{dispatch(handleButton(e))}}>1</button>
      <button onClick={(e)=>{dispatch(handleButton(e))}}>2</button>
      <button onClick={(e)=>{dispatch(handleButton(e))}}>3</button>
      <button onClick={(e)=>{dispatch(handleButton(e))}}>4</button>
      <button onClick={(e)=>{dispatch(handleButton(e))}}>5</button>
      <button onClick={(e)=>{dispatch(handleButton(e))}}>6</button>
      <button onClick={(e)=>{dispatch(handleButton(e))}}>7</button>
      <button onClick={(e)=>{dispatch(handleButton(e))}}>8</button>
      <button onClick={(e)=>{dispatch(handleButton(e))}}>9</button>
      {
      count>0?<button>{count}</button>:
      <button onClick={()=>{dispatch(handleSolve())}}>Solve</button>
      }
    </div>
  )
}

export default Buttons
