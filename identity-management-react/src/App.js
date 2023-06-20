import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
  Router,
} from "react-router-dom";
import Main from "./pages/Main";
import Authorize from "./pages/Authorize";
import Info from "./pages/Info";

export default function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/DAPP-identity-management" element={<Main />} />
          <Route
            path="/DAPP-identity-management/authorize"
            element={<Authorize />}
          />
          <Route path="/DAPP-identity-management/info" element={<Info />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
