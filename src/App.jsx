import { Layout } from "./layout/Layout.jsx";
import { Frontpage } from "./pages/Frontpage.jsx";
import { Aboutpage } from "./pages/Aboutpage.jsx";
import "./app.css";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  BrowserRouter,
} from "react-router-dom";

export const NotFoundPage = () => {
  return <p>404 not found.......</p>;
};

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Frontpage />} />
          <Route path="/home" element={<Frontpage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
