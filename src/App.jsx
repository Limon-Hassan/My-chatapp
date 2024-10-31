import React from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Rootleayar from "./Rootleayar";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Pages/Login";
import Registation from "./Pages/Registation";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/sign in" element={<Login />}></Route>
      <Route path="/sign up" element={<Registation />}></Route>
      <Route path="/" element={<Rootleayar />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>
    </>
  )
);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
