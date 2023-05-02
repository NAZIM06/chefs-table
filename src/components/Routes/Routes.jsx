import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Blog from "../Pages/Blog";
import AboutUs from "../Pages/AboutUs";


const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            // {
            //     path: 'chefRecipe/:id',
            //     element: <ChefRecipe/>,
            //     loader: ({params}) => fetch(`http://localhost:5000/recipe/${params.id}`)
            // },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'aboutus',
                element: <AboutUs></AboutUs>
            }
        ]
    }
])

export default route;