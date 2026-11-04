import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
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
            lazy: async () => ({
              Component: (await import("./pages/About.tsx")).default,
            }),
          },
          {
            path: "/projects",
            lazy: async () => ({
              Component: (await import("./pages/Projects.tsx")).default,
            }),
          },
          {
            path: "/impressum",
            lazy: async () => ({
              Component: (await import("./pages/Impressum.tsx")).default,
            }),
          },
          {
            path: "/datenschutz",
            lazy: async () => ({
              Component: (await import("./pages/Datenschutz.tsx")).default,
            }),
          },
          {
            path: "*",
            lazy: async () => ({
              Component: (await import("./pages/NotFound.tsx")).default,
            }),
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
