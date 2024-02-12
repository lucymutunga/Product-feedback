import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import image1 from "../../assets/user-images/image.png";
import data from "../../../data.json";

const FeedbackDetail = () => {
  const { suggestionId } = useParams();
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);

  useEffect(() => {
    setSuggestions(data.productRequests);
    const parsedSuggestionId = parseInt(suggestionId, 10);
    setSelectedSuggestion(parsedSuggestionId);
  }, [suggestionId]);

  const selectedSuggestionComments = selectedSuggestion
    ? suggestions.find((suggestion) => suggestion.id === selectedSuggestion)
        .comments
    : [];

  return (
    <div className="detail-container bg-[#F7F8FD] w-96 h-max p-4">
      <div className="feedcontent">
        <div className="flex justify-between">
          <div className="flex p-1 ">
            <svg
              className="mt-2 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              width="5"
              height="10"
              viewBox="0 0 5 10"
              fill="none"
            >
              <path d="M4 9L0 5L4 1" stroke="#4661E6" stroke-width="2" />
            </svg>
            <p className="text-[#647196]"> Go Back </p>
          </div>
          <Link to={"/edit"}>
            <button className="bg-[#4661E6] rounded-lg p-1 text-white ">
              Edit Feedback
            </button>
          </Link>
        </div>

        <div className="flex flex-col rounded-lg border-8 border-white    bg-[#FFFFFF] w-80 h-60 mb-2 p-8 mt-8 ml-4 ">
          <h2 className="font-bold text-[#3A4374]">Add a dark theme option</h2>
          <p className="text-[#647196] font-light">
            It would help people with light sensitivities and who prefer dark
            mode.
          </p>
          <div className="rounded-lg bg-[#F2F4FF] w-40 h-7 mt-2">
            <h2 className="text-[#4661E6] text-center ">Enhancement</h2>
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
        <div className="comments-container bg-[#FFF] w-80 ml-3">
          <h1 className="text-[#3A4374] font-bold ml-5 p-4">4 Comments</h1>

          {selectedSuggestion !== null &&
          selectedSuggestionComments.length > 0 ? (
            <div className="selected-suggestion-comments">
              {selectedSuggestionComments.map((comment) => (
                <div key={comment.id} className="border-b mt-2">
                  <div className="flex justify-between p-6">
                    <img
                      src={comment.user.image}
                      alt="user"
                      className="w-10 h-10"
                    />
                    <div className="flex flex-col">
                      <p className="text-[#3A4374] font-semibold">
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
      </div>
      <div className="comment-container border start-0 ml-4 w-80 h-50 bg-white">
        <h1 className="font-bold">Add Comment</h1>
        <div className="w-60 h-34">
          <input
            type="text"
            placeholder="Type your comment here"
            className="w-80"
          />
          <div>
            <p>250 characters left</p>
            <button className="bg-[#AD1FEA]">Post Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetail;
