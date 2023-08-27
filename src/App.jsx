import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";

import Landing from "./Landing";
import {
  // About,
  Contact,
  Courses,
  Footer,
  Header,
  // LogIn,
  News,
  NotFound,
  Opinions,
} from "./components";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Routes>
        <Route index path="/" element={<Landing />} />
        {/* <Route path="/biz-haqimizda" element={<About />} /> */}
        <Route path="/kurslar" element={<Courses />} />
        <Route path="/fikrlar" element={<Opinions />} />
        <Route path="/yangiliklar" element={<News />} />
        <Route path="/aloqa" element={<Contact />} />
        {/* <Route path="/login" element={<LogIn />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
