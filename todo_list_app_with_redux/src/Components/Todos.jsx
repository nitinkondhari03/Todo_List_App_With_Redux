import {useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo} from "../Redux/action";
import {GoPlus} from "react-icons/go"
const Todos = () => {
  const [todo, setTodo] = useState("");
  const dispatch=useDispatch()
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
const add=()=>{
      dispatch(addTodo({
    id:Math.floor(Math.random()*1000),
    item:todo,
    completed:false,
  }))
  setTodo("");
}
  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />
      <button className="add-btn" onClick={()=>add()}><GoPlus/></button>
      <br />
    </div>
  );
};
export default Todos
