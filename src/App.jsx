import { useState } from "react";
import Input from "../todo-components/src/components/Input";
import List from "../todo-components/src/components/List";
function App() {
  const [newTodo, setNewTodo] = useState('');
  const[todos, setTodos] =useState([])

  const onSubmit = () =>{
    setTodos((prev)=>[...prev , newTodo])
    setNewTodo('')
  }

  return <>
  <Input value={newTodo} onChange={setNewTodo} onSubmit={onSubmit} />
  <List items={todos}/>
  </>;
}

export default App;
