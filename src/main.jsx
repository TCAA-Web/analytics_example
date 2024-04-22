import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Layout } from "./layout/Layout.jsx";
import { Frontpage } from "./pages/Frontpage.jsx";
import { Aboutpage } from "./pages/Aboutpage.jsx";
import "./app.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Frontpage />,
      },
      {
        path: "/about",
        element: <Aboutpage />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
