import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUP/SignUp";

export const router = createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
 path:'/login',
 element:<Login></Login>
      },
      {
 path:'/signIn',
 element:<SignUp></SignUp>
      }

    ]
}
])