import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-slate-300 mb-2">
          Full Name
        </label>

        <input
          type="text"
          required
          placeholder="John Doe"
          className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-300 mb-2">
          Email
        </label>

        <input
          type="email"
          required
          placeholder="you@example.com"
          className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-300 mb-2">
          Password
        </label>

        <input
          type="password"
          required
          placeholder="Create a password"
          className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-300 mb-2">
          Confirm Password
        </label>

        <input
          type="password"
          required
          placeholder="Confirm your password"
          className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-400 transition"
      >
        Create Account
      </button>
    </form>
  );
}
