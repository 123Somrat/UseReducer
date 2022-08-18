
import { useReducer } from "react";

function App() {
   
 // useing useReducer hooks
  // useReducer hooks takes two parameter one is function and second one is initialState
  // here Reducer is a function and initialState is initial value of our state
  // useReducer hooks returns a array
   // here useing state we can update our state value
  // here dispatch is a function
 const  [state,dispatch] = useReducer(reducer,0)


 // Creating reducer function

 function reducer(state,action){
    if(action.type==="increment"){
      return state + 1
    }
 }

   const Increment = (num)=>{
       dispatch({type:"increment"})
      }
   
  return (
    <div className="App">
         <h1>Count:{state}</h1> 
         <button onClick={Increment}>Increment</button>
         <button >Decrement</button>
         <button >Reset</button>
    </div>
  );
}

export default App;
