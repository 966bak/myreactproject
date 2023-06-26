import {
  faCheckCircle,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="grid grid-cols-2 gap-2 p-4 w-full">
      {todos.map((todo) => {
        return (
          <span
            className={
              todo.completed
                ? "bg-green-500 flex gap-x-1 col-span-1 border border-white p-1 rounded-md max-w-1/2"
                : " bg-transparent flex gap-x-1 col-span-1 border border-white p-1 rounded-md max-w-1/2"
            }
            key={todo.id}
          >
            <input
              type="text"
              value={todo.title}
              className=" h-8 border-r border-white text-white text-xl font-medium bg-transparent outline-none"
              onChange={(event) => {
                event.preventDefault();
              }}
            ></input>
            <div className=" flex gap-x-1">
              <button
                onClick={() => {
                  handleComplete(todo);
                }}
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="hover:text-green-500 hover:-translate-y-0.5 hover:scale-105 transition-all "
                />
              </button>
              <button
                onClick={() => {
                  handleEdit(todo);
                }}
              >
                <FontAwesomeIcon
                  icon={faEdit}
                  className="hover:text-yellow-500 hover:-translate-y-0.5 hover:scale-105 transition-all "
                />
              </button>
              <button
                onClick={() => {
                  handleDelete(todo);
                }}
              >
                <FontAwesomeIcon
                  icon={faTrash}
                  className="hover:text-red-500 hover:-translate-y-0.5 hover:scale-105 transition-all "
                />
              </button>
            </div>
          </span>
        );
      })}
    </div>
  );
};

export default TodoList;
