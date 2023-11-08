import { ADD_TODO,UPDATE_TODO,DELETE_TODO,COMPLETE_TODO } from "./content"

let todos=[]



export const TodoSate=(state=todos,action)=>{
      switch(action.type){
            case ADD_TODO:
                  return [...state,action.payload]
            case DELETE_TODO:
                  return state.filter((item) => item.id !== action.payload)
            case UPDATE_TODO:
                  return state.map((todo)=>{
                        if(todo.id===action.payload.id){
                              return{
                                    ...todo,
                                    item:action.payload.item
                              }
                        }
                        return todo;
                  })
            case COMPLETE_TODO:
                  return state.map((todo)=>{
                        if(todo.id==action.payload){
                          return{
                            ...todo,
                            completed:true,
                          }
                        }
                        return todo
                      })

            default:
                  return state
      }
}