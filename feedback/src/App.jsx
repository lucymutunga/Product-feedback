import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Section from "./Pages/Section.jsx";
import Suggestions from "./components/sidebar/Suggestions.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/suggestions" element={<Suggestions />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
