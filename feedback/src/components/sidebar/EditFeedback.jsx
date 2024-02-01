import React from "react";

import { Link } from "react-router-dom";
const EditFeedback = () => {
  return (
    <div className="feed-container flex flex-col justify-center items-center bg-[#F7F8FD] w-80 h-auto ml-4 md:w-screen md:h-svh lg:h-auto">
      <div className="flex p-4 my-4 mr-40 md:mr-96 ">
        <Link to={"/"}>
          <svg
            className="mt-2 "
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="10"
            viewBox="0 0 5 10"
            fill="none"
          >
            <path d="M4 9L0 5L4 1" stroke="#4661E6" stroke-width="2" />
          </svg>
        </Link>
        <h2 className="ml-4">Go back</h2>
      </div>
      <div className="feed-content p-4 bg-[#FFFFFF] w-72 h-auto md:w-auto md:h-auto md:mt-0">
        <svg
          className="absolute top-16 md:mt-44 "
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <circle cx="20" cy="20" r="20" fill="url(#paint0_radial_0_129)" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.5268 14.4656L23.2569 12L28 16.4426L25.4162 19.0493L20.5268 14.4656ZM11 28.713C11.6704 25.9211 13.539 18.7818 13.539 18.7818L19.5124 15.3671L24.4871 19.8979L20.6864 25.4371L11.2279 29L15.7117 24.8991C16.471 25.1749 17.5434 24.9255 18.1232 24.3063C18.8885 23.4931 18.8311 22.23 17.9944 21.4855C17.1577 20.7411 15.7951 20.7411 15.0298 21.5543C14.4597 22.1606 14.2633 23.2302 14.5891 23.9353L11 28.713Z"
            fill="white"
          />
          <defs>
            <radialGradient
              id="paint0_radial_0_129"
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
        <h1 className="font-bold my-4">Editing ‘Add a dark theme option’</h1>

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
          <div className="">
            <label className="font-semibold " htmlFor="category">
              Category
            </label>
            <p className="font-light my-1">
              Choose a category for your feedback
            </p>
            <div className="flex  ">
              <input
                className="bg-[#F7F8FD] w-60 md:w-full"
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

          <div className="">
            <label className="font-semibold " htmlFor="category">
              Update Status
            </label>
            <p className="font-light my-1">Change feature state</p>
            <div className="flex  ">
              <input
                className="bg-[#F7F8FD] w-60 md:w-full"
                type="text"
                name="category"
                placeholder="Planned"
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
              placeholder="It would help people with light sensitivities and who prefer dark mode."
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="flex flex-col text-white md:flex md:flex-row-reverse  md:w-96">
            <button className="bg-[#AD1FEA] w-60 rounded-lg p-1 my-1 md:ml-12 md:w-80 md:mt-4 ">
              Save Change
            </button>
            <button className="bg-[#3A4374] w-60 rounded-lg p-1 my-1 md:ml-16 md:mt-4">
              Cancel
            </button>
            <button className="bg-[#D73737] w-60 rounded-lg p-1 my-1 md:mt-4">
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditFeedback;
