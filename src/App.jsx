import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NewProject from "./components/projects/NewProject.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "new-project",
        element: <NewProject />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
