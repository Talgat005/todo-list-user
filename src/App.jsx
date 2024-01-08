import { useState } from "react";
import { UserForm } from "./components/UserForm";
import { UserRender } from "./components/UserRender";

function App() {
  const [todo, setTodo] = useState([]);

  function handleForm(objectForm) {
    setTodo([...todo, objectForm]);
  }
  return (
    <div className="app">
      <UserForm onSubmit={handleForm} />
      <UserRender renderTodo={todo} />
    </div>
  );
}

export default App;
