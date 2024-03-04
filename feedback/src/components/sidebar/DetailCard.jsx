import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../../data.json";

const DetailCard = () => {
  const { suggestionId } = useParams();
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  useEffect(() => {
    setSuggestions(data.productRequests);
    const parsedSuggestionId = parseInt(suggestionId, 10);
    setSelectedSuggestion(parsedSuggestionId);
  }, [suggestionId]);

  const selectedSuggestionData = selectedSuggestion
    ? suggestions.find((suggestion) => suggestion.id === selectedSuggestion)
    : null;

  const selectedSuggestionComments = selectedSuggestionData
    ? selectedSuggestionData.comments
    : [];

  return (
    <div className=" md:w-full bg-[#F7F8FD] w-96 h-max p-4 lg:flex lg:flex-col lg:items-center ">
      <div className="md:flex justify-between p-6 lg:w-[756px]">
        <div className="flex p-1 lg:w-[756px]">
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
      {selectedSuggestionData && (
        <div className="rounded-lg border-8 border-white bg-[#FFFFFF] lg:w-[756px] ">
          <div className="flex space-x-4 lg:space-x-20">
            <span className="flex flex-col rounded-md bg-[#F7F8FD] w-8 h-12 p-2 ">
              <svg
                className="ml-1 "
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="7"
                viewBox="0 0 9 7"
                fill="none"
              >
                <path d="M0 6L4 2L8 6" stroke="#4661E6" strokeWidth="2" />
              </svg>
              <p>{selectedSuggestionData.upvotes}</p>
            </span>
            <div className=" md:flex flex-col">
              <h2 className="font-bold text-[#3A4374]">
                {selectedSuggestionData.title}
              </h2>
              <p className="text-[#647196] font-light">
                {selectedSuggestionData.description}
              </p>
              <h2 className="text-[#4661E6] text-center  rounded-lg bg-[#F2F4FF] w-28 h-7 mt-2">
                {selectedSuggestionData.category}
              </h2>
            </div>
            <span className="flex mt-2">
              <svg
                className="mt-1 lg:ml-32"
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
              <p className="ml-1">{selectedSuggestionComments.length}</p>
            </span>
          </div>
        </div>
      )}

      <div className=" comments-container bg-[#FFF] w-fit ml-3">
        <h1 className="text-[#3A4374] font-bold ml-5 p-4">
          {selectedSuggestionComments.length} Comments
        </h1>

        {selectedSuggestion !== null &&
        selectedSuggestionComments.length > 0 ? (
          <div className="md:w-100 selected-suggestion-comments lg:w-[756px]">
            {selectedSuggestionComments.map((comment) => (
              <div key={comment.id} className="border-b mt-2">
                <div className="flex justify-between p-6">
                  <img
                    src={comment.user.image}
                    alt="user"
                    className="w-10 h-10"
                  />
                  <div className=" flex flex-col">
                    <p className="text-[#3A4374] font-semibold lg:mr-96">
                      {comment.user.name}
                    </p>
                    <p className="text-[#647196] ">{comment.user.username}</p>
                  </div>
                  <button className="text-[#4661E6] font-semibold">
                    Reply
                  </button>
                </div>
                <p className="p-4">{comment.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No comments yet.</p>
        )}
      </div>

      <div className=" md:comment-container mt-8 start-0 ml-4 w-80 h-50 bg-white lg:w-[756px] lg:h-[246px]">
        <h1 className="font-semibold  py-6 px-4">Add Comment</h1>

        <input
          type="text"
          placeholder="Type your comment here"
          className="w-11/12  h-[80] bg-[#F7F8FD]  py-4 px-4 ml-4 lg:w-[664px] lg:h-[80px]"
        />

        <div className=" md:flex  justify-between ml-4 py-8">
          <p className="text-[#647196] lg:ml-2">250 characters left</p>
          <button className="bg-[#AD1FEA] rounded-lg text-white p-1 mr-2 lg:mr-20">
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
