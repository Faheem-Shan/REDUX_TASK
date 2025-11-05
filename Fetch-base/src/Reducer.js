const initialState = {
    users:[],
    loading:false,
    error:null
}

export default function reducer(state=initialState,action){
    switch(action.type){
        case "fetch-users-loading":
            return {...state,loading:true,error:null}
        case "fetch-users-success":
            return {...state,users:action.payload,loading:false}
        case "fetch-users-error":
            return {...state,loading:false,error:action.payload}  
        default:
            return state          
    }
}