import React from "react";
import NewTask from "../Components/NewTask";
import { useState } from "react";
import TodoItem from "../Components/TodoItem";
import Spinner from "../Components/spinner";
import { toast } from "react-toastify";
function Homepage() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  function delay() {
    return new Promise((resolve) => setTimeout(resolve, 300));
  }

  const addTask = async (task) => {
    setLoading(true);
    setTodos((prevTodos) => [...prevTodos, task]);
    await delay();
    setLoading(false);
    toast.success("Succesfully added Task!");
  };

  const deleteTask = async (id) => {
    setLoading(true);
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== id));
    await delay();
    setLoading(false);
    toast.error("Succesfully deletedTask Task!");
  };

  const updateTask = async (task, id) => {
    setLoading(true);
    setTodos((prevTodos) => prevTodos.map((t, i) => (i === id ? task : t)));
    await delay();
    setLoading(false);
    toast.info("Succesfully Updated Task!");
  };

  return (
    <>
      <NewTask addTask={addTask} />
      {loading ? (
        <Spinner />
      ) : (
        todos.length > 0 && (
          <ul className="bg-gray-200 rounded-md shadow-sm p-4">
            {todos.map((todo, i) => (
              <TodoItem
                key={i}
                id={i}
                todo={todo}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            ))}
          </ul>
        )
      )}
    </>
  );
}

export default Homepage;
