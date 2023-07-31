import "./App.css";
import TodoCont from "./components/todoCont/TodoCont";
import Todos from "./components/todos/Todos";
import "bootstrap/dist/css/bootstrap.min.css"; 

function App() {
  return (
    <div className="App">
      <TodoCont /> 
      <Todos />
    </div>
  );
}

export default App;
