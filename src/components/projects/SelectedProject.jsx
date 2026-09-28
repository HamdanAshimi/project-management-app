import Tasks from "../../tasks/Tasks";

export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-slate-700">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white mb-2">
            {project.title}
          </h1>

          <button
            className="px-4 py-2 text-slate-400 hover:text-red-500"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>

        <p className="mb-4 text-slate-400">{formattedDate}</p>

        <p className="text-slate-300 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>

      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
