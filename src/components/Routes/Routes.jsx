import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Blog from "../Pages/Blog";
import AboutUs from "../Pages/AboutUs";
import ErrorPage from "../Pages/Shared/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import ChefRecipe from "../Pages/ChefRecipe";


const route = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'chefRecipe/:id',
                element: <PrivateRoute><ChefRecipe/></PrivateRoute>,
                loader: ({params}) => fetch(`https://chefs-table-server-psi.vercel.app/recipe/${params.id}`)
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register/>
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