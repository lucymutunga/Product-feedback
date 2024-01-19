import React from "react";
import Sidepanel from "./components/sidebar/Sidepanel.jsx";
import Header from "./components/sidebar/Header.jsx";

const App = () => {
  return (
    <div className="flex">
      <Sidepanel />
      <Header />
    </div>
  );
};

export default App;
