import { useState} from "react";
import { useReducer } from "react";

function App() {
   const [count,setCount] = useState(0)
 // useing useReducer hooks
  // useReducer hooks takes two parameter one is function and second one is initialState
  // here Reducer is a function and initialState is initial value of our state
  // useReducer hooks returns a array
   // here useing state we can update our state value
  // here dispatch is a function
 const  [state,dispatch] = useReducer(reducer,initialState)



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
