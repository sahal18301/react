import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {App} from "./App.jsx";
import Home from "./pages/Home.jsx";
import FormPage from "./pages/FormPage.jsx";
import ReviewPage from "./pages/ReviewPage.jsx";
import SubmitPage from "./pages/SubmitPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/submit" element={<SubmitPage />} />
    </Routes>
  </BrowserRouter>,
);
