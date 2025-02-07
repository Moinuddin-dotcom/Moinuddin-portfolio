import { createBrowserRouter } from "react-router-dom";
import Main from "../MainPath/Main";
import Home from "../Components/MyDetails/Home";
import Contact from "../Components/MyDetails/Contact";
import About from "../Components/MyDetails/About/About";
import Skills from "../Components/MyDetails/Skills/Skills";
import Education from "../Components/MyDetails/Education/Education";
import Experience from "../Components/MyDetails/Experience/Experience";
import Projects from "../Components/Projects/Projects";
import ProjectsDetails from "../Components/Projects/ProjectsDetails";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/skills",
                element: <Skills />
            },
            {
                path: "/education",
                element: <Education />
            },
            {
                path: "/experience",
                element: <Experience />
            },
            {
                path: "/projects",
                element: <Projects />
            },
            {
                path: "/project-details/:id",
                loader: () => fetch('/MyWork.json'),
                element: <ProjectsDetails />
            },
        ]
    }
])