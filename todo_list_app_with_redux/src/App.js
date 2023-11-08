import './App.css';
import Todos from './Components/Todos';
import DisplayTodo from "./Components/DisplayTodos"
function App() {

  return (
    <div className="App">
      <h1>Todos</h1>
     <Todos/>
     <DisplayTodo/>
    </div>
  );
}

export default App;
