import { useNavigate, useOutletContext, useParams } from "react-router-dom";

import NoProjectSelected from "../components/projects/NoProjectSelected.jsx";
import SelectedProject from "../components/projects/SelectedProject.jsx";

export default function Dashboard() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const {
    projectsState,
    handleAddTask,
    handleDeleteTask,
    handleDeleteProject,
    handleEditTask,
    handleEditProject,
  } = useOutletContext();

  const selectedProject = projectsState.projects.find(
    (project) => project.id === Number(projectId),
  );

  if (!selectedProject) {
    return (
      <div className="w-full min-w-0">
        <NoProjectSelected
          onStartAddProject={() => navigate("/dashboard/new-project")}
        />
      </div>
    );
  }

  return (
    <div className="w-full min-w-0">
      <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
        onEditProject={handleEditProject}
        tasks={projectsState.tasks}
      />
    </div>
  );
}
