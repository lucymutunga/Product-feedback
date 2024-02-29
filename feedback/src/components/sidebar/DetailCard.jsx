import React from "react";
import { Link } from "react-router-dom";
const DetailCard = () => {
  return (
    <div className="container bg-[#F7F8FD] w-96 h-max p-4">
      <div className="flex justify-between p-6">
        <div className="flex p-1 ">
          <svg
            className="mt-2 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            width="5"
            height="10"
            viewBox="0 0 5 10"
            fill="none"
          >
            <path d="M4 9L0 5L4 1" stroke="#4661E6" strokeWidth="2" />
          </svg>
          <Link to={"/"} className="text-[#647196]">
            Go Back
          </Link>
        </div>
        <Link to={"/edit"}>
          <button className="bg-[#4661E6] rounded-lg p-1 text-white ">
            Edit Feedback
          </button>
        </Link>
      </div>
      <div className="rounded-lg border-8 border-white bg-[#FFFFFF]">
        <div className="flex space-x-4">
          <span className="flex flex-col rounded-md bg-[#F7F8FD] w-8 h-12 p-2 ">
            <svg
              className="ml-1"
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="7"
              viewBox="0 0 9 7"
              fill="none"
            >
              <path d="M0 6L4 2L8 6" stroke="#4661E6" stroke-width="2" />
            </svg>
            <p>99</p>
          </span>
          <div className="flex flex-col">
            <h2 className="font-bold text-[#3A4374]">
              Add a dark theme option
            </h2>
            <p className="text-[#647196] font-light">
              It would help people like me with light sensitivities.
            </p>
            <h2 className="text-[#4661E6] text-center  rounded-lg bg-[#F2F4FF] w-28 h-7 mt-2">
              Feature
            </h2>
          </div>
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
            <p className="ml-1">4</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
