import {createStore} from 'redux'

const addTodo=(text)=>{
    return{
        type:"ADD_TO_DO",
        payload:text
    }
}

const removeTodo=(id)=>{
    return{
        type:"REMOVE_TODO",
        payload:id
    // }
}

const initialState={
    todos:[{id:1,text:"Learn redux"}]
}

function Reducer(state=initialState,action){
    switch(action.type){
        case "ADD_TO_DO":
            const newToDo={
                id: state.todos.length+1,
                text: action.payload
            }
            return {...state, todos: [ ...state.todos, newToDo ]}

        case "REMOVE_TODO":
            return {
                ...state,
                todos: state.todos.filter((todo)=>todo.id !== action.payload)
            }
        default:
            return state;
    }
}

const store = createStore(Reducer);

store.subscribe(()=>console.log(("State:",store.getState())))

store.dispatch(addTodo("Buy milk"));
store.dispatch(addTodo("Read Books"));