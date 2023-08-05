import React from "react";
import { Footer, Header } from "./components/index";
import { Outlet } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import {
  About,
  Contact,
  Courses,
  Home,
  LogIn,
  News,
  Opinions,
} from "./components";
function Landing() {
  return (
    <>
      <Home />
      <Courses />
      <Opinions />
      <Contact />
      <News />
    </>
  );
}

export default Landing;
