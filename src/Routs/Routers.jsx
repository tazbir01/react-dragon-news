import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/Home/Login/LogIn";
import Register from "../Pages/Home/Register/Register";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element: <Home></Home>
        },
        // {
        //   path: "/about",
        //   element: 
        // },
        {
          path:"/login",
          element: <LogIn></LogIn>
        },
        {
          path:"/register",
          element: <Register></Register>
        }
      ]
    },
  ]);

export default router;