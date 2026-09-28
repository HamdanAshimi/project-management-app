import { useState } from "react";

import NewProject from "../components/projects/NewProject.jsx";
import ProjectsSidebar from "../components/projects/ProjectsSidebar.jsx";
import NoProjectSelected from "../components/projects/NoProjectSelected.jsx";
import SelectedProject from "../components/projects/SelectedProject.jsx";

export default function Dashboard() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // Stores the ID of the currently selected project, undefined means no project is selected yet.
    projects: [], // Array that will store all created projects.
    tasks: [], // Array that will store all created tasks.
  }); // State to manage the list of projects and the currently selected project ID.

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random(); // Generate a random ID for the new task.
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId, // Associate the new task with the currently selected project using the selectedProjectId from the state.
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks], // Add the new task to the beginning of the tasks array in the state.
      }; // Return the updated state with the new task added to the tasks array. The spread operator is used to create a new array that includes the new task followed by all existing tasks in the previous state. This ensures that the state is updated immutably, which is important for React's state management.
    });
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState, // Spread the previous state to maintain all other state properties unchanged.
        tasks: prevState.tasks.filter((task) => task.id !== id), // Create a new array that excludes the task with the specified ID. The filter() method keeps only the tasks whose id is NOT equal to the provided id, effectively removing the task with that ID from the tasks list in the state.
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id, // Update the selected project ID when a project is selected from the sidebar.
      };
    });
  } // Callback to update the selected project ID when a project is selected from the sidebar.

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
        // null indicates that the user is currently creating a new project.
      };
    });
  } // Callback to start adding a new project when the "Add Project" button is clicked.

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined, // Reset to undefined to indicate that no project is selected.
      };
    });
  } // Callback to cancel adding a new project and return to the "No Project Selected" screen.

  function handleAddProject(projectData) {
    const projectId = Math.random(); // Generate a random ID for the new project.
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
        // null indicates that the user is currently creating a new project.
      };
    });
  } /// Callback to add a new project to the projects list and reset the selected project ID.

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId,
          // Create a new array that excludes the currently selected project. The filter() method keeps only the projects whose id is NOT equal,to selectedProjectId, effectively removing the selected project from the projects list.
        ),
      };
    });
  } // Callback to delete the currently selected project from the projects list and reset the selected project ID.

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  ); // Find the currently selected project based on the selectedProjectId.

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
    // Show the "New Project" form when the user clicks "Add Project".
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
    // Show the "No Project Selected" screen when the app first loads.
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      {/* Sidebar containing the project list and add project button */}
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject} // Callback to start adding a new project when the "Add Project" button is clicked.
        projects={projectsState.projects} // Pass the list of projects to the sidebar for display.
        onSelectProject={handleSelectProject} // Callback to select a project when a project is clicked in the sidebar.
        selectedProjectId={projectsState.selectedProjectId} // Pass the currently selected project ID to the sidebar to highlight the selected project.
      />

      {/* Render the appropriate content depending on the app state */}
      {content}
    </main>
  );
}
