import React from "react";
import {
  // About,
  Contact,
  Courses,
  Home,
  // LogIn,
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
