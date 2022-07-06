import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Member from './pages/Member';
import Tips from "./pages/Tips";

function App() {
  return (
    <div>
        <p>hello</p>
        <Routes>
          <Route index element={<Home />} />
          <Route path="member" element={<Member />} />
          <Route path="tips" element={<Tips />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
