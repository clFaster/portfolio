import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./pages/Homepage.tsx";
import About from "./pages/About.tsx";
import Projects from "./pages/Projects.tsx";
import NotFound from "./pages/NotFound.tsx";
import {MainLayout} from "./MainLayout.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Homepage/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/projects",
                element: <Projects/>,
            },
            {
                path: "*",
                element: <NotFound/>,
            },
        ],
    },
]);

export const App = () => {
    return (
        <ThemeProvider>
            <RouterProvider router={router}/>
        </ThemeProvider>
    );
};