import Login from "../components/Login/Login";
import SignUp from "../components/Login/Signup";

export const AppRoutes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
];
