import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Impressum from "./pages/Impressum.tsx";
import Datenschutz from "./pages/Datenschutz.tsx";
import NotFound from "./pages/NotFound.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import { MainLayout } from "./MainLayout.tsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage standalone />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/",
            element: <Homepage />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/projects",
            element: <Projects />,
          },
          {
            path: "/impressum",
            element: <Impressum />,
          },
          {
            path: "/datenschutz",
            element: <Datenschutz />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
    ],
  },
]);

export const App = () => {
  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
};
