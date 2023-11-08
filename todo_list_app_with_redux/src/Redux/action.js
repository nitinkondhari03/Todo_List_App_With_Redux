import {ADD_TODO,UPDATE_TODO,DELETE_TODO,COMPLETE_TODO} from "./content"


export const addTodo=(obj)=>({
      type:ADD_TODO,
      payload:obj
})

export const removeTodos=(id)=>({
      type:DELETE_TODO,
      payload:id
})

export const updateTodos=({id,item})=>({
      type:UPDATE_TODO,
      payload:{id,item}
})
export const completeTodos=(id)=>({
      type:COMPLETE_TODO,
      payload:id
})

