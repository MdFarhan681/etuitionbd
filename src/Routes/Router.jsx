import { createBrowserRouter } from "react-router";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Alltuitions from "../Pages/Tuitions/Alltuitions";
import AllTuitors from "../Pages/Tuitors/AllTuitors";
import Contact from "../Pages/Contact";
import About from "../Pages/About";
import Auth from "../Layouts/Auth";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import Forget from "../Pages/Forget";
import Dashboard from "../Layouts/Dashboard";
import Student from "../Pages/DashBoard/Student/Student";
import Tutor from "../Pages/DashBoard/Tuitors/Tutor";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
          loader: async () => {
          const tuitions = await fetch("http://localhost:3000/home/tuitions");
          const tuitors = await fetch("http://localhost:3000/home/tuitors");

          return {
            tuitions: await tuitions.json(),
            tuitors: await tuitors.json(),
          };
        },
      },
      {
        path: "/allTuitions",
        Component: Alltuitions,
        loader: () =>
            fetch("http://localhost:3000/home/tuitions"),
        
      },
      {
        path: "/allTuitors",
        Component: AllTuitors,
        loader: () =>   fetch("http://localhost:3000/home/tuitors"),
      },
      {
        path: "/contact",
        Component: Contact,
     
      },
      {
        path: "/about",
        Component: About,
     
      },
    ],
  },{
    path: "/auth",
    Component: Auth,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/auth/forget",
        Component: Forget,
      },
    ],
  },{
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        path: "/dashboard/student",
        Component:Student ,
      },
      {
        path: "/dashboard/tutor",
        Component: Tutor,
      },
     
    ],
  },
]);
