import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Authorize from "./pages/Authorize";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/authorize" element={<Authorize />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
