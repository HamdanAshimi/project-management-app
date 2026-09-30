import { useNavigate } from "react-router-dom";

import Button from "../../ui/Button";

export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  const navigate = useNavigate();

  function handleSelectProject(id) {
    onSelectProject(id);
    navigate(`/dashboard/projects/${id}`);
  }

  return (
    <aside className="w-40 rounded-r-xl bg-slate-800 px-5 py-6 text-white md:w-72 md:min-h-screen md:px-8 md:py-16">
      <div className="flex flex-row items-center justify-between mb-6 md:mb-8">
        <h2 className="font-bold uppercase text-sm md:text-xl text-slate-200">
          My Projects
        </h2>

        <button
          onClick={() => navigate(-1)}
          className="px-1 py-1 text-xs text-slate-400 hover:text-white md:px-2 md:text-sm"
        >
          ← Back
        </button>
      </div>

      <div className="text-sm md:text-base">
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>

      <ul className="mt-6 md:mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-2 rounded-sm my-1 text-slate-400 hover:text-white hover:bg-slate-700";

          if (project.id === selectedProjectId) {
            cssClasses += " bg-slate-700 text-white";
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => handleSelectProject(project.id)}
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
