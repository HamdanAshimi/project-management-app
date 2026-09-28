import { Link } from "react-router-dom";

import SignupForm from "../components/auth/SignupForm.jsx";

export default function Signup() {
  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-slate-900 rounded-xl p-8 shadow-xl my-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Create an account</h1>

          <p className="text-slate-400 mt-2">
            Start managing your projects today
          </p>
        </div>

        <SignupForm />

        <p className="text-center text-slate-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-blue-400 hover:text-blue-300 font-semibold"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
