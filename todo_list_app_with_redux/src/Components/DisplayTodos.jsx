import { useState } from "react";
import TodoItem from "./TodoItem"
import { useSelector } from "react-redux";
const DisplayTodo=()=>{
      const [sort,setsort]=useState("active")
     const todos=useSelector((store)=>store.todos)
      return(
            <div className="displaytodos">
                  <div className='buttons'>
                        <button onClick={()=>setsort("active")} className="buttons">
                              Active
                        </button>
                        <button onClick={()=>setsort("completed")} className="buttons">
                              Comleted
                        </button>
                        <button onClick={()=>setsort("all")} className="buttons">
                              All
                        </button>
{
      <ul>
            {
               todos.length>0 && sort === "active"?
               todos.map(item=>{
                  return(
                        item.completed==false &&
                        <TodoItem
                        key={item.id}
                        item={item}
                        />
                  )
               }):null
            }
       {/* for completed */}
       {
               todos.length>0 && sort === "completed"?
               todos.map(item=>{
                  return(
                        item.completed==true &&
                        <TodoItem
                        key={item.id}
                        item={item}
                        />
                  )
               }):null
            }
            {
               todos.length>0 && sort === "all"?
               todos.map(item=>{
                  return(
                        <TodoItem
                        
                        key={item.id}
                        item={item}
                        />
                  )
               }):null
            }

      </ul>
}
                  </div>
            </div>
      )
}

export default DisplayTodo