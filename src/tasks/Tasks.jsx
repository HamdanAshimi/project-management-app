import { useState } from "react";
import NewTask from "./NewTask.jsx";

export default function Tasks({ tasks, onAdd, onDelete, onEdit }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editedText, setEditedText] = useState("");

  function handleEditClick(task) {
    setEditingTaskId(task.id);
    setEditedText(task.text);
  }

  function handleSaveEdit(id) {
    if (editedText.trim() === "") {
      return;
    }

    onEdit(id, editedText);
    setEditingTaskId(null);
    setEditedText("");
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">Tasks</h2>

      <NewTask onAdd={onAdd} />

      {tasks?.length === 0 && (
        <p className="text-slate-400 my-4">
          This project does not have any task yet
        </p>
      )}

      {tasks?.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-slate-900">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="my-4 flex items-center gap-2 text-slate-300 sm:gap-4"
            >
              {editingTaskId === task.id ? (
                <input
                  value={editedText}
                  onChange={(event) => setEditedText(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      handleSaveEdit(task.id);
                    }
                  }}
                  className="min-w-0 flex-1 rounded border border-slate-700 bg-slate-800 px-2 py-2 text-sm text-white focus:border-blue-500 focus:outline-none sm:text-base"
                />
              ) : (
                <span className="min-w-0 flex-1 wrap-break-word text-sm sm:text-base">
                  {task.text}
                </span>
              )}

              <div className="flex shrink-0 items-center gap-2 sm:gap-4">
                {editingTaskId === task.id ? (
                  <button
                    className="rounded-md bg-green-500 px-2 py-2 text-xs font-medium text-white hover:bg-green-400 sm:px-3 sm:text-sm"
                    onClick={() => handleSaveEdit(task.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="rounded-md bg-blue-500 px-2 py-2 text-xs font-medium text-white hover:bg-blue-400 sm:px-3 sm:text-sm"
                    onClick={() => handleEditClick(task)}
                  >
                    Edit
                  </button>
                )}

                <button
                  className="rounded-md px-2 py-2 text-xs font-medium text-slate-400 hover:bg-slate-800 hover:text-red-400 sm:px-3 sm:text-sm"
                  onClick={() => onDelete(task.id)}
                >
                  Clear
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
