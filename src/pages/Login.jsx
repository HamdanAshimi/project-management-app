import { Link } from "react-router-dom";

import LoginForm from "../components/auth/LoginForm.jsx";

export default function Login() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900 rounded-xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome back</h1>

          <p className="text-slate-400 mt-2">
            Login to your project management account
          </p>
        </div>

        <LoginForm />

        <p className="text-center text-slate-400 mt-6">
          Don't have an account?
          <Link
            to="/signup"
            className="text-blue-400 hover:text-blue-300 font-semibold"
          >
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
