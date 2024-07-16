import Dashboard from "../pages/private/Dashboard/Dashboard";
import Login from "../pages/public/Login/Login";
import Signup from "../pages/public/Signup/Signup";

export const AppRoutes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  { path: "/admin", element: <Dashboard /> },
];
