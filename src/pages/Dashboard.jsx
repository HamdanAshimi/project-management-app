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
  } = useOutletContext();
  const selectedProject = projectsState.projects.find(
    (project) => project.id === Number(projectId),
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
      onEditTask={handleEditTask}
      tasks={projectsState.tasks}
    />
  );
}
