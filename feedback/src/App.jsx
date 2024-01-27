import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Section from "./Pages/Section";
import AddFeedback from "./components/sidebar/AddFeedback";
import ViewPage from "./components/sidebar/ViewPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/addfeedback" element={<AddFeedback />} />
          <Route path="/view" element={<ViewPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
