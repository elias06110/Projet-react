import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import Home from "./pages/home";
import About from "./pages/about";
import Error from "./pages/404";
import Logement from "./pages/logement";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path:"/about",
    element:<About></About>,
  },
  {
    path:"*",
    element:<Error></Error>
  },
  {
    path:"/logement/:id", errorElement:<Error></Error>,
    element:<Logement></Logement>
  }
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
