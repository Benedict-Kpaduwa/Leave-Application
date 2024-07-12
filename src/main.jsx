import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./components/Login/Login.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";

const router = createBrowserRouter([
  { path: "/", Element: <Login /> },
  { path: "/signup", element: <ForgotPassword /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>
);
