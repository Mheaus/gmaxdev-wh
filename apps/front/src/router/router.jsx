import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";
import CreateEmployee from "../pages/createEmployee/createEmployee";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <CreateEmployee />,
      },
    ],
  },
]);
