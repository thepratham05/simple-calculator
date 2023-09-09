import {
  useState,
  useRef
} from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    setResult((result) => result + Number(inputRef.current.value)); 
  }; 
 
  function minus(e) {
    e.preventDefault(); 
    setResult((result) => result - Number(inputRef.current.value));
  };
 
  function times(e) { 
    e.preventDefault(); 
    setResult((result) => result * Number(inputRef.current.value));
  }; 
 
  function divide(e) { 
    e.preventDefault(); 
    setResult((result) => result / Number(inputRef.current.value));
  };
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value=0;
  }; 
 
  function resetResult(e) { 
  	e.preventDefault(); 
    setResult((prevVal) => prevVal*0);
  }; 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simple Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}>{result}</p> 
        <input
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        />
        <div className="button-container">
          <button onClick={plus}>+</button> 
          <button onClick={minus}>-</button> 
          <button onClick={times}>x</button> 
          <button onClick={divide}>÷</button> 
          <button onClick={resetInput}>Reset Input</button>
          <button onClick={resetResult}>Reset Result</button> 
        </div> 
      </form> 
    </div> 
  ); 
} 
 
export default App;