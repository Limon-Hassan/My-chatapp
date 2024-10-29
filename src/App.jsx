import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registation from "./Pages/Registation";
import Login from "./Pages/Login";

const router = createBrowserRouter([
  {
    path: "/sign up",
    element:<Registation/>,
  },
  {
    path: "/",
    element:<Login/>,
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
