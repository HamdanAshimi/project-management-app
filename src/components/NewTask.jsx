import { useState, useRef } from "react";

import Modal from "./Modal";

export default function NewTask({ onAdd }) {
  const modal = useRef();

  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  } // Callback to update the entered task state when the input value changes.

  function handleClick() {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }

    onAdd(enteredTask);
    setEnteredTask("");
  } // Callback to handle the click event of the "Add Task" button. It checks if the entered task is empty and opens a modal if it is. If the input is valid, it calls the onAdd callback with the entered task and resets the input field.

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleClick();
    }
  } // Callback to handle the keydown event on the input field. It checks if the Enter key is pressed and calls the handleClick function to add the task when Enter is pressed.

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 mt-4 my-4">
          Invalid Input
        </h2>
        <p className="text-stone-600 mb-4">
          It looks like you didn't enter a task.
        </p>
        <p className="text-stone-600 mb-4">
          Please enter a valid task before adding it.
        </p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
          onChange={handleChange} // Callback to handle changes in the input field and update the entered task state.
          value={enteredTask}
          onKeyDown={handleKeyDown}
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
    </>
  );
}
