import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound";
import Member from "./pages/Member";
import Tips from "./pages/Tips";
import DrawerAppBar from "./components/header";

export default function App() {
  return (
      <BrowserRouter>
          <DrawerAppBar />
          <p>hello</p>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/member" element={<Member />} />
              <Route path="/tips" element={<Tips />} />
              <Route path="/*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
  );
}
