import { useRef } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import Input from "../../ui/Input.jsx";
import Modal from "../../ui/Modal.jsx";

export default function NewProject() {
  const navigate = useNavigate();
  const { handleAddProject } = useOutletContext();

  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    handleAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  function handleCancel() {
    navigate("/dashboard");
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="mt-4 mb-4 text-xl font-bold text-white">
          Invalid Input
        </h2>

        <p className="mb-4 text-slate-300">
          Oops ... looks like you forgot to enter a value.
        </p>

        <p className="mb-4 text-slate-300">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>

      <div className="w-full max-w-2xl px-4 mt-8 sm:px-6 md:px-0 md:mt-16">
        <menu className="flex items-center justify-end gap-2 sm:gap-4 my-4 list-none">
          <li>
            <button
              className="px-3 py-2 text-sm text-slate-400 hover:text-white sm:px-4 sm:text-base"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </li>

          <li>
            <button
              className="px-5 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-400 sm:px-6 sm:text-base"
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
