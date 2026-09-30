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
    <div className="w-full max-w-2xl mt-8 md:mt-16">
      <header className="pb-4 mb-4 border-b-2 border-slate-700">
        <div className="flex flex-wrap items-center justify-between gap-3">
          {isEditing ? (
            <input
              value={editedTitle}
              onChange={(event) => setEditedTitle(event.target.value)}
              className="min-w-0 flex-1 px-2 py-1 text-2xl font-bold text-white rounded bg-slate-800 sm:text-3xl"
            />
          ) : (
            <h1 className="min-w-0 flex-1 mb-2 text-2xl font-bold text-white break-words sm:text-3xl">
              {project.title}
            </h1>
          )}

          <div className="flex items-center gap-1 sm:gap-2">
            {isEditing ? (
              <button
                className="px-2 py-2 text-sm text-green-400 hover:text-green-300 sm:px-4 sm:text-base"
                onClick={() => {
                  onEditProject(project.id, editedTitle, editedDescription);
                  setIsEditing(false);
                }}
              >
                Save
              </button>
            ) : (
              <button
                className="px-2 py-2 text-sm text-blue-400 hover:text-blue-300 sm:px-4 sm:text-base"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
            )}

            <button
              className="px-2 py-2 text-sm text-slate-400 hover:text-red-500 sm:px-4 sm:text-base"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        </div>

        <p className="mb-4 text-sm text-slate-400 sm:text-base">
          {formattedDate}
        </p>

        {isEditing ? (
          <textarea
            value={editedDescription}
            onChange={(event) => setEditedDescription(event.target.value)}
            className="w-full p-2 text-sm text-white rounded bg-slate-800 sm:text-base"
            rows="4"
          />
        ) : (
          <p className="text-sm text-slate-300 whitespace-pre-wrap sm:text-base">
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
