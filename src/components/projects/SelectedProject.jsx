import { useState } from "react";

import Tasks from "../../tasks/Tasks";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  onEditTask,
  onEditProject,
  tasks,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(project.title);
  const [editedDescription, setEditedDescription] = useState(
    project.description,
  );

  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-140 mt-16">
      <header className="pb-4 mb-4 border-b-2 border-slate-700">
        <div className="flex items-center justify-between">
          {isEditing ? (
            <input
              value={editedTitle}
              onChange={(event) => setEditedTitle(event.target.value)}
              className="text-3xl font-bold bg-slate-800 text-white px-2 py-1 rounded"
            />
          ) : (
            <h1 className="text-3xl font-bold text-white mb-2">
              {project.title}
            </h1>
          )}

          <div className="flex items-center gap-2">
            {isEditing ? (
              <button
                className="px-4 py-2 text-green-400 hover:text-green-300"
                onClick={() => {
                  onEditProject(project.id, editedTitle, editedDescription);
                  setIsEditing(false);
                }}
              >
                Save
              </button>
            ) : (
              <button
                className="px-4 py-2 text-blue-400 hover:text-blue-300"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
            )}

            <button
              className="px-4 py-2 text-slate-400 hover:text-red-500"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        </div>

        <p className="mb-4 text-slate-400">{formattedDate}</p>

        {isEditing ? (
          <textarea
            value={editedDescription}
            onChange={(event) => setEditedDescription(event.target.value)}
            className="w-full bg-slate-800 text-white p-2 rounded"
            rows="4"
          />
        ) : (
          <p className="text-slate-300 whitespace-pre-wrap">
            {project.description}
          </p>
        )}
      </header>

      <Tasks
        onAdd={onAddTask}
        onDelete={onDeleteTask}
        onEdit={onEditTask}
        onEditProject={onEditProject}
        tasks={tasks}
      />
    </div>
  );
}
