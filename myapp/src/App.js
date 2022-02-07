import {useState} from 'react';


function App() {
  const [calc,setCalc]=useState("")
  const [result,setResult]=useState("")
  const ops =['/','+','*','-','.']

  const updateCalc = value =>{
    if(
    ops.includes(value)&& calc ===' ' || 
    ops.includes(calc.slice(-1)) && ops.includes(value))
    
  {
    return ;
  }
  console.log(value);
    setCalc(calc+value)
  
  if(!ops.includes(value)){
    setResult(eval(calc+value).toString())
  }
}
  const createDigits = ()=>{
    const digits =[];
    for(let i=1;i<10;i++){
      digits.push(
        <button onClick={()=>updateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    return digits
  }
  const caclulate = ()=>{
      setCalc(eval(calc).toString())
  }
  const delateCal = ()=>{
      if(calc==' '){
        return;
      }
 
      const value = calc.slice(0,-1)
      setCalc(value)
  }
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {calc || "0"}
        </div>
        <div className="operators">
          <button onClick={()=>updateCalc("*")}>*</button>
          <button onClick={()=>updateCalc("/")}>/</button>
          <button onClick={()=>updateCalc("+")}>+</button>
          <button onClick={()=>updateCalc("-")}>-</button>
          <button onClick={delateCal}>del</button>
        </div>
        <div className="digits">
          {createDigits()}
        <button onClick={()=>updateCalc("0")}>0</button>
        <button onClick={()=>updateCalc(".")}>.</button>
        <button onClick={caclulate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
