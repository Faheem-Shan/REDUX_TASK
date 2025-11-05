import { useEffect } from "react";
import{useDispatch,useSelector} from  "react-redux";
import { fetchuser } from "./Thunk";

export default function Fetch(){
    const{users,loading,error}=useSelector((state)=>state)
    const dispatch =useDispatch()

    useEffect(()=>{
        dispatch(fetchuser());
    },[dispatch])

    return(
        <div>
            {loading && <p>Loading</p>}
            {error && <p>error:{error}</p>}
            {users.length > 0 && 
            <ul>
                <h1>user list</h1>
                {users.map((user)=>(<li key={user.id}>{user.name}</li>))}
                
            </ul>}
        </div>
    )
}