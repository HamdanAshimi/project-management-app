import NewTask from "./NewTask.jsx";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-white mb-4">Tasks</h2>

      <NewTask onAdd={onAdd} />

      {tasks.length === 0 && (
        <p className="text-slate-400 my-4">
          This project does not have any task yet
        </p>
      )}

      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-slate-900">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between my-4 text-slate-300"
            >
              <span>{task.text}</span>

              <button
                className="text-slate-400 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
