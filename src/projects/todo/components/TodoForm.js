import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const TodoForm = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) => {
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) => {
      return todo.id === id ? { title, id, completed } : todo;
    });
    setTodos(newTodo);
    setEditTodo("");
  };
  return (
    <>
      <form
        onSubmit={onFormSubmit}
        className="flex p-4 gap-x-4 justify-center "
      >
        <input
          value={input}
          onChange={onInputChange}
          type="text"
          placeholder="Enert text Here..."
          className=" p-2 bg-black bg-opacity-10 border drop-shadow-md border-white rounded-md text-white outline-none placeholder:text-slate-300 shadow-inner"
          required
        />
        <button
          className="bg-gradient-to-tr md:w-32 rounded-md text-white uppercase font-semibold hover:shadow-none shrink-0 shadow-md from-purple-500 bg-blue-400"
          type="submit"
        >
          {editTodo ? "Ok" : "Add"}
        </button>
      </form>
      <hr />
    </>
  );
};

export default TodoForm;
