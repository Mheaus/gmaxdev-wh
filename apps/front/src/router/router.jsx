import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import CreateEmployee from "../pages/createEmployee/createEmployee";
import ViewEmployee from "../pages/viewCurrentEmployee/viewCurrentEmployee";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CreateEmployee />,
      },
      {
        path: "/current",
        element: <ViewEmployee />,
      },
    ],
  },
]);
