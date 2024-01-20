import React from "react";
import Sidepaneldesktop from "./components/sidebar/Sidepaneldesktop.jsx";
import Header from "./components/sidebar/Header.jsx";
import Emptyfeed from "./components/sidebar/Emptyfeed.jsx";
import Tags from "./components/sidebar/Tags.jsx";
import Roadmap from "./components/sidebar/Roadmap.jsx";
const App = () => {
  return (
    <div className="flex  flex-col mt-16">
      <div className="flex ">
        <div className="">
          <Sidepaneldesktop />
        </div>
        <div className="">
          <Tags />
        </div>
        <div className="hidden md:block">
          <Roadmap />
        </div>
      </div>
      <div className="">
        <Header />
      </div>
      <div className="">
        <Emptyfeed />
      </div>
    </div>
  );
};

export default App;
