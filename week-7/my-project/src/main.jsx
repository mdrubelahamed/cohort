import { Children, StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "./Layout.jsx"
import Home from "./components/Home.jsx"
import About from "./components/About.jsx"
import Contact from "./components/Contact.jsx"
import User from "./components/User.jsx"
import Github, { githubInfoLoader } from "./components/Github.jsx"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "contact",
                element: <Contact />,
            },
            {
                path: "user/:id",
                element: <User />,
            },
            {
                loader: githubInfoLoader,
                path: "github",
                element: <Github />,
            },
        ],
    },
])

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
