import React from "react";
import Sidepaneldesktop from "../components/sidebar/Sidepaneldesktop";
import Tags from "../components/sidebar/Tags";
import Roadmap from "../components/sidebar/Roadmap";
import Header from "../components/sidebar/Header";
import EmptyFeed from "../components/sidebar/EmptyFeed";
import ViewPage from "../components/sidebar/ViewPage";

const Section = () => {
  return (
    <div className=" whole flex  flex-col mt-4  md:w-auto lg:w-auto ">
      <div className="lg:flex flex-col ">
        <div className="lg:flex ">
          <div className="md:flex lg:block md:mx-6">
            <Sidepaneldesktop />
            <div className="hidden md:flex lg:block">
              <Tags />
              <Roadmap />
            </div>
          </div>
          <div className="hidden lg:block lg:w-full">
            <Header />
            <EmptyFeed />
          </div>
        </div>
        <div className=" hidden lg:ml-0 lg:hidden md:hidden">
          <Tags />
        </div>
        <div className="hidden lg:hidden md:hidden">
          <Roadmap />
        </div>
      </div>
      <div className="lg:hidden md:mx-6">
        <Header />
      </div>
      <div className="lg:hidden   ">
        <EmptyFeed />
      </div>
      <ViewPage />
    </div>
  );
};

export default Section;
