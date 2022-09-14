import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound";
import Member from "./pages/Member";
import Tips from "./pages/Tips";
import HeaderBar from "./components/header";
import FooterBar from "./components/footer";

const pubURL = process.env.PUBLIC_URL;

export default function App() {
  return (
      <BrowserRouter>
          <HeaderBar />
          <Routes>
              <Route exact path={pubURL} element={<Home />} />
              <Route path={pubURL + "/about"} element={<About />} />
              <Route path={pubURL + "/member"} element={<Member />} />
              <Route path={pubURL + "/tips"} element={<Tips />} />
              <Route path={pubURL + "/*"} element={<NotFound />} />
          </Routes>
          <FooterBar />
      </BrowserRouter>
  );
}
