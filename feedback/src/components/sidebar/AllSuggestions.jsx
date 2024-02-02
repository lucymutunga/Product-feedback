import React, { useEffect, useState } from "react";
import data from "../../../data.json";

// todo add message count.

const AllSuggestions = () => {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    setSuggestions(data.productRequests);
    console.log(suggestions);
  }, []);
  return (
    <div className=" flex flex-col  items-center  bg-[#F7F8FD] w-96   mt-2 p-4 h-max md:w-full">
      {suggestions.map((suggestion, key) => (
        <div className="  flex flex-col rounded-lg border-8 border-white bg-[#FFFFFF] w-fit h-56 mb-2 md:w-full md:px-20 md:py-8 ">
          <h2 className="font-bold text-[#3A4374]">{suggestion.title}</h2>
          <p className="text-[#647196] font-light">{suggestion.description}</p>
          <div className="rounded-lg bg-[#F2F4FF] w-40 h-7 mt-2">
            <h2 className="text-[#4661E6] text-center ">
              {suggestion.category}
            </h2>
          </div>
          <div>
            <div className="flex justify-between">
              <span className=" flex rounded-lg bg-[#F2F4FF] w-20 h-7 mt-2 p-1 ">
                <svg
                  className="mt-2 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="7"
                  viewBox="0 0 9 7"
                  fill="none"
                >
                  <path d="M0 6L4 2L8 6" stroke="#4661E6" strokeWidth="2" />
                </svg>
                <p>{suggestion.upvotes}</p>
              </span>
              <span className="flex mt-2 ">
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
                <p className="ml-1">
                  {suggestion.comments ? suggestion.comments.length : 0}
                </p>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default AllSuggestions;
