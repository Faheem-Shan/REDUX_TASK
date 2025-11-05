const initialState={name:"Faheem"};
function userReducer(state=initialState,action){
    switch(action.type){
        case "CHANGE NAME":
            return{...state,name:action.payload}

        default:
            return state;
    }
}
export default userReducer;