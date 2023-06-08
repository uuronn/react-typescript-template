// TODO: 型エラーの直し方が分からない
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./App";
import "./reset.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
