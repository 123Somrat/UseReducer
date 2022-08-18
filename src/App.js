import { useState } from "react";

function App() {
   const [count,setCount] = useState(0)

   const Increment = (num)=>{
       setCount((prev)=>prev+num)
      }
   const Decrement = (num)=>{
    setCount((prev)=>prev-num)
     }

   const Reset = ()=>{
         setCount(0)
    }
  return (
    <div className="App">
         <h1>Count:{count}</h1> 
         <button onClick={()=>Increment(15)}>Increment</button>
         <button onClick={()=>Decrement(10)}>Decrement</button>
         <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default App;
