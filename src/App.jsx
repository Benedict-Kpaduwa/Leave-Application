import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { AppRoutes } from "./routes/root";

function App() {
  const route = createBrowserRouter(AppRoutes);
  return (
    <div className="app">
      <RouterProvider router={route} />
      {/* <Login /> */}
      {/* <signup/> */}
    </div>
  );
}

export default App;
