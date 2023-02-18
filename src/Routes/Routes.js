import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import ApplyPage from "../pages/ApplyPage/ApplyPage";
import Contact from "../pages/Contact/Contact";
import ExperienceDetails from "../pages/Home/Experiences/Experience/ExperienceDetails/ExperienceDetails";
import FreshersDetels from "../pages/Home/Freshers/FreshersDetels/FreshersDetels";
import Home from "../pages/Home/Home";
import TopBangladeshDetails from "../pages/Home/TopBangladesh/TopBangladeshDetails";
import WorldwideCompanies from "../pages/Home/WorldwideCompanies/WorldwideCompanies";
import WorldWideCompaniesDetails from "../pages/Home/WorldwideCompanies/WorldWideCompaniesDetails/WorldWideCompaniesDetails";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUP/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
        path:'/',
        element:<Home></Home>
      },
      {
 path:'/login',
 element:<Login></Login>
      },
     
      {
 path:'/signIn',
 element:<SignUp></SignUp>
      },
      {
 path:'/fresher/:id',
 element:<FreshersDetels></FreshersDetels>,
   loader: ({params})=>

    fetch(`https://job-protals-server.vercel.app/fresher/${params.id}`)
   
      },
      {
 path:'/experience/:id',
 element:<ExperienceDetails></ExperienceDetails>,
   loader: ({params})=>

    fetch(`https://job-protals-server.vercel.app/experience/${params.id}`)
   
      },
      {
 path:'/companies/:id',
 element:<TopBangladeshDetails></TopBangladeshDetails>,
   loader: ({params})=>

    fetch(`https://job-protals-server.vercel.app/companies/${params.id}`)
   
      },
      {
 path:'/worldwide/:id',
 element:<WorldWideCompaniesDetails></WorldWideCompaniesDetails>,
   loader: ({params})=>

    fetch(`https://job-protals-server.vercel.app/worldwide/${params.id}`)
   
      },
      {
 path:'/fresher/apply',
 element: <PrivateRoute> <ApplyPage></ApplyPage></PrivateRoute>  ,
   
   
      },

      {
        path:'/contact',
        element:<Contact></Contact>
      }


    ]
}
])