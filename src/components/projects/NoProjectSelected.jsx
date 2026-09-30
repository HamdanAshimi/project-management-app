import noProjectImg from "../../assets/no-projects.png";
import Button from "../../ui/Button";

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="w-full max-w-2xl px-4 mt-16 text-center sm:px-6 md:mt-24 md:px-0">
      <img
        src={noProjectImg}
        alt="An empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />

      <h2 className="mt-4 mb-4 text-xl font-bold text-white">
        No project selected
      </h2>

      <p className="mb-4 text-slate-400">
        Select a project or get started with a new one
      </p>

      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create a new project</Button>
      </p>
    </div>
  );
}
