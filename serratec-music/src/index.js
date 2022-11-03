import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Playlist from "./Playlist";
import Formulario from "./Formulario";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/top" element={<Playlist />} />
      <Route path="/cadastro" element={<Formulario />} />
    </Routes>
  </BrowserRouter>
);
