import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound";
import Member from "./pages/Member";
import Tips from "./pages/Tips";
import HeaderBar from "./components/header";
import FooterBar from "./components/footer";

export default function App() {
  return (
      <BrowserRouter>
          <HeaderBar />
          <Routes>
              <Route exact path="/hp2022/" element={<Home />} />
              <Route path="/hp2022/about" element={<About />} />
              <Route path="/hp2022/member" element={<Member />} />
              <Route path="/hp2022/tips" element={<Tips />} />
              <Route path="/hp2022/*" element={<NotFound />} />
          </Routes>
          <FooterBar />
      </BrowserRouter>
  );
}
