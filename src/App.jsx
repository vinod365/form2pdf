import "./App.css";
import React, { useRef } from "react";
import { isMobile } from "react-device-detect";
import Table from "./templates/table";

import Home from "./pages/page";
import Auth from "./components/auth";

export const App = () => {
  return localStorage.getItem("auth") == 1 ? <Home /> : <Auth />;
};

export default App;
