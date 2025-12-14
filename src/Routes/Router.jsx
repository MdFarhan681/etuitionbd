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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home,
          loader: async () => {
          const tuitions = await fetch("http://localhost:3000/tuitions");
          const tuitors = await fetch("http://localhost:3000/tuitors");

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
            fetch("http://localhost:3000/tuitions"),
      },
      {
        path: "/allTuitors",
        Component: AllTuitors,
        loader: () =>   fetch("http://localhost:3000/tuitors"),
      },
      {
        path: "/contact",
        Component: Contact,
        loader: () => fetch(""),
      },
      {
        path: "/about",
        Component: About,
        loader: () => fetch(""),
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
  },
]);
