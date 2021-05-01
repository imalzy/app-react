// eslint-disable-next-line
import React, { Fragment, useState } from "react";
import "./App.css";

type formElem = React.FormEvent<HTMLFormElement>;
interface ITodo {
  id: number;
  name: string;
  status: boolean;
}

function App(): JSX.Element {
  // const sum = (a: number, b: number) => {
  //   return a + b;
  // };
  const [count, setCount] = useState(0);
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (e: formElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  const addTodo = (name: string): void => {
    setCount(count + 1);
    const newTodo: ITodo[] = [...todos, { id: count, name, status: false }];
    setTodos(newTodo);
  };

  const statusTodo = (index: number): void => {
    const updateTodo: ITodo[] = [...todos];
    updateTodo[index].status = !updateTodo[index].status;
    setTodos(updateTodo);
  };

  const removeTodo = (index:number):void=>{
    const removeTodo:ITodo[] = [...todos];
    removeTodo.splice(index, 1);
    setTodos(removeTodo);
  }

  console.log(todos);
  return (
    <Fragment>
      <h1>TODO LIST</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      <section>
        <ol>
          {todos && todos.length > 0
            ? todos.map((value: ITodo, index: number) => (
                <Fragment key={index.toString()}>
                  <li>
                    <span style={{textDecoration: value.status ? 'line-through': ''}}>{value.name}</span>
                    <button type="button" onClick={() => statusTodo(index)} style={{marginLeft:10}}>
                      {value.status ? "Complete" : "Incomplete"}
                    </button>

                    <button type="button" onClick={() => removeTodo(index)} style={{marginLeft:10}}>
                      Remove
                    </button>
                  </li>
                </Fragment>
              ))
            : ""}
        </ol>
      </section>
    </Fragment>
  );
}

export default App;
