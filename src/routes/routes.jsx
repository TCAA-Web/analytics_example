import { Frontpage, Aboutpage, NotFoundpage } from "../pages/index.jsx";
import { Layout } from "../layout/Layout.jsx";

export const routes = [
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
];
