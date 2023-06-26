import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  return (
    <div className=" h-screen bg-gradient-to-bl  from-purple-600 bg-sky-400 flex flex-col gap-y-2 justify-center items-center ">
      <h1 className="text-white  font-bold text-2xl capitalize">Todo Project</h1>
      <div className="h-3/4 w-2/4 mx-auto text-center bg-sky-100 bg-opacity-20 shrink-0 shadow-md drop-shadow-lg ">
        <div className="h-1/6">
          <TodoForm
            input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>
        <div className=" h-5/6 overflow-y-scroll no-scrollbar">
          <TodoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
};
export default Todo;
