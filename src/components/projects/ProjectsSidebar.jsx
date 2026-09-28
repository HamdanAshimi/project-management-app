import Button from "../../ui/Button";

export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-slate-800 text-white md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-slate-200">
        My Projects
      </h2>

      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>

      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 text-slate-400 hover:text-white hover:bg-slate-800";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-slate-800 text-white";
          } else {
            cssClasses += " text-slate-400";
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
