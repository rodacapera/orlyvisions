import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import DynamicLinkPage from "./pages/DynamicLinkPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="dynamicLink" element={<DynamicLinkPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
