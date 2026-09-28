import { useRef } from "react";

import Input from "../../ui/Input.jsx";
import Modal from "../../ui/Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // Validation ....
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-white mt-4 my-4">
          Invalid Input
        </h2>
        <p className="text-slate-300 mb-4">
          Oops ... looks like you forgot to enter a value.
        </p>
        <p className="text-slate-300 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>

      <div className="w-140 mt-16">
        <menu className="flex items-center justify-end gap-4 my-4 list-none">
          <li>
            <button
              className="px-4 py-2 text-slate-400 hover:text-white"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>

          <li>
            <button
              className="px-6 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-400"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input type="text" ref={title} label="Title" />
          <Input type="text" ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}
