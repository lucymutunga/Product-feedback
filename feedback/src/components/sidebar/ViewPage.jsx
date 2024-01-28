import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const ViewPage = () => {
  return (
    <div className="view-container bg-[#F7F8FD] w-96  ml-4 mt-2 ">
      <div className="view-header bg-[#373F68] flex justify-between px-4">
        <div className="ml-4 flex flex-col text-white">
          <div className="flex p-2 ">
            <Link to={"/"}>
              <svg
                className="mt-2 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="10"
                viewBox="0 0 5 10"
                fill="none"
              >
                <path d="M4 9L0 5L4 1" stroke="#CDD2EE" stroke-width="2" />
              </svg>
            </Link>

            <p>Go Back</p>
          </div>
          <h2 className="ml-2 mb-4">Roadmap</h2>
        </div>
        <div className="mt-4 ">
          <Button />
        </div>
      </div>
      <div className="flex justify-around mt-4">
        <p className="text-[#3A4374]">Planned (2)</p>
        <p className="text-[#3A4374]font-bold">In-Progress (3)</p>
        <p className="text-[#3A4374]">Live (1)</p>
      </div>
      <div className="ml-6 mt-4">
        <h2 className="text-[#3A4374] font-bold">In-Progress(3)</h2>
        <p className="font-light text-[#647196]">
          Features currently being developed
        </p>
      </div>

      <div className="flex flex-col rounded-lg border-8 border-white border-t-purple-500 ml-5 my-4 bg-[#FFFFFF]  w-80 h-56 ">
        <div className="flex my-4">
          <svg
            className="mt-2 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#AD1FEA" />
          </svg>
          <p className="text-[#647196]  ">In Progress</p>
        </div>
        <h2 className="font-bold text-[#3A4374]">Bookmark challenges</h2>
        <p className="text-[#647196] font-light">
          Be able to bookmark challenges to take later on.
        </p>
        <div className="rounded-lg bg-[#F2F4FF] w-20 h-7 mt-2">
          <h2 className="text-[#4661E6] text-center">Feature</h2>
        </div>
        <div>
          <div className="flex justify-between ">
            <span className=" flex rounded-lg bg-[#F2F4FF] w-20 h-7 mt-2 p-1 ">
              <svg
                className="mt-2 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
              >
                <path d="M0 6L4 2L8 6" stroke="#4661E6" stroke-width="2" />
              </svg>
              <p>31</p>
            </span>
            <span className="flex mt-2">
              <svg
                className="mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
              >
                <path
                  d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z"
                  fill="#CDD2EE"
                />
              </svg>
              <p className="ml-1">1</p>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col rounded-lg border-8 border-white border-t-purple-500 ml-5 my-4 bg-[#FFFFFF] w-80 h-56 ">
        <div className="flex my-4">
          <svg
            className="mt-2 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <circle cx="4" cy="4" r="4" fill="#AD1FEA" />
          </svg>
          <p className="text-[#647196]  ">In Progress</p>
        </div>
        <h2 className="font-bold text-[#3A4374]">
          Animated solutions screenshots
        </h2>
        <p className="text-[#647196] font-light">
          Screenshots of solutions with animations don't display content.
        </p>
        <div className="rounded-lg bg-[#F2F4FF] w-20 h-7 mt-2">
          <h2 className="text-[#4661E6] text-center">Bug</h2>
        </div>
        <div>
          <div className="flex justify-between ">
            <span className=" flex rounded-lg bg-[#F2F4FF] w-20 h-7 mt-2 p-1 ">
              <svg
                className="mt-2 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
              >
                <path d="M0 6L4 2L8 6" stroke="#4661E6" stroke-width="2" />
              </svg>
              <p>9</p>
            </span>
            <span className="flex mt-2">
              <svg
                className="mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
              >
                <path
                  d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z"
                  fill="#CDD2EE"
                />
              </svg>
              <p className="ml-1">0</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
