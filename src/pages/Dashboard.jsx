import { useOutletContext, useNavigate } from "react-router-dom";

import NoProjectSelected from "../components/projects/NoProjectSelected.jsx";
import SelectedProject from "../components/projects/SelectedProject.jsx";

export default function Dashboard() {
  const navigate = useNavigate();

  const {
    projectsState,
    handleAddTask,
    handleDeleteTask,
    handleDeleteProject,
  } = useOutletContext();

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  );

  if (!selectedProject) {
    return (
      <NoProjectSelected
        onStartAddProject={() => navigate("/dashboard/new-project")}
      />
    );
  }

  return (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );
}
