
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
  const {type} = action;
    switch(type){
      case "increment"  :
        return state + 1;
      case "decrement" :
        return state -1 ;
      case "reset" :
        return 0 ;
      default :
        return state
    }

 }

   const Increment = (num)=>{
       dispatch({type:"increment"})
      }
   
   const Decrement = ()=>{
    dispatch({type:"decrement"})
   }
   const Reset = ()=>{
    dispatch({type:"reset"})
   }


  return (
    <div className="App">
         <h1>Count:{state}</h1> 
         <button onClick={Increment}>Increment</button>
         <button onClick={Decrement}>Decrement</button>
         <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default App;
