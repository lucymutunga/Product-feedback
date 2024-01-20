import React from "react";
import Tags from "./Tags.jsx";
import { useState } from "react";
import Roadmap from "./Roadmap.jsx";

const Sidepanel = () => {
  const [isOpen, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <section className="sidepanel bg-primary md:hidden sidepanel-content flex justify-between items-center   bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg h-32 w-full  p-5">
      <div className="w-full">
        <h1 className="intro-heading text-white font-bold ">Frontend Mentor</h1>
        <p className="intro-sub-heading text-white ">Feedback Board</p>
      </div>
      <div className="  ">
        <button onClick={handleClick}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.99989 6.37857L2.98948 0.368164L0.868164 2.48948L6.87857 8.49989L0.868164 14.5103L2.98948 16.6316L8.99989 10.6212L15.0103 16.6316L17.1316 14.5103L11.1212 8.49989L17.1316 2.48948L15.0103 0.368164L8.99989 6.37857Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="17"
              viewBox="0 0 20 17"
              fill="none"
            >
              <rect width="20" height="3" fill="white" />
              <rect y="7" width="20" height="3" fill="white" />
              <rect y="14" width="20" height="3" fill="white" />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-40 right-0">
          <Tags />
          <Roadmap />
        </div>
      )}
    </section>
  );
};

export default Sidepanel;
