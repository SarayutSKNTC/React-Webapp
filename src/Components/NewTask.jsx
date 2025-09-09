import React from "react";
import { useRef,useState } from "react";

function NewTask({ addTask }) {
  // const [title, setTitle] = useState("");
  const title = useRef() //ประกาศตัวแปร title ให้เป็น ref เพื่อเก็บค่า input field
  const form = useRef() //ประกาศตัวแปร form ให้เป็น ref เพื่อเก็บค่า form element
  const submitForm = (e) => {
    e.preventDefault();

    console.log(title.current.value);
    
    const task = {
      title: title.current.value,
      date: new Date().toLocaleString(),
    };
    addTask(task);
    
    // setTitle("");  
    // const task = {
    //   title,
    //   date: new Date().toLocaleString(),
    // };
    // addTask(task);
    form.current.reset();
  };
  return (
    <>
      <form ref={form } onSubmit={submitForm}>
        <label htmlFor="title" className="text-lg text-gray">
          Add new NewTask
        </label>
        <div className="flex gap-x-2 bg-white rounded-md shadow-sm p-2 pl-3 mt-2">
          <input
            id="title"
            type="text"
            className="focus:outline-none w-full"
            maxLength="30"
            placeholder="Type Something here..."
            autoFocus
            required
            ref={title}
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
          />

          <button
            type="submit"
            className="w-40 px-3 py-2 rounded font-semibold bg-blue-500 text-white hower:bg-blue-700"
          >
            New Task
          </button>
        </div>
      </form>
    </>
  );
}

export default NewTask;
