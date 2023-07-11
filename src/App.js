import './App.css'
import Sudoku from "./components/Sudoku";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import StartGame from "./components/StartGame";



function App() {
  
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<StartGame />} />
        <Route path="/sudoku" element={<Sudoku />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
    </div>
  );
}

export default App;
