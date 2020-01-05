import React from 'react';
import "./styles/tailwind.css";
import MainRoutes from "./router/MainRouter";
import { BrowserRouter as Router } from "react-router-dom";
const App: React.FC = () => {
  return (
    <>
      <Router>
        <MainRoutes />
      </Router>
    </>
  );
}

export default App;
