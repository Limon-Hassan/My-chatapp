import React from "react";
import { Outlet } from "react-router-dom";
import Home from "./Components/Home";
import Sideber from "./Components/Sideber";

const Rootleayar = () => {
  return (
    <>
      <Sideber></Sideber>
      <Outlet />
    </>
  );
};

export default Rootleayar;
