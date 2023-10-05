import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/Home/Login/LogIn";
import Register from "../Pages/Home/Register/Register";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import News from "../Pages/Home/News";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element: <Home></Home>,
            loader: () => fetch('/news.json')
        },
        {
            path:"/news/:id",
            element: <News></News>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/career",
          element: <Career></Career>
        },
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