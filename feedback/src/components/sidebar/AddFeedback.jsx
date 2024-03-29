import React from "react";

import { Link } from "react-router-dom";
const AddFeedback = () => {
  return (
    <div className="feed-container flex flex-col justify-center items-center bg-[#F7F8FD] w-auto h-auto ml-4 md:w-auto md:h-screen">
      <div className="flex  p-4 my-4 mr-40 md:mr-80">
        <Link to={"/"}>
          <svg
            className="mt-2 md:mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="10"
            viewBox="0 0 5 10"
            fill="none"
          >
            <path d="M4 9L0 5L4 1" stroke="#4661E6" stroke-width="2" />
          </svg>
        </Link>
        <h2 className="ml-4 md:mr-20">Go back</h2>
      </div>
      <div className="feed-content p-4 bg-[#FFFFFF] w-72 h-auto md:w-auto md:h-auto md:py-20 ">
        <svg
          className="absolute top-16 md:top-56"
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <circle cx="20" cy="20" r="20" fill="url(#paint0_radial_0_173)" />
          <path
            d="M21.6732 25.7142V21.5469H25.7353V18.474H21.6732V14.2856H18.3898V18.474H14.2856V21.5469H18.3898V25.7142H21.6732Z"
            fill="white"
          />
          <defs>
            <radialGradient
              id="paint0_radial_0_173"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(41.56 -4.15462) rotate(129.411) scale(66.7263)"
            >
              <stop stop-color="#E84D70" />
              <stop offset="0.530886" stop-color="#A337F6" />
              <stop offset="1" stop-color="#28A7ED" />
            </radialGradient>
          </defs>
        </svg>
        <h1 className="font-bold my-4">Create New Feedback</h1>

        <form>
          <div className="">
            <label className="font-semibold " htmlFor="feedback">
              Feedback Title
            </label>

            <p className="font-light my-1">Add a short, descriptive headline</p>
            <input
              className="bg-[#F7F8FD] min-w-60 md:w-full"
              type="text"
              name="feedback"
            />
          </div>
          <div className="">
            <label className="font-semibold " htmlFor="category">
              Category
            </label>
            <p className="font-light my-1">
              Choose a category for your feedback
            </p>
            <div className="flex  ">
              <input
                className="bg-[#F7F8FD] w-60 md:w-full "
                type="text"
                name="category"
                placeholder="Feature"
              />
              <svg
                className="mt-2 "
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
              >
                <path d="M1 1L5 5L9 1" stroke="#4661E6" stroke-width="2" />
              </svg>
            </div>
          </div>
          <div>
            <label className="  font-semibold" htmlFor="details">
              Feedback Detail
            </label>
            <p className="font-light my-1">
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea
              className="bg-[#F7F8FD] md:w-full"
              name="details"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="flex flex-col text-white md:flex md:flex-row-reverse md:items-center md:justify-center md:mt-2">
            <button className="bg-[#AD1FEA] w-60 rounded-lg p-1 my-1 md:m-0 md:w-32 md:ml-2 ">
              Add Feedback
            </button>
            <button className="bg-[#3A4374] w-60 rounded-lg p-1 my-1 md:w-32 md:ml-2 ">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFeedback;
