import {createSlice} from '@reduxjs/toolkit';

const todoSlice=createSlice({
    name:'todo',
    initialState:[],
    reducers: {
        addTodo:(state,action)=>{
            state.push({id:Date.now(),text:action.payload})
        },
        deleteTodo:(state,action)=>{
            return state.filter(todo=>todo.id !== action.payload)
        },
        editTodo:(state,action)=>{
            const{id,newText}=action.payload;
            const todo=state.find(t=>t.id === id);
            if(todo){
                todo.text=newText
            }
        }
    }
})
export const {addTodo,deleteTodo,editTodo}=todoSlice.actions;
export default todoSlice.reducer;