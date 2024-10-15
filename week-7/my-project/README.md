## Project Details
1. Initialize the project
2. add tailwind.config.js (tailwind css in the project)
3. also install react-router-dom library
4. create pages like home, contact, about, github in the components folder
5. create routes like home, contact, about, github in the main.jsx file

---
## Explain main.jsx file
The file has some interesting thing in it. which is new for me

- we didn't render <App /> there we actually    
we render there this ```<RouterProvider router={router} />```

and after that we create a router and pass it to the router provider using createBrowserRouter  

inside the router we have multiple routes like home, contact, about, github but  

we first create an array and inside the array we have an object with path and element and then we have children array  
and inside the children array we have all the routes 

** last but not the list other than path and element we also have loader for the github section   

---
we use this with the help of useLoaderData() to get the data from the loader it's from react-router-dom library

the useLoaderData() hook is used to access the data returned by the loader function that is associated with the current route.  

and the loader is defined in the Github.jsx file


### Link, NavLink

we used link not `<a>` tag since it's will help us not to refresh the entire page when click to the link    

we use NavLink not `<NavLink>` tag because NavLink is a special component that is used to render a link with a specific active class when it is active.


---
---
---
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
