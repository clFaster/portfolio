import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import Impressum from "./pages/Impressum.tsx";
import Datenschutz from "./pages/Datenschutz.tsx";
import NotFound from "./pages/NotFound.tsx";
import { MainLayout } from "./MainLayout.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { AnimationProvider } from "./context/AnimationContext.tsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
]);

export const App = () => {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <AnimationProvider>
          <RouterProvider router={router} />
        </AnimationProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
};
