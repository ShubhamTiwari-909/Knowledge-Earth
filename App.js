import React from "react";
import Home from "./components/Home";
import Wikisearch from "./components/WIkisearch";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/knowledgeearth/*" element={<Wikisearch />} />
      </Routes>
    </Router>
  );
}

export default App;
