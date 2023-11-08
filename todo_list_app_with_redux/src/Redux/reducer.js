import { ADD_TODO,UPDATE_TODO,DELETE_TODO } from "./content"

let initialState={
      todos:[]
}



export const TodoSate=(state=initialState,action)=>{
      switch(action.type){
            case "ADD_TODO":
                  return{
                        ...state,
                        todos:[...state.todos,action.payload],
                    }
            default:
                  return state
      }
}