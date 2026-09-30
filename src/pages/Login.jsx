import { Link } from "react-router-dom";

import LoginForm from "../components/auth/LoginForm.jsx";

export default function Login() {
  return (
    <main className="flex items-center justify-center min-h-screen px-4 py-6 bg-slate-950 sm:py-8">
      <div className="w-full max-w-md p-5 bg-slate-900 rounded-xl shadow-xl sm:p-8">
        <div className="mb-6 text-center sm:mb-8">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            Login to your project management account
          </p>
        </div>

        <LoginForm />

        <p className="mt-6 text-sm text-center text-slate-400 sm:text-base">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-blue-400 hover:text-blue-300"
          >
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
