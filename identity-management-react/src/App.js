import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Authorize from "./pages/Authorize";
import Info from "./pages/Info";

export default function App() {
  return (
    <div>
      <BrowserRouter basename="http://Xardesso.github.io/DAPP-identity-management">
        <Routes>
          <Route index element={<Main />} />
          <Route path="/authorize" element={<Authorize />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
