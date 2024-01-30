import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Section from "./Pages/Section";
import AddFeedback from "./components/sidebar/AddFeedback";
import ViewPage from "./components/sidebar/ViewPage";
import AllSuggestions from "./components/sidebar/AllSuggestions";
import EditFeedback from "./components/sidebar/EditFeedback";
import FeedbackDetail from "./components/sidebar/FeedbackDetail";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Section />} Route />
          <Route path="/addfeedback" element={<AddFeedback />} />
          <Route path="/view" element={<ViewPage />} />
          <Route path="/all" element={<AllSuggestions />} />
          <Route path="/edit" element={<EditFeedback />} />
          <Route path="/detail" element={<FeedbackDetail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
