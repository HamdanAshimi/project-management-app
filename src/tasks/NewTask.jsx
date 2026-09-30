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
        <h2 className="mt-4 mb-4 text-xl font-bold text-white">
          Invalid Input
        </h2>

        <p className="mb-4 text-slate-300">
          It looks like you didn't enter a task.
        </p>

        <p className="mb-4 text-slate-300">
          Please enter a valid task before adding it.
        </p>
      </Modal>

      <div className="flex w-full items-center gap-2 sm:gap-4">
        <input
          type="text"
          placeholder="Enter a task..."
          className="min-w-0 flex-1 rounded-sm border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none sm:text-base"
          onChange={handleChange}
          value={enteredTask}
          onKeyDown={handleKeyDown}
        />

        <button
          className="shrink-0 rounded-md bg-blue-500 px-3 py-2 text-sm font-medium text-white hover:bg-blue-400 sm:px-4 sm:text-base"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
    </>
  );
}
