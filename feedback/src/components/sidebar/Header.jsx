import React from "react";
import EmptyFeed from "./EmptyFeed";
import Button from "./Button";
import DropDown from "./DropDown";
const Header = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <section className=" header flex justify-between items-center  bg-header w-auto h-24 md:rounded-lg md:w-auto p-5  mx-2 ml-0 lg:w-full">
      <div className=" hidden  text-white font-semibol ml-6">
        <p className="ml-2">0 Suggestions</p>
      </div>
      <div className="flex text-white">
        <p>Sort by :</p>
        <button className="flex items-center">
          <span className="mx-2">Most Upvotes</span>
          <div className="">
            <button onClick={handleClick}>
              {isClicked ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="7"
                  viewBox="0 0 9 7"
                  fill="none"
                >
                  <path d="M1 6L5 2L9 6" stroke="white" stroke-width="2" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9"
                  height="7"
                  viewBox="0 0 9 7"
                  fill="none"
                >
                  <path d="M1 1L5 5L9 1" stroke="white" stroke-width="2" />
                </svg>
              )}
            </button>
          </div>
        </button>
      </div>
      {isClicked && (
        <div className="absolute -mb-40 ml-24">
          <DropDown />
        </div>
      )}
      <div>
        <Button />
      </div>
    </section>
  );
};

export default Header;
