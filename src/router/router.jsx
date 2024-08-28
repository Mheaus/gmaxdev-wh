import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
]);
