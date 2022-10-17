import { createSlice } from "@reduxjs/toolkit";
//slice ha haman reducer hastand
const initialState=[

]

  export const TodoSlice=createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload)
    },
        deleteTodo:(state,action)=>{
            //state=[...state].filter(item=>item.id!==action.payload.id)
            const index=state.findIndex(item=>item.id===action.payload)
            state.splice(index,1)
    },
        updateTodo:(state,action)=>{
            //state=state.map(todo=>todo.id===action.payload ?action.payload :todo)
            const index=state.findIndex(item=>item.id===action.payload.id)
            state[index]=action.payload

    },
        checkTodo:(state,action)=>{
            //state= state.map(todo=>todo.id === action.payload ?{...todo,favorite:!todo.comp} :todo)
            //const index=state.findIndex(item=>item.id===action.payload)
            //state[index]=favorite=!contact.favorite
           const index=state.findIndex(item=>item.id===action.payload)
           state[index].compeleted=!state[index].compeleted
        },
  }
});
//done done actions ro export mikonim
  export const{addTodo,deleteTodo,updateTodo,checkTodo}=TodoSlice.actions
  export default TodoSlice.reducer