import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import { increment,decrement,addAmount,reset } from "./counterSlice";

function App(){
  const value= useSelector(s=>s.counter.value);
  const dispatch = useDispatch();
  return(
    <div>
      <h1>Counter:{value}</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
      <button onClick={()=> dispatch(addAmount(5))}>+5</button>
      <button onClick={()=> dispatch(reset())}>Reset</button>
    </div>
  )
}

export default App;