import React from "react";
import Tags from "./Tags.jsx";
import Roadmap from "./Roadmap.jsx";
import Sidepanelmobile from "./Sidepanelmobile.jsx";
import Sidepaneltablet from "./Sidepaneltablet.jsx";
const Sidepanel = () => {
  return (
    <>
      <section className="sidepanel hidden md:flex lg:block bg-primary  ">
        <div className="sidepanel-content md:block  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg h-32 w-64 ml-16 p-1 md:m-0 md:w-64 lg:ml-4">
          <div className="sidepanel-info ml-18 mt-14">
            <h1 className="intro-heading text-white font-bold ml-6">
              Frontend Mentor
            </h1>
            <p className="intro-sub-heading text-white ml-6">Feedback Board</p>
          </div>
        </div>
      </section>
      <div className=" md:hidden ">
        <Sidepanelmobile />
        <Sidepaneltablet />
      </div>
    </>
  );
};

export default Sidepanel;
