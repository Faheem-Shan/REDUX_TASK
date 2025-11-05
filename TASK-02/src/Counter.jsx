import {useSelector,useDispatch} from "react-redux";
function Counter(){
    const count=useSelector((state)=>state.counter.count);
    const dispatch=useDispatch();

    return(
        <>
        <h2>Count:{count}</h2>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
        </>
    )
}
export default Counter;