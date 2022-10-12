import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todolist: []
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers:{
        saveTodo: (state, action) => {
            state.todolist.push(action.payload)
        },
        checkTodo: (state, action) => {
            state.todolist.map(todo =>{
                if(action.payload === todo.id){
                    if(todo.done === true){
                        todo.done = false
                    }
                    else{
                        todo.done = true
                    }
                }
            })
        },
        deleteTodo:(state, action) => {
            state.todolist.splice(action.payload, 1)
        }
    }
})

export const { saveTodo, checkTodo, deleteTodo } = todoSlice.actions
export const selectTodoList = state => state.todos.todolist
export default todoSlice.reducer