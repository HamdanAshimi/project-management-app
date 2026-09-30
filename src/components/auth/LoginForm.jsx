import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block mb-2 text-sm font-semibold text-slate-300">
          Email
        </label>

        <input
          type="email"
          required
          placeholder="you@example.com"
          className="w-full px-3 py-3 text-sm text-white placeholder-slate-500 bg-slate-800 border rounded-lg border-slate-700 focus:outline-none focus:border-blue-500 sm:px-4 sm:text-base"
        />
      </div>

      <div>
        <label className="block mb-2 text-sm font-semibold text-slate-300">
          Password
        </label>

        <input
          type="password"
          required
          placeholder="Enter your password"
          className="w-full px-3 py-3 text-sm text-white placeholder-slate-500 bg-slate-800 border rounded-lg border-slate-700 focus:outline-none focus:border-blue-500 sm:px-4 sm:text-base"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 text-sm font-semibold text-white transition rounded-lg bg-blue-500 hover:bg-blue-400 sm:text-base"
      >
        Login
      </button>
    </form>
  );
}
