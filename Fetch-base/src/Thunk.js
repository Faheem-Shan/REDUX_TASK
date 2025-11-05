export const fetchuser=()=>{
    return async(dispatch)=>{
        dispatch({type:"fetch-users-loading"})

        try{
            const res=await fetch("https://jsonplaceholder.typicode.com/users")
            const data=await res.json()
            dispatch({type:"fetch-users-success",payload:data})
        }
        catch(error){
            dispatch({type:"fetch-users-error",payload:error.message})
        }
    }
}