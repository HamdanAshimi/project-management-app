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
              className="flex justify-between items-center my-4 text-slate-300"
            >
              {editingTaskId === task.id ? (
                <input
                  value={editedText}
                  onChange={(event) => setEditedText(event.target.value)}
                  className="bg-slate-800 text-white px-2 py-1 rounded"
                />
              ) : (
                <span>{task.text}</span>
              )}

              <div className="flex gap-4">
                {editingTaskId === task.id ? (
                  <button
                    className="text-green-400 hover:text-green-300"
                    onClick={() => handleSaveEdit(task.id)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="text-blue-400 hover:text-blue-300"
                    onClick={() => handleEditClick(task)}
                  >
                    Edit
                  </button>
                )}

                <button
                  className="text-slate-400 hover:text-red-500"
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
