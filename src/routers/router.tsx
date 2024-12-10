import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound/NotFound";
import HomePage from "../pages/Home/HomePage";
import Courses from "../pages/Courses/Courses";
import Login from "../pages/Login/Login";
import { ProtectedRoute } from "./ProtectedRouter";

export const routes= [
    {
        path:'/',
        element:<ProtectedRoute><App/>,</ProtectedRoute>,
        errorElement:<NotFound/>,
        children:[
            {path:"/",element:<HomePage/>},
            {path:"/home",element:<HomePage/>},
            {path:"/courses",element:<Courses/>},
        ]
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/sign',
        element:<Login/>
    },
    
    {
        path:'*',
        element:<NotFound/>
    }
]

export const router=createBrowserRouter(routes) 