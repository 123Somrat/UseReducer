
import { useReducer } from "react";

function App() {
   
 // useing useReducer hooks
  // useReducer hooks takes two parameter one is function and second one is initialState
  // here Reducer is a function and initialState is initial value of our state
  // useReducer hooks returns a array
   // here useing state we can update our state value
  // here dispatch is a function
 const  [state,dispatch] = useReducer(reducer,0)
   
     const INCREMENT = "INCREMENT";
     const  DECREMENT = "DECREMENT";
     const  RESET = "RESET";

      
 // Creating reducer function
 function reducer(state,action){
  const {type} = action
    switch(type){
      case INCREMENT:
        return state + 1;
      case DECREMENT :
        return state -1 ;
      case RESET :
        return 0 ;
      default :
        return state
    }

 }
// Declare the action type as a variable



   const Increment = (num)=>{
       dispatch({ type: INCREMENT});
      }
   
   const Decrement = ()=>{
    dispatch({type:DECREMENT});
   }
   const Reset = ()=>{
    dispatch({type:RESET});
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
