import {ADD_TODO,UPDATE_TODO,DELETE_TODO} from "./content"


export const addTodo=(obj)=>({
      type:ADD_TODO,
      payload:obj
})