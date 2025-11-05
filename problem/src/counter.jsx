import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function counter() {
    const dispatch=useDispatch()
    const count=useSelector(state=>state.count)

    const handleAdd=()=>{
        setTimeout(()=>{
            dispatch({type:'INCREMENT'})
        },2000)
    }
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={handleAdd}>Inc</button>
      <button onClick={()=>dispatch({type:'DECREMENT'})}>Dec</button>
    </div>
  )
}

export default counter
