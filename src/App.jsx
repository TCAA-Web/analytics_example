import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Frontpage } from "./pages/Frontpage";
import { Layout } from "./layout/Layout";
import { Aboutpage } from "./pages/Aboutpage";

import "./app.css";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Frontpage />} />
        <Route path="/home" element={<Frontpage />} />
        <Route path="/about" element={<Aboutpage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
