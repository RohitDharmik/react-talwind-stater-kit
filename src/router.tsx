import { createBrowserRouter } from "react-router-dom";
import { Root, Admin } from "./layouts";
import { Home, About, Contact, Gallery, AdminPanel } from "./pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/gallery", element: <Gallery /> },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [{ path: "", element: <AdminPanel /> }],
  },
]);
