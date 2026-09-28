import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import ProjectsSidebar from "../components/projects/ProjectsSidebar.jsx";

export default function DashboardLayout() {
  const navigate = useNavigate();

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddProject(projectData) {
    const projectId = Math.random();

    const newProject = {
      ...projectData,
      id: projectId,
    };

    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: projectId,
      projects: [...prevState.projects, newProject],
    }));

    navigate("/dashboard");
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: id,
    }));

    navigate("/dashboard");
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProjectId,
      ),
    }));
  }

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random();

      const newTask = {
        text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={() => navigate("/dashboard/new-project")}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />

      <Outlet
        context={{
          projectsState,
          handleAddProject,
          handleSelectProject,
          handleDeleteProject,
          handleAddTask,
          handleDeleteTask,
        }}
      />
    </main>
  );
}
