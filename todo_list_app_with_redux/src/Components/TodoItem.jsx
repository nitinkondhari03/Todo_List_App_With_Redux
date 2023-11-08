import { useRef } from "react"
import { useDispatch } from "react-redux"
import { removeTodos,updateTodos,completeTodos} from "../Redux/action"

const TodoItem=(props)=>{
  const dispatch=useDispatch()
const {item}=props
const inputRef=useRef(true)
const changeFocus=()=>{
      inputRef.current.disabled=false;
      inputRef.current.focus()
    }
  
    const update=(id,value,e)=>{
      if(e.which==13){
    dispatch(updateTodos({id,item:value}));
      inputRef.current.disabled=true
      }
    }
      return(
            <>
            <li key={item.id} className="card">
              <textarea ref={inputRef} disabled={inputRef} defaultValue={item.item}
              onKeyDown={(e)=>update(item.id,inputRef.current.value,e)}
              />
             <div className="btns">
             <button onClick={()=>changeFocus()}>Edit</button>
              {item.completed==false && [
                <button style={{color:"green"}} onClick={()=>dispatch(completeTodos(item.id))}>completed</button>
              ]}
              <button style={{color:"red"}} onClick={()=>dispatch(removeTodos(item.id))}>delete</button>
             </div>
             {item.completed && <span className="completed">done</span>}
            </li>
            </>
      )
}

export default TodoItem