import {useState} from 'react'
import Input from "./components/Input";
import List from "./components/List";
import "./App.css";
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Input value={count} onChange={setCount} onSubmit={console.log}/>
      <List items={["Learn React", "Learn Vite", "Make an awesome app"]} />
    </>
  );
}

export default App;
