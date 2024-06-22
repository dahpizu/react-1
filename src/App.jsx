import React from "react";
import "./stylesheet.css";
import Home from "./Home";
import SingleMovie from "./movie";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" index Component={Home} />
          <Route path="/movie/:id" Component={SingleMovie} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
