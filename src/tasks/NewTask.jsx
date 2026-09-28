import { useState, useRef } from "react";

import Modal from "../ui/Modal.jsx";

export default function NewTask({ onAdd }) {
  const modal = useRef();

  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }

    onAdd(enteredTask);
    setEnteredTask("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-white mt-4 my-4">
          Invalid Input
        </h2>
        <p className="text-slate-300 mb-4">
          It looks like you didn't enter a task.
        </p>
        <p className="text-slate-300 mb-4">
          Please enter a valid task before adding it.
        </p>
      </Modal>

      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-slate-800 text-white border border-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-500"
          onChange={handleChange}
          value={enteredTask}
          onKeyDown={handleKeyDown}
        />

        <button
          className="text-slate-400 hover:text-blue-400"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
    </>
  );
}
