import { createHashRouter, RouterProvider } from "react-router-dom";
import "./app.css";
import { Layout } from "./layout/Layout";
import { Frontpage, Aboutpage, NotFoundpage } from "./pages/index";
//import { routes } from "./routes/routes.jsx";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Frontpage /> },
        { path: "/home", element: <Frontpage /> },
        { path: "/about", element: <Aboutpage /> },
        { path: "/*", element: <NotFoundpage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
